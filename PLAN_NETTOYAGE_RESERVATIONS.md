# Plan de Nettoyage - Suppression Fonctionnalités Réservation/Billets

**Objectif:** Transformer le site en site marketing pur avec CMS, sans vente de billets

---

## 📋 Pages à Supprimer/Désactiver

### Frontend - Pages de Réservation

1. **`/book`** - Page de sélection ville/date
   - Fichier: `apps/web/src/app/[locale]/book/page.tsx`
   - Action: Supprimer ou transformer en page de contact

2. **`/book/checkout`** - Formulaire de réservation
   - Fichier: `apps/web/src/app/[locale]/book/checkout/page.tsx`
   - Action: Supprimer

3. **`/book/payment`** - Page de paiement Stripe
   - Fichier: `apps/web/src/app/[locale]/book/payment/page.tsx`
   - Action: Supprimer

4. **`/book/confirmation`** - Page de confirmation
   - Fichier: `apps/web/src/app/[locale]/book/confirmation/page.tsx`
   - Action: Supprimer ou transformer en page "Merci pour votre intérêt"

### Composants à Supprimer/Désactiver

1. **`BookingForm`** - Formulaire de réservation
   - Fichier: `apps/web/src/components/masterclass/BookingForm.tsx`
   - Action: Supprimer

2. **`BookingSummary`** - Récapitulatif de réservation
   - Fichier: `apps/web/src/components/masterclass/BookingSummary.tsx`
   - Action: Supprimer

3. **`BookingStripeCheckout`** - Intégration Stripe pour réservations
   - Fichier: `apps/web/src/components/masterclass/BookingStripeCheckout.tsx`
   - Action: Supprimer

4. **`CTAPrimary`** - CTA avec badge urgence (places disponibles)
   - Fichier: `apps/web/src/components/navigation/CTAPrimary.tsx`
   - Action: Modifier pour retirer logique disponibilité

### API Client à Supprimer

1. **`bookingsAPI`** - Client API réservations
   - Fichier: `apps/web/src/lib/api/bookings.ts`
   - Action: Supprimer ou commenter

---

## 🔧 Modifications à Effectuer

### 1. Pages Marketing à Conserver/Adapter

✅ **Pages à garder:**
- `/exp` - Page principale Expérience Collective
- `/exp/a-propos` - À propos
- `/exp/services` - Services
- `/exp/realisations` - Réalisations
- `/exp/contact` - Contact
- `/blog` - Blog (CMS)
- `/content` - Gestion de contenu (CMS)
- `/admin` - Administration CMS

### 2. Transformer les CTA de Réservation

**Avant:** "Réserver ma place" → `/book`
**Après:** "Contactez-nous" → `/exp/contact` ou "Demander un devis"

### 3. Pages Villes

Les pages `/cities`, `/montreal`, `/toronto`, etc. peuvent être conservées mais:
- Retirer les liens vers `/book`
- Transformer en pages marketing avec informations sur les événements
- Ajouter CTA vers contact au lieu de réservation

---

## 🗑️ Fichiers à Supprimer

### Frontend

```
apps/web/src/app/[locale]/book/
  ├── page.tsx                    ❌ Supprimer
  ├── checkout/page.tsx           ❌ Supprimer
  ├── payment/page.tsx            ❌ Supprimer
  └── confirmation/page.tsx       ❌ Supprimer (ou transformer)

apps/web/src/components/masterclass/
  ├── BookingForm.tsx             ❌ Supprimer
  ├── BookingSummary.tsx          ❌ Supprimer
  └── BookingStripeCheckout.tsx   ❌ Supprimer

apps/web/src/lib/api/
  └── bookings.ts                 ❌ Supprimer ou commenter
```

### Backend (Optionnel - peut être gardé pour référence future)

Les endpoints backend peuvent être gardés mais désactivés:
- `backend/app/api/v1/endpoints/bookings.py` - Commenter ou désactiver
- `backend/app/services/booking_service.py` - Garder pour référence
- `backend/app/models/booking.py` - Garder pour référence

---

## ✨ Alternatives Marketing

### Au lieu de Réservation → Contact/Demande d'Info

1. **Formulaire de Contact Enrichi**
   - Page `/exp/contact` déjà existante
   - Ajouter champs: "Sujet d'intérêt", "Type de service"
   - Envoyer email au lieu de créer réservation

2. **Page "Demander un Devis"**
   - Nouvelle page `/exp/devis`
   - Formulaire détaillé pour demande de devis
   - Intégration avec système de contact

3. **Landing Pages par Service**
   - `/exp/services/accompagnement-strategique`
   - `/exp/services/image-de-marque`
   - Chaque page avec CTA vers contact

---

## 📝 Checklist de Nettoyage

### Phase 1: Suppression Pages Réservation
- [ ] Supprimer `/book/page.tsx`
- [ ] Supprimer `/book/checkout/page.tsx`
- [ ] Supprimer `/book/payment/page.tsx`
- [ ] Transformer `/book/confirmation/page.tsx` en page "Merci"

### Phase 2: Suppression Composants
- [ ] Supprimer `BookingForm.tsx`
- [ ] Supprimer `BookingSummary.tsx`
- [ ] Supprimer `BookingStripeCheckout.tsx`
- [ ] Modifier `CTAPrimary.tsx` pour retirer logique disponibilité

### Phase 3: Nettoyage API/Imports
- [ ] Supprimer `bookings.ts` API client
- [ ] Retirer imports `bookingsAPI` dans tous les fichiers
- [ ] Retirer imports composants booking supprimés

### Phase 4: Mise à Jour Navigation/CTAs
- [ ] Remplacer liens `/book` par `/exp/contact`
- [ ] Modifier textes CTA "Réserver" → "Contactez-nous"
- [ ] Mettre à jour pages villes pour retirer réservation

### Phase 5: Vérification
- [ ] Vérifier qu'aucun lien cassé
- [ ] Tester toutes les pages marketing
- [ ] Vérifier que le CMS fonctionne correctement
- [ ] Tester formulaire de contact

---

## 🎯 Résultat Attendu

**Site Marketing Pur avec CMS:**
- ✅ Pages marketing (À propos, Services, Réalisations, Contact)
- ✅ Blog/CMS pour gestion de contenu
- ✅ Formulaire de contact fonctionnel
- ✅ Administration CMS
- ❌ Pas de réservation/achat de billets
- ❌ Pas d'intégration Stripe pour réservations
- ❌ Pas de gestion de disponibilité

---

**Note:** Les fonctionnalités backend peuvent être gardées pour référence future mais ne seront plus utilisées par le frontend.
