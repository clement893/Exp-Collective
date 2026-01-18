# Cahier des charges - Site web Expérience Collective

## 1. Contexte et objectifs

### 1.1 Présentation du projet

Développement du site web officiel pour **Expérience Collective**, agence de marketing et stratégie basée à Montréal. Le site doit refléter l'identité visuelle de l'agence et présenter ses services, réalisations et expertise de manière professionnelle et engageante.

### 1.2 Objectifs principaux

- Présenter l'agence et ses services de manière claire et attractive
- Mettre en valeur les réalisations et projets clients
- Faciliter la prise de contact avec l'agence
- Établir la crédibilité et l'expertise de l'agence
- Optimiser la visibilité en ligne (SEO)

### 1.3 Public cible

- Entreprises cherchant un accompagnement stratégique
- Directeurs marketing et CMO
- Entrepreneurs et startups
- Organisations nécessitant une transformation digitale
- Partenaires potentiels

## 2. Identité visuelle et design system

### 2.1 Palette de couleurs

| Couleur | Code HEX | Usage |
|---------|----------|-------|
| Jaune primaire | #FFD400 | Logo, surlignage, accents, CTA |
| Noir/Charbon | #1D1D1B | Textes, éléments sombres, header |
| Blanc | #FFFFFF | Fond principal, textes sur fond sombre |
| Gris taupe | #6B6B6B | Textes secondaires, bordures |
| Bleu-vert | #4A8B9E | Accents complémentaires |
| Vert foncé | #2D5F3F | Accents complémentaires |

### 2.2 Typographie

**Police principale** : Helvetica Neue

| Variante | Usage |
|----------|-------|
| Bold | Titres H1, H2, éléments importants |
| Bold Italic | Citations, mise en emphase |
| Regular | Corps de texte, paragraphes |
| Regular Italic | Citations, notes |
| Thin | Sous-titres, éléments secondaires |
| Thin Italic | Légendes, annotations |

**Hiérarchie typographique** :

- H1 : 48px-64px (desktop), 32px-40px (mobile)
- H2 : 36px-48px (desktop), 24px-32px (mobile)
- H3 : 24px-32px (desktop), 20px-24px (mobile)
- Body : 16px-18px (desktop), 14px-16px (mobile)
- Small : 14px (desktop), 12px (mobile)

### 2.3 Éléments graphiques

**Logo** : "experience collective" avec "exp" surligné en jaune vif

**Élément signature** : Encre jaune qui se dilue
- Forme abstraite fluide et organique
- Utilisée comme accent visuel
- Déclinaisons : logo "e", ampoule, mégaphone

**Technique de surlignage** : Surlignage jaune sur texte noir pour mettre en avant les mots clés et créer de la hiérarchie visuelle

### 2.4 Photographie

- Style authentique et humain
- Gros plans sur les visages
- Texte overlay blanc pour les messages clés
- Pas de stock photos génériques
- Focus sur l'écoute, l'attention et la collaboration

### 2.5 Principes de design

1. **Contraste fort** : Utilisation du jaune vif sur noir/blanc pour créer de l'impact
2. **Minimalisme** : Design épuré et moderne, espaces blancs généreux
3. **Authenticité** : Contenu réel et photographie authentique
4. **Dynamisme** : Formes fluides et organiques pour transmettre la transformation
5. **Clarté** : Hiérarchie visuelle claire et navigation intuitive
6. **Accessibilité** : Contraste WCAG AA minimum, navigation au clavier

## 3. Architecture du site

### 3.1 Arborescence des pages

```
Accueil
├── Nos services
│   ├── Accompagnement stratégique global et CMO on demand
│   ├── Image de marque et marketing
│   ├── Expérience client et transformation digitale
│   ├── Mesure de performance et outils d'analyse
│   └── Accompagnement pour la gestion des appels d'offres
├── Nos réalisations
│   └── Détail de réalisation (dynamique)
├── Partenaires
├── Ressources / Blog
│   └── Détail d'article (dynamique)
├── À Propos
└── Nous joindre
```

### 3.2 Navigation

**Header** (fixe en haut de page)
- Logo (lien vers accueil)
- Menu principal : Accueil, Nos services, Nos réalisations, Partenaires, Ressources, À Propos, Nous joindre
- Menu burger sur mobile
- CTA "Nous joindre" visible

