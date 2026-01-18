# Liste des Pages Existantes

**Date:** 2026-01-18  
**Base:** `apps/web/src/app/[locale]/`

---

## 📄 Pages Marketing (Publiques)

### Pages Principales
- **`/`** - Page d'accueil (`page.tsx`)
- **`/a-propos`** - À propos (`a-propos/page.tsx`)
- **`/services`** - Services (`services/page.tsx`)
- **`/realisations`** - Réalisations (`realisations/page.tsx`)
- **`/contact`** - Contact (`contact/page.tsx`)
- **`/contact.backup`** - Backup contact (à supprimer ?)

### Blog & Contenu
- **`/blog`** - Liste des articles (`blog/page.tsx`)
- **`/blog/[slug]`** - Article individuel (`blog/[slug]/page.tsx`)
- **`/blog/archive/[year]`** - Archive par année (`blog/archive/[year]/page.tsx`)
- **`/blog/author/[author]`** - Articles par auteur (`blog/author/[author]/page.tsx`)
- **`/blog/category/[category]`** - Articles par catégorie (`blog/category/[category]/page.tsx`)
- **`/blog/tag/[tag]`** - Articles par tag (`blog/tag/[tag]/page.tsx`)
- **`/blog/rss`** - Flux RSS (`blog/rss/page.ts`)
- **`/blog/sitemap`** - Sitemap blog (`blog/sitemap/page.ts`)

### Pages CMS Dynamiques
- **`/pages/[slug]`** - Page dynamique (`pages/[slug]/page.tsx`)
- **`/pages/[slug]/preview`** - Aperçu page (`pages/[slug]/preview/page.tsx`)
- **`/pages/[slug]/edit`** - Édition page (`pages/[slug]/edit/page.tsx`)

### Pages Légales & Informations
- **`/legal`** - Mentions légales (`legal/page.tsx`)
- **`/privacy`** - Politique de confidentialité (`privacy/page.tsx`)
- **`/terms`** - Conditions d'utilisation (`terms/page.tsx`)
- **`/cookies`** - Politique des cookies (`cookies/page.tsx`)
- **`/faq`** - FAQ (`faq/page.tsx`)

### ~~Villes & Événements~~ ❌ SUPPRIMÉ
- ~~**`/cities`** - Liste des villes~~ ❌
- ~~**`/cities/[city]`** - Page ville~~ ❌
- ~~**`/cities/[city]/inscription`** - Inscription ville~~ ❌

### ~~Tarification~~ ❌ SUPPRIMÉ
- ~~**`/pricing`** - Tarification~~ ❌

---

## 🔐 Authentification

- **`/auth/login`** - Connexion (`auth/login/page.tsx`)
- **`/auth/signin`** - Connexion alternative (`auth/signin/page.tsx`)
- **`/auth/register`** - Inscription (`auth/register/page.tsx`)
- **`/auth/callback`** - Callback OAuth (`auth/callback/page.tsx`)
- **`/auth/google/testing`** - Test Google OAuth (`auth/google/testing/page.tsx`)

---

## 👤 Profil Utilisateur

- **`/profile`** - Profil (`profile/page.tsx`)
- **`/profile/activity`** - Activité (`profile/activity/page.tsx`)
- **`/profile/notifications`** - Notifications (`profile/notifications/page.tsx`)
- **`/profile/notifications-list`** - Liste notifications (`profile/notifications-list/page.tsx`)
- **`/profile/security`** - Sécurité (`profile/security/page.tsx`)
- **`/profile/settings`** - Paramètres (`profile/settings/page.tsx`)

---

## ⚙️ Paramètres

- **`/settings`** - Paramètres généraux (`settings/page.tsx`)
- **`/settings/general`** - Général (`settings/general/page.tsx`)
- **`/settings/security`** - Sécurité (`settings/security/page.tsx`)
- **`/settings/preferences`** - Préférences (`settings/preferences/page.tsx`)
- **`/settings/notifications`** - Notifications (`settings/notifications/page.tsx`)
- **`/settings/billing`** - Facturation (`settings/billing/page.tsx`)
- **`/settings/organization`** - Organisation (`settings/organization/page.tsx`)
- **`/settings/team`** - Équipe (`settings/team/page.tsx`)
- **`/settings/integrations`** - Intégrations (`settings/integrations/page.tsx`)
- **`/settings/api`** - API (`settings/api/page.tsx`)

