# Guide d'implémentation pour Cursor

Ce document détaille les étapes d'implémentation du site Expérience Collective à réaliser dans Cursor.

## État actuel du projet

### ✅ Complété par Manus

1. **Repository créé** : https://github.com/clement893/Exp-Collective
2. **Configuration de base** : Package.json mis à jour avec le nom du projet
3. **Documentation** :
   - Cahier des charges complet (`CAHIER_DES_CHARGES.md`)
   - README spécifique au projet (`README_EXP_COLLECTIVE.md`)
   - Guide de marque intégré (`docs/brand-guide.pdf`)
   - Résumé de l'identité visuelle (`docs/brand_guide_summary.md`)
4. **Ressources de design** :
   - Fichiers Figma (`docs/design/`)
   - Wireframes et arborescence (`docs/wireframes/`)
5. **Structure monorepo** : Turborepo avec Next.js 16 + FastAPI

## 📋 Prochaines étapes d'implémentation

### Phase 1 : Configuration du design system (Priorité 1)

#### 1.1 Configuration TailwindCSS

**Fichier** : `apps/web/tailwind.config.ts`

Ajouter les couleurs de la marque Expérience Collective :

```typescript
module.exports = {
  theme: {
    extend: {
      colors: {
        'exp-yellow': '#FFD400',
        'exp-black': '#1D1D1B',
        'exp-white': '#FFFFFF',
        'exp-gray': '#6B6B6B',
        'exp-teal': '#4A8B9E',
        'exp-green': '#2D5F3F',
      },
      fontFamily: {
        'helvetica': ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
}
```

#### 1.2 Configuration des fonts

**Fichier** : `apps/web/src/app/layout.tsx`

Configurer Helvetica Neue ou utiliser une alternative Google Fonts similaire :

```typescript
import { Inter } from 'next/font/google'

// Alternative à Helvetica Neue (propriétaire)
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

// Ou utiliser une font locale si Helvetica Neue est disponible
```

#### 1.3 Créer les composants UI de base

**Dossier** : `apps/web/src/components/ui/`

Créer les composants suivants basés sur le design system :