**Footer** (présent sur toutes les pages)
- CTA principal : "Discutons ensemble d'une stratégie à la hauteur de vos ambitions"
- Navigation secondaire : liens vers toutes les pages
- Informations de contact : adresse, email, téléphone
- Liens vers réseaux sociaux
- Politique de confidentialité

## 4. Spécifications des pages

### 4.1 Page d'accueil

**Hero Section**
- Logo
- Tagline : "Comprendre pour oser, oser pour comprendre"
- Vidéo ou image plein écran en arrière-plan
- Scroll indicator

**Section Services**
- Titre : "Nos services"
- Descriptions courtes des 5 services (3-4 lignes chacun)
- Images de projets reliés aux services
- CTA : "Voir plus" → lien vers "Nos réalisations"

**Section Philosophie**
- Titre : "Notre raison d'être"
- Texte court (5-6 lignes) expliquant la mission
- Image illustrative
- CTA : "En apprendre plus" → lien vers "À Propos"

**Footer**
- CTA principal vers "Nous joindre"
- Navigation complète
- Informations de contact
- Réseaux sociaux
- Politique de confidentialité

### 4.2 Page Nos services

**Hero Section**
- Titre : "Des services personnalisés à vos ambitions"
- Image ou vidéo représentant une collaboration

**Section Services**
- Présentation des 5 services (3-4 lignes chacun)
- Images et vidéos de projets reliés
- Description du projet pour chaque service
- CTA : "En apprendre plus" → lien vers "Détail - Service"

**Section Expertise**
- Titre : "Notre expertise"
- Description de la mission d'Expérience Collective
- Images

**Section Réalisations**
- Titre : "Nos réalisations"
- Aperçu de projets
- CTA : "Découvrir nos réalisations" → lien vers "Nos réalisations"

**Section Témoignages**
- Témoignages de clients
- CTA : "En voir plus" → lien vers "Nos réalisations"

**Section Contact**
- Titre : "Faites le premier pas vers vos objectifs"
- CTA : "Passez à l'action !" → lien vers "Nous joindre"

### 4.3 Page Détail Service (5 pages dynamiques)

**Hero Section**
- Titre : Nom du service
- Images
- Bouton retour en arrière

**Section Service**
- Citation inspirante (ex: "L'image de marque, c'est l'âme de votre entreprise exprimée au monde.")
- Description du service (5-6 lignes)
- Images
- CTA : "En voir plus" → lien vers "Nos réalisations"

**Section Processus**
- Titre : "Le Processus"
- Explication des étapes pour accomplir le service
- Images du processus et des résultats finaux

**Section Contact**
- Titre : "Faites le premier pas vers vos objectifs"
- CTA : "Passez à l'action !" → lien vers "Nous joindre"

### 4.4 Page Nos réalisations

**Hero Section**
- Titre : "De la vision à la réussite"
- Image ou vidéo de collaboration réussie

**Section Filtres**
- Filtre par date
- Filtre par service
- Recherche

**Section Projets**
- Grille de projets avec :
  - Image, titre et date
  - Description courte
  - Le service associé
  - Le client
  - L'objectif
- CTA : "Consulter" → lien vers détail du projet

**Section Statistiques**
- Preuves & Résultats
- Statistiques de performance

**Section Témoignages**
- Témoignages de clients sous forme de blocs
- CTA : "En savoir plus" → lien vers "Nos réalisations"

**Section Contact**
- Titre : "Faites le premier pas vers vos objectifs"
- CTA : "Passez à l'action !" → lien vers "Nous joindre"

### 4.5 Page Partenaires

**Hero Section**
- Titre : "Derrière chaque projet réussi, des partenaires engagés."
- Image de collaboration

**Section Partenaires**
- Logos des partenaires
- Liens vers leurs sites web
- Description de la collaboration et de leur rôle

**Section Contact**
- Titre : "Faites le premier pas vers vos objectifs"
- CTA : "Passez à l'action !" → lien vers "Nous joindre"

### 4.6 Page Ressources / Blog

**Hero Section**
- Titre : "Ressources"
- Sous-titre ou description

**Section Ressources en vedette**
- 3 publications récentes et d'actualité
- Image, titre et date
- CTA : "Consulter"

**Section Toutes les Ressources**
- Recherche ou tri par date et sujet
- Liste de tous les articles
- Image, titre, date et extrait

**Section Contact**
- Titre : "Faites le premier pas vers vos objectifs"
- CTA : "Découvrir nos réalisations" → lien vers "Nos réalisations"

### 4.7 Page À Propos