---

## ~~🎯 Onboarding~~ ❌ SUPPRIMÉ

- ~~**`/onboarding`** - Vue d'ensemble~~ ❌
- ~~**`/onboarding/welcome`** - Bienvenue~~ ❌
- ~~**`/onboarding/profile`** - Profil~~ ❌
- ~~**`/onboarding/preferences`** - Préférences~~ ❌
- ~~**`/onboarding/team`** - Équipe~~ ❌
- ~~**`/onboarding/complete`** - Complété~~ ❌

---

## 📊 Dashboard

- **`/dashboard`** - Dashboard principal (`dashboard/page.tsx`)
- **`/dashboard/analytics`** - Analytiques (`dashboard/analytics/page.tsx`)
- **`/dashboard/activity`** - Activité (`dashboard/activity/page.tsx`)
- **`/dashboard/projects`** - Projets (`dashboard/projects/page.tsx`)
- **`/dashboard/reports`** - Rapports (`dashboard/reports/page.tsx`)
- **`/dashboard/insights`** - Insights (`dashboard/insights/page.tsx`)
- **`/dashboard/cities`** - Villes (`dashboard/cities/page.tsx`)
- **`/dashboard/become-superadmin`** - Devenir superadmin (`dashboard/become-superadmin/page.tsx`)

### ~~Réseau~~ ❌ SUPPRIMÉ
- ~~**`/dashboard/reseau`** - Réseau~~ ❌
- ~~**`/dashboard/reseau/contacts`** - Contacts~~ ❌
- ~~**`/dashboard/reseau/contacts/[id]`** - Contact individuel~~ ❌
- ~~**`/dashboard/reseau/contacts/[id]/edit`** - Éditer contact~~ ❌
- ~~**`/dashboard/reseau/entreprises`** - Entreprises~~ ❌
- ~~**`/dashboard/reseau/entreprises/[id]`** - Entreprise individuelle~~ ❌
- ~~**`/dashboard/reseau/temoignages`** - Témoignages~~ ❌

---

## ~~🏢 ERP~~ ❌ SUPPRIMÉ

- ~~**`/erp/dashboard`** - Dashboard ERP~~ ❌
- ~~**`/erp/clients`** - Clients~~ ❌
- ~~**`/erp/orders`** - Commandes~~ ❌
- ~~**`/erp/invoices`** - Factures~~ ❌
- ~~**`/erp/inventory`** - Inventaire~~ ❌
- ~~**`/erp/reports`** - Rapports~~ ❌

---

## ~~👥 Client Portal~~ ❌ SUPPRIMÉ

- ~~**`/client/dashboard`** - Dashboard client~~ ❌
- ~~**`/client/projects`** - Projets~~ ❌
- ~~**`/client/invoices`** - Factures~~ ❌
- ~~**`/client/tickets`** - Tickets support~~ ❌

---

## 🛠️ Administration

- **`/admin`** - Dashboard admin (`admin/page.tsx`)
- **`/admin/users`** - Utilisateurs (`admin/users/page.tsx`)
- **`/admin/teams`** - Équipes (`admin/teams/page.tsx`)
- **`/admin/organizations`** - Organisations (`admin/organizations/page.tsx`)
- **`/admin/articles`** - Articles (`admin/articles/page.tsx`)
- **`/admin/pages`** - Pages (`admin/pages/page.tsx`)
- **`/admin/media`** - Médias (`admin/media/page.tsx`)
- **`/admin/masterclass`** - Masterclass (`admin/masterclass/page.tsx`)
- **`/admin/themes`** - Thèmes (`admin/themes/page.tsx`)
- **`/admin/themes/builder`** - Constructeur de thèmes (`admin/themes/builder/page.tsx`)
- **`/admin/settings`** - Paramètres (`admin/settings/page.tsx`)
- **`/admin/statistics`** - Statistiques (`admin/statistics/page.tsx`)
- **`/admin/rbac`** - RBAC (`admin/rbac/page.tsx`)
- **`/admin/api-keys`** - Clés API (`admin/api-keys/page.tsx`)
- **`/admin/invitations`** - Invitations (`admin/invitations/page.tsx`)
- **`/admin/tenancy`** - Multi-tenancy (`admin/tenancy/page.tsx`)

