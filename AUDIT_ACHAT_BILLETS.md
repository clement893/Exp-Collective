# Audit des Fonctions d'Achat de Billets

**Date:** 2026-01-18  
**Système:** Système de réservation Masterclass ACT avec Russ Harris  
**Portée:** Backend (FastAPI) + Frontend (Next.js)

⚠️ **NOTE IMPORTANTE:** Ce système de réservation/achat de billets n'est **PAS nécessaire** pour le projet final. Le site sera un site marketing pur avec CMS. Voir `PLAN_NETTOYAGE_RESERVATIONS.md` pour le plan de suppression de ces fonctionnalités.

---

## 📋 Table des Matières

1. [Architecture Générale](#architecture-générale)
2. [Flux de Réservation](#flux-de-réservation)
3. [Calcul des Prix](#calcul-des-prix)
4. [Gestion des Disponibilités](#gestion-des-disponibilités)
5. [Paiement Stripe](#paiement-stripe)
6. [Webhooks et Confirmation](#webhooks-et-confirmation)
7. [Points d'Attention](#points-dattention)
8. [Recommandations](#recommandations)

---

## 🏗️ Architecture Générale

### Modèles de Données

**Booking (Réservation)**
- `id`: Identifiant unique
- `booking_reference`: Référence unique (format: MC2025-XXXXXX)
- `city_event_id`: Lien vers l'événement ville
- `status`: PENDING | CONFIRMED | CANCELLED | REFUNDED
- `payment_status`: PENDING | PAID | FAILED | REFUNDED
- `ticket_type`: REGULAR | EARLY_BIRD | GROUP
- `quantity`: Nombre de billets
- `subtotal`, `discount`, `total`: Calculs de prix
- `payment_intent_id`: ID Stripe PaymentIntent
- `attendee_name`, `attendee_email`, `attendee_phone`: Informations participant

**Attendee (Participant)**
- Informations détaillées pour chaque participant
- Support pour réservations de groupe

**BookingPayment**
- Historique des transactions de paiement
- Support pour remboursements

### Services Principaux

1. **BookingService** (`backend/app/services/booking_service.py`)
   - Création de réservations
   - Calcul des prix
   - Génération de références uniques
   - Annulation de réservations

2. **AvailabilityService** (`backend/app/services/availability_service.py`)
   - Calcul des places disponibles
   - Mise à jour de la disponibilité
   - Cache Redis (TTL 1 min)

3. **StripeService** (`backend/app/services/stripe_service.py`)
   - Création de PaymentIntent
   - Gestion des clients Stripe
   - Webhooks

---

## 🔄 Flux de Réservation

### 1. Sélection Ville/Date (Frontend)
- **Page:** `/book` ou `/book/checkout`
- **Données:** Ville, date, prix de base
- **Stockage:** Query params (`city`, `date`, `price`, `currency`)

### 2. Formulaire de Réservation (Frontend)
- **Page:** `/book/checkout`
- **Composant:** `BookingForm`
- **Données collectées:**
  - Nom, email, téléphone
  - Type de billet (REGULAR/EARLY_BIRD/GROUP)
  - Quantité
  - Participants additionnels (pour groupes)

### 3. Création de la Réservation (Backend)
- **Endpoint:** `POST /api/v1/bookings/create`
- **Service:** `BookingService.create_booking()`
- **Validations:**
  - ✅ Vérification existence de l'événement
  - ✅ Vérification disponibilité (places disponibles)
  - ✅ Vérification statut événement (PUBLISHED, pas SOLD_OUT)
  - ✅ Application automatique early bird si applicable
  - ✅ Application remise groupe si quantité >= minimum
- **Actions:**
  - Génération référence unique (MC2025-XXXXXX)
  - Calcul prix (subtotal, discount, total)
  - Création booking avec status PENDING
  - Création attendee(s)
  - Mise à jour disponibilité (async)

### 4. Page de Paiement (Frontend)
- **Page:** `/book/payment?bookingReference=MC2025-XXXXXX`
- **Composant:** `BookingStripeCheckout`
- **Actions:**
  - Chargement booking par référence
  - Création PaymentIntent via API
  - Intégration Stripe Elements
  - Gestion succès/erreur

### 5. Création PaymentIntent (Backend)
- **Endpoint:** `POST /api/v1/bookings/{booking_id}/create-payment-intent`
- **Service:** `StripeService.create_payment_intent_for_booking()`
- **Actions:**
  - Vérification booking existe et non payé
  - Création/récupération client Stripe
  - Création PaymentIntent avec metadata
  - Sauvegarde `payment_intent_id` dans booking

### 6. Paiement Stripe (Frontend)
- **Composant:** `BookingStripeCheckout`
- **Actions:**
  - Affichage formulaire Stripe Elements
  - Soumission paiement
  - Redirection confirmation si succès

### 7. Webhook Stripe (Backend)
- **Endpoint:** `POST /api/webhooks/stripe`
- **Handler:** `handle_payment_intent_succeeded()`
- **Actions:**
  - Mise à jour `payment_status` = PAID
  - Mise à jour `status` = CONFIRMED
  - Enregistrement `confirmed_at`
  - Envoi email de confirmation
  - Mise à jour disponibilité

---

## 💰 Calcul des Prix

### Logique de Calcul (`BookingService.calculate_price()`)

**1. Détermination du prix de base:**
```python
if ticket_type == EARLY_BIRD and early_bird_deadline not passed:
    base_price = early_bird_price
elif ticket_type == GROUP and quantity >= group_minimum:
    base_price = regular_price  # Remise appliquée en pourcentage
else:
    base_price = regular_price
```

**2. Calcul du sous-total:**
```python
subtotal = base_price × quantity
```

**3. Calcul de la remise:**
```python
if ticket_type == GROUP and quantity >= group_minimum:
    discount = subtotal × (group_discount_percentage / 100)
else:
    discount = 0
```

**4. Calcul du total:**
```python
total = subtotal - discount
```

### Types de Billets

1. **REGULAR** (`regular`)
   - Prix standard
   - Pas de remise

2. **EARLY_BIRD** (`early_bird`)
   - Prix réduit si avant `early_bird_deadline`
   - Application automatique si date <= deadline
   - Priorité sur remise groupe

3. **GROUP** (`group`)
   - Remise en pourcentage si `quantity >= group_minimum`
   - Non applicable si early bird actif

### ⚠️ Problèmes Identifiés

1. **Frontend vs Backend - Incohérence de calcul:**
   - **Frontend** (`checkout/page.tsx` lignes 101-114): Calcul hardcodé avec prix fixes (450 EUR early bird, 400 EUR groupe)
   - **Backend**: Calcul dynamique basé sur `CityEvent` (early_bird_price, group_discount_percentage)
   - **Impact:** Le résumé affiché peut différer du prix réel calculé par le backend

2. **City Event ID hardcodé:**
   - **Frontend** (`checkout/page.tsx` ligne 60): `city_event_id: 1` hardcodé
   - **Impact:** Ne fonctionne que pour un seul événement

3. **Currency hardcodée:**
   - **Frontend:** Utilise `currencyParam` mais backend utilise "EUR" par défaut
   - **Backend** (`bookings.py` ligne 265): `currency = "EUR"` hardcodé
   - **Impact:** Ne supporte pas d'autres devises

---

## 📊 Gestion des Disponibilités

### Service: `AvailabilityService`

**Calcul des places disponibles:**
```python
available_spots = total_capacity - confirmed_bookings
```

**Cache Redis:**
- TTL: 1 minute
- Clé: `availability:{city_event_id}`
- Mise à jour après chaque réservation confirmée

### Validations

**Lors de la création de réservation:**
1. Vérification `available_spots >= quantity`
2. Vérification `status != SOLD_OUT`
3. Vérification `status == PUBLISHED`

**Problèmes potentiels:**

1. **Race Condition:**
   - Deux réservations simultanées peuvent passer la validation
   - Pas de verrouillage transactionnel explicite
   - **Solution recommandée:** Utiliser `SELECT FOR UPDATE` ou transactions atomiques

2. **Cache Redis:**
   - Cache peut être désynchronisé avec la DB
   - TTL de 1 min peut être trop long en période de forte affluence
   - **Solution recommandée:** Invalidation immédiate après confirmation

---

## 💳 Paiement Stripe

### Création PaymentIntent

**Service:** `StripeService.create_payment_intent_for_booking()`

**Processus:**
1. Conversion montant en cents (× 100)
2. Recherche/création client Stripe par email
3. Création PaymentIntent avec metadata:
   - `booking_id`
   - `booking_reference`
   - `type: "booking"`
4. Sauvegarde `payment_intent_id` dans booking

**Montant:** `booking.total × 100` (conversion en cents)

**Currency:** Par défaut "EUR" (hardcodé)

### ⚠️ Problèmes Identifiés

1. **Currency hardcodée:**
   - Backend utilise toujours "EUR"
   - Frontend peut passer "CAD" dans query params
   - **Impact:** Incohérence entre frontend et backend

2. **Gestion d'erreur client Stripe:**
   - Si création client échoue, continue sans customer
   - **Impact:** Perte de traçabilité dans Stripe

3. **PaymentIntent existant:**
   - Vérifie si `payment_intent_id` existe mais peut créer plusieurs PaymentIntent
   - **Impact:** Frais Stripe inutiles si utilisateur recharge la page

---

## 🔔 Webhooks et Confirmation

### Webhook: `payment_intent.succeeded`

**Handler:** `handle_payment_intent_succeeded()`

**Processus:**
1. Récupération PaymentIntent depuis Stripe
2. Recherche booking par:
   - `booking_id` (metadata)
   - `booking_reference` (metadata)
   - `payment_intent_id` (colonne booking)
3. Mise à jour booking:
   - `payment_status` = PAID
   - `status` = CONFIRMED
   - `confirmed_at` = maintenant
4. Envoi email de confirmation
5. Mise à jour disponibilité

### Webhook: `payment_intent.payment_failed`

**Handler:** `handle_payment_intent_failed()`

**Processus:**
1. Recherche booking
2. Mise à jour `payment_status` = FAILED
3. Log de l'erreur

### ⚠️ Problèmes Identifiés

1. **Idempotence:**
   - ✅ Vérification événement déjà traité (`is_event_processed()`)
   - ✅ Protection contre double traitement

2. **Gestion d'erreur email:**
   - ✅ Email en try/except séparé
   - ✅ Ne fait pas échouer le webhook si email échoue

3. **Recherche booking:**
   - ✅ Multiples stratégies de recherche (id, reference, payment_intent_id)
   - ✅ Gestion robuste des cas edge

4. **Mise à jour disponibilité:**
   - ⚠️ Pas de mise à jour explicite dans le webhook
   - ⚠️ Dépend de la mise à jour automatique

---

## ⚠️ Points d'Attention

### 1. Sécurité

✅ **Points positifs:**
- Validation côté backend
- Webhook signature vérifiée
- Références uniques générées avec `secrets`

⚠️ **Points d'attention:**
- Pas de rate limiting sur création de réservation
- Pas de vérification CAPTCHA
- Pas de validation email format strict

### 2. Performance

✅ **Points positifs:**
- Cache Redis pour disponibilité
- Index sur colonnes critiques (booking_reference, email, status)

⚠️ **Points d'attention:**
- Pas de pagination sur liste de bookings
- Pas de cache pour calculs de prix
- Mise à jour disponibilité synchrone peut ralentir

### 3. Fiabilité

✅ **Points positifs:**
- Transactions DB pour création booking
- Gestion d'erreur robuste
- Logging détaillé

⚠️ **Points d'attention:**
- Race condition sur disponibilité
- Pas de retry automatique pour webhooks
- Pas de mécanisme de réconciliation

### 4. Expérience Utilisateur

✅ **Points positifs:**
- Interface claire
- Feedback visuel
- Redirection automatique après paiement

⚠️ **Points d'attention:**
- Prix affiché peut différer du prix réel
- Pas de sauvegarde brouillon de réservation
- Pas de timeout sur réservation pending

---

## 🔧 Recommandations

### Priorité Haute

1. **Corriger incohérence prix Frontend/Backend**
   - Supprimer calcul hardcodé dans frontend
   - Utiliser API pour obtenir prix réel avant affichage
   - Endpoint: `GET /api/v1/city-events/{id}/pricing`

2. **Gérer dynamiquement city_event_id**
   - Passer `city_event_id` dans query params
   - Valider existence avant affichage formulaire
   - Stocker dans session/state

3. **Corriger gestion currency**
   - Récupérer currency depuis `CityEvent` ou `Event`
   - Passer currency dans PaymentIntent
   - Synchroniser frontend/backend

4. **Résoudre race condition disponibilité**
   - Utiliser `SELECT FOR UPDATE` lors vérification disponibilité
   - Implémenter verrouillage transactionnel
   - Ajouter retry avec backoff exponentiel

### Priorité Moyenne

5. **Améliorer gestion PaymentIntent**
   - Vérifier PaymentIntent existant avant création
   - Réutiliser PaymentIntent si valide
   - Implémenter expiration PaymentIntent (24h)

6. **Ajouter timeout réservation**
   - Annuler réservations PENDING après 15 minutes
   - Libérer places automatiquement
   - Notifier utilisateur si timeout

7. **Améliorer cache disponibilité**
   - Invalidation immédiate après confirmation
   - TTL dynamique selon charge
   - Fallback DB si cache indisponible

### Priorité Basse

8. **Ajouter sauvegarde brouillon**
   - Sauvegarder formulaire dans localStorage
   - Restaurer au retour sur page
   - Expiration après 1h

9. **Ajouter rate limiting**
   - Limiter création réservation par IP/email
   - Protection contre spam/abus
   - CAPTCHA après X tentatives

10. **Améliorer monitoring**
    - Métriques: taux conversion, temps moyen checkout
    - Alertes: échecs paiement, webhooks échoués
    - Dashboard: réservations en temps réel

---

## 📝 Checklist de Vérification

### Avant Déploiement Production

- [ ] Tester flux complet de réservation
- [ ] Vérifier calcul prix (early bird, groupe)
- [ ] Tester webhook Stripe (succès et échec)
- [ ] Vérifier emails de confirmation
- [ ] Tester gestion disponibilité (sold out)
- [ ] Vérifier gestion erreurs (réseau, timeout)
- [ ] Tester annulation réservation
- [ ] Vérifier sécurité (validation, sanitization)
- [ ] Tester performance (charge, cache)
- [ ] Vérifier logs et monitoring

### Tests Recommandés

1. **Test unitaire:** Calcul prix (tous scénarios)
2. **Test intégration:** Flux complet réservation → paiement → confirmation
3. **Test charge:** 100 réservations simultanées
4. **Test webhook:** Simuler événements Stripe
5. **Test race condition:** 2 réservations simultanées pour dernière place

---

## 📚 Fichiers Clés

### Backend
- `backend/app/services/booking_service.py` - Logique métier réservations
- `backend/app/services/availability_service.py` - Gestion disponibilité
- `backend/app/services/stripe_service.py` - Intégration Stripe
- `backend/app/api/v1/endpoints/bookings.py` - Endpoints API
- `backend/app/api/webhooks/stripe.py` - Webhooks Stripe
- `backend/app/models/booking.py` - Modèles de données

### Frontend
- `apps/web/src/app/[locale]/book/checkout/page.tsx` - Page formulaire
- `apps/web/src/app/[locale]/book/payment/page.tsx` - Page paiement
- `apps/web/src/components/masterclass/BookingForm.tsx` - Formulaire réservation
- `apps/web/src/components/masterclass/BookingStripeCheckout.tsx` - Intégration Stripe
- `apps/web/src/lib/api/bookings.ts` - Client API réservations

---

**Fin de l'audit**