**Hero Section**
- Titre : "Qui sommes-nous ?"
- Brève présentation
- Images de collaboration

**Section Histoire**
- Historique d'Expérience Collective
- Images

**Section Vision**
- Notre vision
- Présentation des engagements et valeurs

**Section Équipe**
- Titre : "Notre équipe"
- Cartes des membres : Nom, Portrait, Rôle, Expérience, LinkedIn
- Images

**Section Clients**
- Titre : "Nos clients"
- Logos de nos clients avec liens vers leurs sites

**Section Témoignages**
- Témoignages & Histoire de succès
- Témoignage de clients
- Vidéo de présentation ou images

**Section Contact**
- Titre : "Faites le premier pas vers vos objectifs"
- CTA : "Passez à l'action !" → lien vers "Nous joindre"

### 4.8 Page Nous joindre

**Hero Section**
- Titre : "Lancez votre projet avec nous"
- Information de contact :
  - Adresse
  - Adresse courriel
  - Téléphone
  - Emplacement du bureau (carte)
  - Horaire

**Section Formulaire**
- Titre : "Faites le premier pas vers vos objectifs"
- Champs du formulaire :
  - Nom (requis)
  - Adresse courriel (requis, validation email)
  - Sujet (liste déroulante des services et "Autres")
  - Message (requis, min 10 caractères)
- CTA : "Envoyer"
- Validation côté client et serveur
- Message de confirmation après envoi
- Protection anti-spam (honeypot ou reCAPTCHA)

**Section Carte**
- Carte indiquant l'emplacement du bureau
- Intégration Google Maps ou alternative

**Section Réseaux sociaux**
- Liens vers les réseaux sociaux (icônes)

## 5. Fonctionnalités techniques

### 5.1 Frontend

**Framework et technologies**
- Next.js 16 avec App Router
- React 19
- TypeScript
- TailwindCSS pour le styling
- Zustand pour le state management
- TanStack Query pour le data fetching
- next-intl pour l'internationalisation (français)

**Composants clés à développer**

1. **Layout Components**
   - Header avec navigation responsive
   - Footer avec liens et informations
   - Menu mobile avec animation

2. **Hero Components**
   - HeroHome avec vidéo/image plein écran
   - HeroPage avec titre et image
   - HeroService avec bouton retour

3. **Content Components**
   - ServiceCard avec image, titre, description, CTA
   - ProjectCard avec filtres
   - TestimonialCard
   - TeamMemberCard
   - PartnerLogo
   - BlogPostCard

4. **Form Components**
   - ContactForm avec validation
   - FilterBar pour projets et articles
   - SearchBar

5. **UI Components**
   - Button (primaire, secondaire, outline)
   - Card
   - Modal (confirmation formulaire)
   - Loader
   - Badge (pour tags/catégories)

**Animations et interactions**
- Scroll animations (fade in, slide in)
- Hover effects sur les cards et boutons
- Transitions de page fluides
- Parallax sur les hero sections
- Animations du menu mobile
- Surlignage jaune animé sur les mots clés

**Responsive Design**
- Mobile-first approach
- Breakpoints :
  - Mobile : < 640px
  - Tablet : 640px - 1024px
  - Desktop : > 1024px
- Images responsive avec next/image
- Navigation adaptative

**Performance**
- Lazy loading des images
- Code splitting automatique (Next.js)
- Optimisation des fonts (next/font)
- Compression des images
- Caching stratégique
- Lighthouse score > 90

**SEO**
- Metadata dynamiques par page
- Open Graph tags
- Structured data (JSON-LD)
- Sitemap.xml généré automatiquement
- Robots.txt
- Canonical URLs
- Alt text sur toutes les images

### 5.2 Backend

**Framework et technologies**
- FastAPI (Python 3.11+)
- SQLAlchemy ORM
- PostgreSQL / TiDB
- Alembic pour les migrations
- Pydantic pour la validation

**Endpoints API requis**

1. **Services**
   - GET /api/services - Liste des services
   - GET /api/services/{id} - Détail d'un service

2. **Projets/Réalisations**
   - GET /api/projects - Liste des projets (avec filtres)
   - GET /api/projects/{id} - Détail d'un projet
   - GET /api/projects/filters - Options de filtres disponibles

3. **Blog/Ressources**
   - GET /api/posts - Liste des articles (avec pagination)
   - GET /api/posts/{id} - Détail d'un article
   - GET /api/posts/featured - Articles en vedette