---

## 📝 Gestion de Contenu (CMS)

- **`/content`** - Vue d'ensemble (`content/page.tsx`)
- **`/content/posts`** - Articles (`content/posts/page.tsx`)
- **`/content/posts/[id]/edit`** - Éditer article (`content/posts/[id]/edit/page.tsx`)
- **`/content/pages`** - Pages (`content/pages/page.tsx`)
- **`/content/categories`** - Catégories (`content/categories/page.tsx`)
- **`/content/tags`** - Tags (`content/tags/page.tsx`)
- **`/content/media`** - Médias (`content/media/page.tsx`)
- **`/content/schedule`** - Planification (`content/schedule/page.tsx`)
- **`/content/templates`** - Modèles (`content/templates/page.tsx`)

---

## ~~💳 Facturation & Abonnements~~ ❌ SUPPRIMÉ

- ~~**`/subscriptions`** - Abonnements~~ ❌
- ~~**`/subscriptions/success`** - Succès abonnement~~ ❌

---

## 📋 Formulaires & Sondages

- **`/forms`** - Formulaires (`forms/page.tsx`)
- **`/forms/[id]/submissions`** - Soumissions (`forms/[id]/submissions/page.tsx`)
- **`/surveys`** - Sondages (`surveys/page.tsx`)
- **`/surveys/[id]/preview`** - Aperçu sondage (`surveys/[id]/preview/page.tsx`)
- **`/surveys/[id]/results`** - Résultats sondage (`surveys/[id]/results/page.tsx`)

---

## 🆘 Aide & Support

- **`/help`** - Centre d'aide (`help/page.tsx`)
- **`/help/faq`** - FAQ (`help/faq/page.tsx`)
- **`/help/guides`** - Guides (`help/guides/page.tsx`)
- **`/help/videos`** - Vidéos (`help/videos/page.tsx`)
- **`/help/tickets`** - Tickets (`help/tickets/page.tsx`)
- **`/help/tickets/[id]`** - Ticket individuel (`help/tickets/[id]/page.tsx`)

---

## 📈 Monitoring & Analytics

- **`/monitoring`** - Monitoring (`monitoring/page.tsx`)
- **`/monitoring/performance`** - Performance (`monitoring/performance/page.tsx`)
- **`/monitoring/errors`** - Erreurs (`monitoring/errors/page.tsx`)

---

## 🔍 SEO & Utilitaires

- **`/seo`** - SEO (`seo/page.tsx`)
- **`/sitemap`** - Sitemap (`sitemap/page.tsx`)
- **`/menus`** - Menus (`menus/page.tsx`)

---

## 🧪 Pages de Test & Développement

### Tests Généraux
- **`/test`** - Tests (`test/page.tsx`)
- **`/test/api-connections`** - Test connexions API (`test/api-connections/page.tsx`)
- **`/test/admin-logs`** - Test logs admin (`test/admin-logs/page.tsx`)
- **`/test-sentry`** - Test Sentry (`test-sentry/page.tsx`)

### Exemples
- **`/examples`** - Exemples (`examples/page.tsx`)
- **`/examples/auth`** - Exemple auth (`examples/auth/page.tsx`)
- **`/examples/api-fetching`** - Exemple API (`examples/api-fetching/page.tsx`)
- **`/examples/dashboard`** - Exemple dashboard (`examples/dashboard/page.tsx`)
- **`/examples/file-upload`** - Exemple upload (`examples/file-upload/page.tsx`)
- **`/examples/crud`** - Exemple CRUD (`examples/crud/page.tsx`)
- **`/examples/data-table`** - Exemple table (`examples/data-table/page.tsx`)
- **`/examples/modal`** - Exemple modal (`examples/modal/page.tsx`)
- **`/examples/search`** - Exemple recherche (`examples/search/page.tsx`)
- **`/examples/onboarding`** - Exemple onboarding (`examples/onboarding/page.tsx`)
- **`/examples/settings`** - Exemple paramètres (`examples/settings/page.tsx`)
- **`/examples/toast`** - Exemple toast (`examples/toast/page.tsx`)

