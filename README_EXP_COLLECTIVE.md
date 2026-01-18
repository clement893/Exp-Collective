# Expérience Collective - Site Web

Site web officiel pour **Expérience Collective**, agence de marketing et stratégie basée à Montréal.

## Description du projet

Expérience Collective est une agence spécialisée dans l'accompagnement stratégique, l'image de marque, l'expérience client et la transformation digitale. Ce site web présente nos services, réalisations, partenaires et ressources.

## Identité visuelle

### Palette de couleurs

- **Jaune primaire** : #FFD400 (couleur signature)
- **Noir/Charbon** : #1D1D1B (textes et éléments sombres)
- **Blanc** : #FFFFFF (fond principal)
- **Gris taupe** : #6B6B6B (support)
- **Bleu-vert/Teal** : #4A8B9E (accent)
- **Vert foncé** : #2D5F3F (accent complémentaire)

### Typographie

- **Police principale** : Helvetica Neue
- **Variantes** : Bold, Bold Italic, Regular, Regular Italic, Thin, Thin Italic

### Éléments graphiques

- Logo avec "exp" surligné en jaune
- Élément graphique : encre jaune qui se dilue (formes fluides et organiques)
- Technique de surlignage jaune sur texte noir pour les mots clés

## Architecture du site

### Pages principales

1. **Accueil** : Hero section, services, philosophie, CTA
2. **Nos services** : Présentation des 5 services avec descriptions
3. **Nos réalisations** : Portfolio de projets avec filtres
4. **Partenaires** : Showcase des partenaires avec logos
5. **Ressources/Blog** : Publications récentes et articles
6. **À Propos** : Présentation de l'entreprise, équipe, valeurs
7. **Nous joindre** : Page de contact avec formulaire
8. **Détail Service** : Pages dynamiques pour chaque service (5 pages)

### Services offerts

1. Accompagnement stratégique global et CMO on demand
2. Image de marque et marketing
3. Expérience client et transformation digitale
4. Mesure de performance et outils d'analyse
5. Accompagnement pour la gestion des appels d'offres

## Stack technique

### Frontend

- **Framework** : Next.js 16 avec React 19
- **Langage** : TypeScript
- **Styling** : TailwindCSS
- **State Management** : Zustand
- **Data Fetching** : TanStack Query (React Query)
- **Internationalisation** : next-intl (français)

### Backend

- **Framework** : FastAPI (Python)
- **Base de données** : PostgreSQL / TiDB
- **ORM** : SQLAlchemy
- **Authentification** : NextAuth.js

### Infrastructure

- **Monorepo** : Turborepo
- **Package Manager** : pnpm
- **Déploiement** : Railway (prévu)
- **CI/CD** : GitHub Actions (à configurer)

## Structure du projet

```
Exp-Collective/
├── apps/
│   └── web/                 # Application Next.js
│       ├── src/
│       │   ├── app/        # App Router (Next.js 16)
│       │   ├── components/ # Composants React
│       │   ├── lib/        # Utilitaires
│       │   └── styles/     # Styles globaux
│       └── public/         # Assets statiques
├── backend/                 # API FastAPI
│   ├── app/
│   │   ├── api/           # Endpoints API
│   │   ├── core/          # Configuration
│   │   ├── models/        # Modèles de données
│   │   └── schemas/       # Schémas Pydantic
│   └── alembic/           # Migrations de base de données
├── packages/
│   └── types/             # Types TypeScript partagés
└── scripts/               # Scripts utilitaires
```

## Installation et développement

### Prérequis

- Node.js >= 18.0.0
- pnpm >= 8.0.0
- Python >= 3.11
- PostgreSQL >= 14

### Installation

```bash
# Cloner le repository
git clone https://github.com/clement893/Exp-Collective.git
cd Exp-Collective

# Installer les dépendances
pnpm install

# Configurer les variables d'environnement
cp apps/web/.env.example apps/web/.env.local
cp backend/.env.example backend/.env

# Démarrer le serveur de développement
pnpm dev
```

### Scripts disponibles

```bash
# Développement
pnpm dev                    # Démarrer le serveur de développement

# Build
pnpm build                  # Construire l'application

# Tests
pnpm test                   # Exécuter les tests
pnpm lint                   # Linter le code
pnpm type-check            # Vérifier les types TypeScript

# Validation
pnpm validate:env          # Valider les variables d'environnement
pnpm security:check        # Vérifier la sécurité

# Utilitaires
pnpm format                # Formater le code
pnpm setup                 # Configuration initiale
```

## Fonctionnalités principales

### Frontend

- [ ] Page d'accueil avec hero section et présentation des services
- [ ] Pages de services avec descriptions détaillées
- [ ] Portfolio de réalisations avec système de filtres
- [ ] Page partenaires avec logos et liens
- [ ] Blog/Ressources avec articles et publications
- [ ] Page À Propos avec présentation de l'équipe
- [ ] Formulaire de contact fonctionnel
- [ ] Navigation responsive et menu mobile
- [ ] Animations et micro-interactions
- [ ] Optimisation SEO
- [ ] Internationalisation (français)

### Backend

- [ ] API REST pour le contenu dynamique
- [ ] Gestion des formulaires de contact
- [ ] Système de filtres pour les projets
- [ ] Gestion des articles de blog
- [ ] Authentification admin (optionnel)
- [ ] Upload et gestion des images
- [ ] Analytics et tracking

## Design system

### Composants clés

- Header avec logo et navigation
- Hero sections avec images/vidéos plein écran
- Cards de services avec images et descriptions
- Filtres de projets (date, service)
- Formulaire de contact avec validation
- Footer avec liens et informations de contact
- Témoignages clients
- Cartes de membres d'équipe
- CTA (Call-to-Action) cohérents

### Principes de design

1. **Contraste fort** : Jaune vif sur noir/blanc
2. **Minimalisme** : Design épuré et moderne
3. **Authenticité** : Photographie réelle
4. **Dynamisme** : Formes fluides et organiques
5. **Clarté** : Hiérarchie typographique claire
6. **Accessibilité** : Contraste suffisant pour la lisibilité

## Ressources

- **Repository GitHub** : https://github.com/clement893/Exp-Collective
- **Guide de marque** : Voir `/docs/brand-guide.pdf`
- **Wireframes** : Voir `/docs/wireframes/`
- **Designs Figma** : Voir fichiers `.fig` dans `/docs/design/`

## Contribution

Ce projet est privé et géré par l'équipe d'Expérience Collective. Pour toute question ou suggestion, veuillez contacter l'équipe de développement.

## Licence

Propriétaire - © 2025 Expérience Collective. Tous droits réservés.

---

**Tagline** : "Comprendre pour oser, oser pour comprendre"

**Contact** : [À définir]

**Site web** : [À définir]