4. **Équipe**
   - GET /api/team - Liste des membres de l'équipe
   - GET /api/team/{id} - Détail d'un membre

5. **Partenaires**
   - GET /api/partners - Liste des partenaires

6. **Contact**
   - POST /api/contact - Envoi du formulaire de contact
   - Validation des données
   - Envoi d'email de confirmation
   - Notification à l'équipe

7. **Témoignages**
   - GET /api/testimonials - Liste des témoignages

**Modèles de données**

```python
# Service
- id: UUID
- name: str
- slug: str
- description: str
- short_description: str
- icon: str
- image_url: str
- order: int
- created_at: datetime
- updated_at: datetime

# Project
- id: UUID
- title: str
- slug: str
- description: str
- client: str
- service_id: UUID (FK)
- date: date
- objective: str
- collaboration_description: str
- image_url: str
- gallery_urls: list[str]
- testimonial: str (optional)
- results: str (optional)
- created_at: datetime
- updated_at: datetime

# BlogPost
- id: UUID
- title: str
- slug: str
- excerpt: str
- content: str
- author: str
- image_url: str
- category: str
- tags: list[str]
- published_at: datetime
- featured: bool
- created_at: datetime
- updated_at: datetime

# TeamMember
- id: UUID
- name: str
- role: str
- bio: str
- experience: str
- image_url: str
- linkedin_url: str (optional)
- order: int
- created_at: datetime
- updated_at: datetime

# Partner
- id: UUID
- name: str
- logo_url: str
- website_url: str
- description: str
- collaboration_description: str
- order: int
- created_at: datetime
- updated_at: datetime

# Testimonial
- id: UUID
- client_name: str
- client_role: str
- client_company: str
- content: str
- image_url: str (optional)
- project_id: UUID (FK, optional)
- rating: int (1-5)
- created_at: datetime
- updated_at: datetime

# ContactSubmission
- id: UUID
- name: str
- email: str
- subject: str
- message: str
- status: str (new, read, replied)
- created_at: datetime
- updated_at: datetime
```

**Sécurité**
- Validation des entrées avec Pydantic
- Rate limiting sur les endpoints publics
- CORS configuré correctement
- Protection CSRF
- Sanitization des données
- Logs des erreurs et tentatives suspectes

**Email**
- Configuration SMTP pour l'envoi d'emails
- Template HTML pour les emails de contact
- Email de confirmation à l'utilisateur
- Email de notification à l'équipe

### 5.3 Base de données

**PostgreSQL / TiDB**
- Schéma relationnel
- Indexes sur les champs fréquemment recherchés
- Contraintes d'intégrité référentielle
- Migrations avec Alembic

**Données initiales (seed)**
- 5 services avec descriptions
- 10-15 projets exemples
- 5-10 articles de blog
- 3-5 membres d'équipe
- 5-10 partenaires
- 5-10 témoignages

## 6. Déploiement et infrastructure

### 6.1 Environnements

**Développement**
- Local avec Docker Compose
- Frontend : localhost:3000
- Backend : localhost:8000
- Base de données : localhost:5432

**Staging** (optionnel)
- Environnement de test avant production
- URL : staging.experience-collective.com

**Production**
- URL : experience-collective.com (ou domaine choisi)
- HTTPS obligatoire
- CDN pour les assets statiques

### 6.2 Hébergement

**Recommandation : Railway**
- Service Frontend (Next.js)
- Service Backend (FastAPI)
- Service Database (PostgreSQL)
- Configuration via railway.json

**Alternative : Vercel + Railway**
- Frontend sur Vercel
- Backend + Database sur Railway

### 6.3 CI/CD

**GitHub Actions**
- Workflow de build et test sur chaque PR
- Déploiement automatique sur merge vers main
- Tests de sécurité automatisés
- Vérification des types TypeScript
- Linting automatique

### 6.4 Monitoring et analytics

**Frontend**
- Google Analytics ou alternative
- Web Vitals tracking
- Error tracking avec Sentry

**Backend**
- Logs structurés
- Monitoring des performances
- Alertes sur les erreurs critiques

## 7. Planning et livrables

### 7.1 Phase 1 : Configuration et structure (Semaine 1)

**Livrables**
- Repository configuré et adapté pour Expérience Collective
- Structure de base des pages créée
- Design system implémenté dans TailwindCSS
- Composants UI de base créés

### 7.2 Phase 2 : Pages statiques (Semaine 2)

