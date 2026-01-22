# Plan de correction - Page Services Dark Mode

## Problème identifié
La page `/fr/services` apparaît différemment selon que le navigateur est en dark mode (Chrome) ou light mode (Edge), même si nous avons désactivé la détection automatique du dark mode.

## Causes identifiées

1. **Composant Card** utilise des variables CSS qui changent avec le thème :
   - `bg-[var(--color-background)]`
   - `border-[var(--color-border)]`
   - `text-[var(--color-foreground)]`

2. **Composant Button** utilise des classes `dark:` qui s'activent si la classe `dark` est présente :
   - `dark:bg-primary-500`
   - `dark:hover:bg-primary-600`
   - `dark:focus:ring-primary-400`

3. **Variables CSS** dans le layout qui changent selon le mode :
   - `--color-background`
   - `--color-foreground`
   - `--color-border`

## Plan de correction

### Étape 1 : Forcer les couleurs exp-* à être fixes
- Vérifier que les couleurs `exp-white`, `exp-black`, `exp-yellow`, `exp-gray` dans `tailwind.config.ts` sont bien fixes (pas de variantes dark)
- ✅ Déjà fait : Les couleurs exp-* sont définies comme fixes dans tailwind.config.ts

### Étape 2 : Modifier la page services pour utiliser des couleurs fixes
- Remplacer toutes les utilisations de variables CSS par des couleurs exp-* fixes
- Forcer le background de la page à `bg-white` ou `bg-exp-white`
- Forcer tous les textes à utiliser des couleurs exp-* explicites

### Étape 3 : Créer une version du composant Card avec couleurs fixes
- Option A : Créer un wrapper qui force les couleurs
- Option B : Ajouter des props au Card pour forcer les couleurs
- Option C : Utiliser des styles inline pour forcer les couleurs

### Étape 4 : Modifier le composant Button pour la page services
- Utiliser des classes exp-* fixes au lieu de variables CSS
- Supprimer les classes `dark:` ou les remplacer par des classes fixes

### Étape 5 : Ajouter une protection supplémentaire
- Ajouter un style inline sur le conteneur principal pour forcer `background: white !important`
- S'assurer que la classe `dark` n'est jamais ajoutée au document

## Solution recommandée

### Approche 1 : Modifier directement la page services (Rapide)
1. Remplacer `Card` par un div avec des styles fixes
2. Remplacer `Button` par un bouton avec des classes exp-* fixes
3. Forcer toutes les couleurs à être explicites

### Approche 2 : Créer des variantes de composants (Plus propre)
1. Créer `ExpCard` et `ExpButton` qui utilisent uniquement des couleurs exp-* fixes
2. Utiliser ces composants dans la page services

### Approche 3 : Ajouter un wrapper de protection (Compromis)
1. Créer un composant `LightModeOnly` qui force le mode clair
2. Wrapper la page services avec ce composant

## Implémentation recommandée : Approche 1 (Rapide)

Modifications à faire dans `apps/web/src/app/[locale]/services/page.tsx` :

1. **Remplacer le conteneur principal** :
   ```tsx
   <div className="min-h-screen bg-white" style={{ backgroundColor: '#FFFFFF' }}>
   ```

2. **Remplacer Card par un div avec styles fixes** :
   ```tsx
   <div className="bg-white border-2 border-gray-200 rounded-lg shadow-sm">
   ```

3. **Remplacer Button par un bouton avec classes fixes** :
   ```tsx
   <button className="bg-black text-white hover:bg-yellow-400 hover:text-black">
   ```

4. **Forcer toutes les couleurs exp-* à être explicites** :
   - `bg-exp-white` → `bg-white` ou `style={{ backgroundColor: '#FFFFFF' }}`
   - `text-exp-black` → `text-black` ou `style={{ color: '#000000' }}`
   - `bg-exp-yellow` → `bg-yellow-400` ou `style={{ backgroundColor: '#FFD400' }}`

## Tests à effectuer

1. Ouvrir la page dans Chrome (dark mode activé)
2. Ouvrir la page dans Edge (light mode)
3. Vérifier que l'apparence est identique
4. Vérifier que les couleurs sont correctes (blanc, noir, jaune)
5. Vérifier que les hover effects fonctionnent
6. Vérifier que les boutons sont cliquables

## Fichiers à modifier

1. `apps/web/src/app/[locale]/services/page.tsx` - Modifier les couleurs et composants
2. (Optionnel) Créer `apps/web/src/components/exp/ExpCard.tsx` - Version fixe du Card
3. (Optionnel) Créer `apps/web/src/components/exp/ExpButton.tsx` - Version fixe du Button