1. **Button.tsx** : Bouton avec variantes (primary, secondary, outline)
   - Primary : fond jaune (#FFD400), texte noir
   - Secondary : fond noir, texte blanc
   - Outline : bordure jaune, texte jaune

2. **Card.tsx** : Carte de contenu avec image, titre, description

3. **Badge.tsx** : Badge pour les tags et catégories

4. **Input.tsx** : Champs de formulaire stylisés

5. **Textarea.tsx** : Zone de texte pour le formulaire

6. **Select.tsx** : Liste déroulante stylisée

### Phase 2 : Layout et navigation (Priorité 1)

#### 2.1 Header

**Fichier** : `apps/web/src/components/layout/Header.tsx`

Créer le header avec :
- Logo Expérience Collective (à créer ou importer)
- Navigation desktop : Accueil, Nos services, Nos réalisations, Partenaires, Ressources, À Propos, Nous joindre
- Menu burger pour mobile
- CTA "Nous joindre" visible
- Fond noir (#1D1D1B)
- Position fixed en haut

#### 2.2 Footer

**Fichier** : `apps/web/src/components/layout/Footer.tsx`

Créer le footer avec :
- CTA principal : "Discutons ensemble d'une stratégie à la hauteur de vos ambitions"
- Navigation secondaire (tous les liens)
- Informations de contact : adresse, email, téléphone
- Liens vers réseaux sociaux (icônes)
- Politique de confidentialité
- Fond noir (#1D1D1B), texte blanc

#### 2.3 Menu mobile

**Fichier** : `apps/web/src/components/layout/MobileMenu.tsx`

Créer le menu mobile avec :
- Animation slide-in depuis la droite
- Liste de navigation verticale
- Bouton de fermeture
- Overlay semi-transparent

### Phase 3 : Page d'accueil (Priorité 2)

**Fichier** : `apps/web/src/app/page.tsx`

#### 3.1 Hero Section

Créer la section hero avec :
- Logo
- Tagline : "Comprendre pour oser, oser pour comprendre"
- Image ou vidéo plein écran en arrière-plan
- Scroll indicator (flèche vers le bas)
- Hauteur : 100vh

#### 3.2 Section Services

Créer la section services avec :
- Titre : "Nos services"
- Grille de 5 services (cards)
- Chaque card : icône, titre, description courte (3-4 lignes), image
- CTA : "Voir plus" → lien vers "/realisations"
- Fond blanc

#### 3.3 Section Philosophie

Créer la section philosophie avec :
- Titre : "Notre raison d'être"
- Texte court (5-6 lignes)
- Image illustrative
- CTA : "En apprendre plus" → lien vers "/a-propos"
- Fond gris clair ou blanc

### Phase 4 : Page Nos services (Priorité 2)

**Fichier** : `apps/web/src/app/services/page.tsx`

#### 4.1 Hero Section

- Titre : "Des services personnalisés à vos ambitions"
- Image de collaboration

#### 4.2 Liste des services

- 5 sections, une par service
- Chaque section : titre, description (3-4 lignes), images/vidéos, CTA vers page détail

#### 4.3 Sections complémentaires

- Expertise
- Réalisations (aperçu)
- Témoignages
- Contact

### Phase 5 : Pages Détail Service (Priorité 3)

**Fichier** : `apps/web/src/app/services/[slug]/page.tsx`

Créer 5 pages dynamiques pour chaque service :
1. `/services/accompagnement-strategique`
2. `/services/image-de-marque`
3. `/services/experience-client`
4. `/services/mesure-performance`
5. `/services/appels-offres`

Chaque page contient :
- Hero avec titre et bouton retour
- Citation inspirante
- Description détaillée
- Section processus avec étapes
- Images et exemples
- CTA vers contact

### Phase 6 : Page Nos réalisations (Priorité 2)

**Fichier** : `apps/web/src/app/realisations/page.tsx`

#### 6.1 Hero Section

- Titre : "De la vision à la réussite"
- Image de collaboration

#### 6.2 Filtres

Créer un système de filtres avec :
- Filtre par date (dropdown)
- Filtre par service (dropdown ou tags)
- Recherche par mot-clé
- Bouton "Réinitialiser"

#### 6.3 Grille de projets

- Layout en grille (3 colonnes desktop, 2 tablet, 1 mobile)
- Chaque card : image, titre, date, service, client, description courte
- CTA : "Consulter" → lien vers détail du projet
- Pagination ou infinite scroll

#### 6.4 Sections complémentaires

- Statistiques de performance
- Témoignages
- CTA contact

### Phase 7 : Page Partenaires (Priorité 3)

**Fichier** : `apps/web/src/app/partenaires/page.tsx`

- Hero section
- Grille de logos de partenaires
- Description de chaque partenariat
- Liens vers sites web des partenaires
- CTA contact

### Phase 8 : Page Ressources / Blog (Priorité 3)

**Fichier** : `apps/web/src/app/ressources/page.tsx`

#### 8.1 Hero Section

- Titre : "Ressources"

#### 8.2 Articles en vedette

- 3 articles récents en grand format
- Image, titre, date, extrait
- CTA : "Consulter"

#### 8.3 Toutes les ressources

- Recherche et tri (date, sujet)
- Grille d'articles
- Pagination

**Fichier détail** : `apps/web/src/app/ressources/[slug]/page.tsx`

- Titre, date, auteur
- Image principale
- Contenu de l'article (Markdown ou rich text)
- Partage sur réseaux sociaux
- Articles similaires

### Phase 9 : Page À Propos (Priorité 2)

**Fichier** : `apps/web/src/app/a-propos/page.tsx`

#### 9.1 Hero Section

- Titre : "Qui sommes-nous ?"
- Brève présentation

#### 9.2 Sections

- Histoire de l'agence
- Vision et valeurs
- Équipe (cartes des membres avec photo, nom, rôle, bio, LinkedIn)
- Clients (logos)
- Témoignages
- CTA contact

### Phase 10 : Page Nous joindre (Priorité 1)

**Fichier** : `apps/web/src/app/contact/page.tsx`

#### 10.1 Hero Section

- Titre : "Lancez votre projet avec nous"
- Informations de contact : adresse, email, téléphone, horaire

#### 10.2 Formulaire de contact

Créer un formulaire avec :
- Champ Nom (requis)
- Champ Email (requis, validation)
- Champ Sujet (dropdown : 5 services + "Autres")
- Champ Message (requis, min 10 caractères)
- Bouton "Envoyer"
- Validation côté client (React Hook Form + Zod)
- Message de confirmation après envoi
- Protection anti-spam (honeypot)

**API endpoint** : `apps/web/src/app/api/contact/route.ts`

Créer l'endpoint POST pour traiter le formulaire :
- Validation des données
- Envoi d'email à l'équipe
- Email de confirmation à l'utilisateur
- Sauvegarde en base de données

#### 10.3 Carte

- Intégration Google Maps ou alternative
- Marqueur sur l'emplacement du bureau

#### 10.4 Réseaux sociaux

- Icônes avec liens vers les réseaux sociaux

### Phase 11 : Backend et API (Priorité 3)

#### 11.1 Modèles de données

**Dossier** : `backend/app/models/`

Créer les modèles SQLAlchemy :
1. `service.py` : Modèle Service
2. `project.py` : Modèle Project
3. `blog_post.py` : Modèle BlogPost
4. `team_member.py` : Modèle TeamMember
5. `partner.py` : Modèle Partner
6. `testimonial.py` : Modèle Testimonial
7. `contact_submission.py` : Modèle ContactSubmission

#### 11.2 Schémas Pydantic

**Dossier** : `backend/app/schemas/`

Créer les schémas de validation pour chaque modèle.

#### 11.3 Endpoints API

**Dossier** : `backend/app/api/endpoints/`

Créer les endpoints :
1. `services.py` : GET /api/services, GET /api/services/{id}
2. `projects.py` : GET /api/projects (avec filtres), GET /api/projects/{id}
3. `blog.py` : GET /api/posts, GET /api/posts/{id}
4. `team.py` : GET /api/team, GET /api/team/{id}
5. `partners.py` : GET /api/partners
6. `testimonials.py` : GET /api/testimonials
7. `contact.py` : POST /api/contact

#### 11.4 Migrations de base de données

**Commandes** :
```bash
cd backend
alembic revision --autogenerate -m "Create initial tables"
alembic upgrade head
```

#### 11.5 Seed data

**Fichier** : `backend/scripts/seed_data.py`

Créer un script pour peupler la base de données avec :
- 5 services
- 10-15 projets
- 5-10 articles de blog
- 3-5 membres d'équipe
- 5-10 partenaires
- 5-10 témoignages

### Phase 12 : Optimisations et finalisation (Priorité 4)

#### 12.1 SEO

**Fichiers** : Chaque page

- Ajouter metadata dynamiques (title, description, keywords)
- Open Graph tags pour les réseaux sociaux
- Structured data (JSON-LD)
- Sitemap.xml automatique
- Robots.txt

#### 12.2 Performance

- Optimiser les images (next/image, WebP)
- Lazy loading des composants
- Code splitting
- Compression des assets
- Caching stratégique

#### 12.3 Accessibilité

- Contraste WCAG AA
- Navigation au clavier
- ARIA labels
- Alt text sur toutes les images
- Focus visible

#### 12.4 Animations

**Librairie recommandée** : Framer Motion

Ajouter des animations :
- Fade in au scroll
- Slide in pour les cards
- Hover effects
- Transitions de page
- Animations du menu mobile
- Surlignage jaune animé

#### 12.5 Tests

- Tests unitaires des composants (Vitest)
- Tests E2E des formulaires (Playwright)
- Tests d'accessibilité
- Tests de performance

## 🎨 Assets à créer ou préparer

### Logos

- Logo principal (SVG) : "experience collective" avec "exp" surligné en jaune
- Logo version mobile (simplifié si nécessaire)
- Favicon

### Images

- Hero images pour chaque page
- Images de services (5)
- Images de projets (10-15)
- Photos d'équipe (3-5)
- Logos de partenaires (5-10)
- Logos de clients (10-20)
- Images pour articles de blog (5-10)

### Icônes

- Icônes de services (5)
- Icônes de réseaux sociaux
- Icônes de navigation

### Élément graphique

- Encre jaune qui se dilue (plusieurs variations)
- Formes organiques pour les backgrounds

## 🔧 Configuration des variables d'environnement

### Frontend (`apps/web/.env.local`)

```env
# API
NEXT_PUBLIC_API_URL=http://localhost:8000

# Site
NEXT_PUBLIC_SITE_URL=https://experience-collective.com
NEXT_PUBLIC_SITE_NAME=Expérience Collective

# Google Maps (pour la carte de contact)
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_api_key_here

# Analytics (optionnel)
NEXT_PUBLIC_GA_ID=your_ga_id_here

# Sentry (optionnel)
NEXT_PUBLIC_SENTRY_DSN=your_sentry_dsn_here
```

### Backend (`backend/.env`)

```env
# Database
DATABASE_URL=postgresql://user:password@localhost:5432/exp_collective

# Email (pour le formulaire de contact)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASSWORD=your_app_password
SMTP_FROM=contact@experience-collective.com

# Contact
CONTACT_EMAIL=info@experience-collective.com

# Security
SECRET_KEY=your_secret_key_here
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=30

# CORS
CORS_ORIGINS=["http://localhost:3000", "https://experience-collective.com"]
```

## 📝 Checklist de développement

### Configuration initiale
- [ ] Cloner le repository depuis GitHub
- [ ] Installer les dépendances (`pnpm install`)
- [ ] Configurer les variables d'environnement
- [ ] Lancer le serveur de développement (`pnpm dev`)

### Design system
- [ ] Configurer TailwindCSS avec les couleurs de la marque
- [ ] Configurer les fonts (Helvetica Neue ou alternative)
- [ ] Créer les composants UI de base (Button, Card, Input, etc.)

### Layout
- [ ] Créer le Header avec navigation
- [ ] Créer le Footer
- [ ] Créer le Menu mobile
- [ ] Tester la navigation sur tous les devices

### Pages
- [ ] Page d'accueil (Hero, Services, Philosophie)
- [ ] Page Nos services
- [ ] Pages Détail Service (5 pages)
- [ ] Page Nos réalisations (avec filtres)
- [ ] Page Partenaires
- [ ] Page Ressources / Blog
- [ ] Page À Propos
- [ ] Page Nous joindre (avec formulaire)

### Backend
- [ ] Créer les modèles de données
- [ ] Créer les schémas Pydantic
- [ ] Créer les endpoints API
- [ ] Créer les migrations de base de données
- [ ] Créer le script de seed data
- [ ] Tester tous les endpoints

### Fonctionnalités
- [ ] Système de filtres pour les projets
- [ ] Formulaire de contact avec validation
- [ ] Envoi d'emails
- [ ] Recherche d'articles de blog
- [ ] Carte Google Maps

### Optimisations
- [ ] SEO (metadata, sitemap, robots.txt)
- [ ] Performance (images, lazy loading, code splitting)
- [ ] Accessibilité (WCAG AA)
- [ ] Animations (Framer Motion)

### Tests
- [ ] Tests unitaires des composants
- [ ] Tests E2E des formulaires
- [ ] Tests d'accessibilité
- [ ] Tests de performance (Lighthouse)

### Déploiement
- [ ] Configuration de l'hébergement (Railway)
- [ ] Configuration du domaine
- [ ] Configuration HTTPS
- [ ] Tests en production
- [ ] Monitoring et analytics

## 🚀 Commandes utiles

```bash
# Développement
pnpm dev                    # Démarrer le serveur de développement

# Build
pnpm build                  # Construire l'application

# Tests
pnpm test                   # Exécuter les tests
pnpm test:e2e              # Tests E2E
pnpm lint                   # Linter le code
pnpm type-check            # Vérifier les types

# Base de données
cd backend
alembic upgrade head       # Appliquer les migrations
python scripts/seed_data.py # Peupler la base de données

# Validation
pnpm validate:env          # Valider les variables d'environnement
pnpm security:check        # Vérifier la sécurité
```

## 📚 Ressources disponibles

- **Cahier des charges** : `/CAHIER_DES_CHARGES.md`
- **README** : `/README_EXP_COLLECTIVE.md`
- **Guide de marque** : `/docs/brand-guide.pdf`
- **Résumé identité visuelle** : `/docs/brand_guide_summary.md`
- **Fichiers Figma** : `/docs/design/`
- **Wireframes** : `/docs/wireframes/`

## 🎯 Priorités d'implémentation

### Sprint 1 (Semaine 1) : Fondations
1. Configuration du design system
2. Layout (Header, Footer, Menu mobile)
3. Page d'accueil
4. Page Nous joindre avec formulaire

### Sprint 2 (Semaine 2) : Pages principales
1. Page Nos services
2. Page À Propos
3. Pages Détail Service (5 pages)

### Sprint 3 (Semaine 3) : Contenu dynamique
1. Backend API
2. Base de données et seed data
3. Page Nos réalisations avec filtres
4. Page Partenaires

### Sprint 4 (Semaine 4) : Blog et finalisation
1. Page Ressources / Blog
2. Optimisations SEO
3. Animations
4. Tests

### Sprint 5 (Semaine 5) : Déploiement
1. Configuration de l'hébergement
2. Déploiement en production
3. Tests en production
4. Documentation finale

---

**Note** : Ce guide est un point de départ. Adaptez-le selon vos besoins et contraintes spécifiques. Référez-vous au cahier des charges pour les détails complets de chaque fonctionnalité.