### Tests Spécifiques
- **`/ai/chat`** - Chat AI (`ai/chat/page.tsx`)
- **`/ai/testing`** - Test AI (`ai/testing/page.tsx`)
- **`/api-connections/testing`** - Test connexions (`api-connections/testing/page.tsx`)
- **`/admin-logs/testing`** - Test logs (`admin-logs/testing/page.tsx`)
- **`/email/testing`** - Test email (`email/testing/page.tsx`)
- **`/sentry/testing`** - Test Sentry (`sentry/testing/page.tsx`)
- **`/stripe/testing`** - Test Stripe (`stripe/testing/page.tsx`)
- **`/db/test`** - Test DB (`db/test/page.tsx`)
- **`/upload`** - Upload (`upload/page.tsx`)

---

## 📚 Documentation

- **`/docs`** - Documentation (`docs/page.tsx`)

---

## 🔧 Utilitaires

- **`/check-my-superadmin-status`** - Vérifier statut superadmin (`check-my-superadmin-status/page.tsx`)

---

## 📊 Statistiques

**Total:** ~146 pages

### Par Catégorie

| Catégorie | Nombre | Exemples |
|-----------|--------|----------|
| **Marketing** | ~15 | `/`, `/a-propos`, `/services`, `/contact` |
| **Blog/CMS** | ~15 | `/blog`, `/content/*`, `/pages/*` |
| **Authentification** | ~5 | `/auth/login`, `/auth/register` |
| **Profil & Paramètres** | ~20 | `/profile/*`, `/settings/*` |
| **Dashboard** | ~15 | `/dashboard/*`, `/dashboard/reseau/*` |
| **Administration** | ~15 | `/admin/*` |
| **Client Portal** | ~4 | `/client/*` |
| **ERP** | ~6 | `/erp/*` |
| **Aide & Support** | ~6 | `/help/*` |
| **Tests & Exemples** | ~30 | `/test/*`, `/examples/*` |
| **Autres** | ~15 | `/onboarding/*`, `/monitoring/*`, etc. |

---

## 🗑️ Pages à Nettoyer (Potentiellement)

### Backups
- **`/contact.backup`** - Backup contact (à supprimer ?)
- **`/page.tsx.backup`** - Backup page d'accueil (à supprimer ?)

### Pages de Test (En Production)
- Toutes les pages `/test/*` (garder pour dev, masquer en prod ?)
- Toutes les pages `/examples/*` (garder pour dev, masquer en prod ?)
- Pages de test spécifiques (`/test-sentry`, `/ai/testing`, etc.)

---

## ✅ Pages Marketing Essentielles (Site Marketing Pur)

Pour un site marketing pur avec CMS, voici les pages essentielles :

### Pages Marketing
- ✅ `/` - Page d'accueil
- ✅ `/a-propos` - À propos
- ✅ `/services` - Services
- ✅ `/realisations` - Réalisations
- ✅ `/contact` - Contact
- ✅ `/pricing` - Tarification
- ✅ `/faq` - FAQ

### Blog & CMS
- ✅ `/blog` - Blog
- ✅ `/blog/[slug]` - Articles
- ✅ `/pages/[slug]` - Pages dynamiques CMS

### Pages Légales
- ✅ `/legal` - Mentions légales
- ✅ `/privacy` - Confidentialité
- ✅ `/terms` - Conditions
- ✅ `/cookies` - Cookies

### Administration CMS
- ✅ `/admin` - Administration
- ✅ `/admin/articles` - Gestion articles
- ✅ `/admin/pages` - Gestion pages
- ✅ `/admin/media` - Gestion médias
- ✅ `/content` - Gestion de contenu

---

**Note:** Cette liste peut être utilisée pour :
- Planifier le nettoyage des pages inutiles
- Créer un sitemap
- Documenter l'architecture du site
- Identifier les pages à optimiser pour SEO