**Livrables**
- Page d'accueil complète
- Page Nos services
- Page À Propos
- Page Nous joindre avec formulaire fonctionnel
- Navigation et footer complets

### 7.3 Phase 3 : Contenu dynamique (Semaine 3)

**Livrables**
- Backend API fonctionnel
- Base de données avec seed data
- Page Nos réalisations avec filtres
- Pages Détail Service (5 pages)
- Page Partenaires

### 7.4 Phase 4 : Blog et finalisation (Semaine 4)

**Livrables**
- Page Ressources/Blog
- Pages Détail Article
- Optimisations SEO
- Tests et corrections de bugs
- Documentation

### 7.5 Phase 5 : Déploiement (Semaine 5)

**Livrables**
- Configuration de l'hébergement
- Déploiement en production
- Configuration du domaine
- Tests en production
- Formation à l'administration

## 8. Maintenance et évolution

### 8.1 Maintenance régulière

- Mises à jour de sécurité
- Corrections de bugs
- Optimisations de performance
- Backup réguliers de la base de données

### 8.2 Évolutions futures possibles

- Espace admin pour gérer le contenu
- Système de newsletter
- Intégration CRM
- Multilingue (anglais)
- Chatbot ou live chat
- Système de réservation de consultation
- Portfolio interactif avec études de cas détaillées

## 9. Contraintes et exigences

### 9.1 Contraintes techniques

- Compatibilité navigateurs : Chrome, Firefox, Safari, Edge (2 dernières versions)
- Temps de chargement < 3 secondes
- Accessibilité WCAG 2.1 niveau AA
- Mobile-first et responsive design obligatoire
- SEO optimisé

### 9.2 Contraintes de contenu

- Respect strict de l'identité visuelle
- Utilisation de la palette de couleurs définie
- Typographie Helvetica Neue uniquement
- Photographie authentique (pas de stock photos génériques)
- Ton professionnel mais accessible

### 9.3 Contraintes légales

- Politique de confidentialité conforme au RGPD/PIPEDA
- Mentions légales
- Cookies consent (si applicable)
- Protection des données personnelles

## 10. Critères d'acceptation

### 10.1 Fonctionnels

- ✅ Toutes les pages définies sont implémentées
- ✅ Navigation fonctionnelle sur tous les devices
- ✅ Formulaire de contact opérationnel avec validation
- ✅ Filtres de projets fonctionnels
- ✅ Toutes les images sont optimisées et chargent rapidement
- ✅ Les liens internes et externes fonctionnent correctement

### 10.2 Design

- ✅ Respect de l'identité visuelle (couleurs, typographie, logo)
- ✅ Design responsive sur mobile, tablet, desktop
- ✅ Animations fluides et cohérentes
- ✅ Hiérarchie visuelle claire
- ✅ Espacement et alignement cohérents

### 10.3 Performance

- ✅ Lighthouse score > 90 (Performance, Accessibility, Best Practices, SEO)
- ✅ Temps de chargement < 3 secondes
- ✅ Images optimisées (WebP, lazy loading)
- ✅ Code minifié et optimisé

### 10.4 SEO

- ✅ Metadata complètes sur toutes les pages
- ✅ Structure HTML sémantique
- ✅ Sitemap.xml généré
- ✅ Robots.txt configuré
- ✅ Open Graph tags présents

### 10.5 Sécurité

- ✅ HTTPS activé
- ✅ Validation des entrées utilisateur
- ✅ Protection contre les injections SQL
- ✅ Protection CSRF
- ✅ Rate limiting sur les endpoints publics

## 11. Documentation requise

### 11.1 Documentation technique

- README.md avec instructions d'installation
- Documentation de l'API (Swagger/OpenAPI)
- Guide de contribution
- Architecture et choix techniques

### 11.2 Documentation utilisateur

- Guide d'administration du contenu
- Guide d'utilisation du formulaire de contact
- FAQ technique

## 12. Contacts et ressources

### 12.1 Équipe projet

- **Client** : Expérience Collective
- **Développement** : [À définir]
- **Design** : Basé sur les fichiers Figma fournis

### 12.2 Ressources disponibles

- Guide de marque (PDF)
- Fichiers Figma avec designs complets
- Wireframes et arborescence
- Fichiers CSS/design system exportés
- Repository GitHub : https://github.com/clement893/Exp-Collective

---

**Date de création** : 18 janvier 2025
**Version** : 1.0
**Statut** : En cours de développement
