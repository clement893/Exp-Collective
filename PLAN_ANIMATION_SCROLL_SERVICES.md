# Plan d'animation - Section Services avec scroll contrôlé

## Objectif
Créer une animation où les cartes de services défilent automatiquement vers le haut quand l'utilisateur scroll la page, sans barre de scroll visible. Quand toutes les cartes ont défilé, le scroll normal de la page reprend.

## Concept
- **Scroll hijacking** : Intercepter le scroll de la page pour contrôler l'animation des cartes
- **Animation fluide** : Les cartes se déplacent vers le haut avec `transform: translateY()`
- **Pas de scrollbar** : Le conteneur des cartes n'a pas de scrollbar visible
- **Transition naturelle** : Après la dernière carte, le scroll normal reprend

## Architecture proposée

### Option 1 : Scroll parallaxe avec Intersection Observer (Recommandée)
**Principe** : 
- La section services prend une hauteur fixe (100vh)
- Les cartes sont positionnées en `absolute` ou `fixed` dans un conteneur
- On écoute le scroll de la page avec `scroll` event
- On calcule la position de scroll relative à la section
- On translate les cartes vers le haut proportionnellement au scroll

**Avantages** :
- Animation fluide et naturelle
- Pas de scrollbar visible
- Transition naturelle vers le scroll normal
- Compatible avec tous les navigateurs

**Implémentation** :
```tsx
1. Section avec position: sticky ou fixed
2. Conteneur des cartes avec position: relative et hauteur calculée
3. Chaque carte avec position: absolute et transform: translateY()
4. Écouter window.scrollY pour calculer le décalage
5. Appliquer translateY négatif aux cartes selon le scroll
```

### Option 2 : Scroll snapping avec animation CSS
**Principe** :
- Utiliser `scroll-snap-type` et `scroll-snap-align`
- Animer avec CSS `@keyframes` ou `transform`
- Masquer la scrollbar avec CSS

**Avantages** :
- Plus simple à implémenter
- Performance native du navigateur

**Inconvénients** :
- Moins de contrôle sur l'animation
- Peut nécessiter un conteneur scrollable

### Option 3 : Framer Motion ou GSAP
**Principe** :
- Utiliser une bibliothèque d'animation
- Contrôler l'animation avec `useScroll` hook
- Animation plus fluide et contrôlable

**Avantages** :
- Animation très fluide
- Beaucoup de contrôle
- Effets avancés possibles

**Inconvénients** :
- Dépendance supplémentaire
- Poids du bundle

## Plan d'implémentation recommandé : Option 1

### Étape 1 : Structure HTML
```tsx
<section id="services" className="relative h-[500vh]"> {/* 5x viewport height */}
  <div className="sticky top-0 h-screen overflow-hidden">
    {/* Titre fixe */}
    <div className="absolute top-0 left-0 right-0 z-10">
      <h2>Des services personnalisés à vos ambitions</h2>
    </div>
    
    {/* Numéros sticky à gauche */}
    <div className="absolute left-0 top-0 bottom-0">
      {/* Numéros */}
    </div>
    
    {/* Conteneur des cartes - scroll animé */}
    <div className="absolute right-0 top-0 bottom-0">
      {services.map((service, index) => (
        <div 
          key={service.id}
          style={{
            transform: `translateY(${scrollOffset}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          {/* Carte */}
        </div>
      ))}
    </div>
  </div>
</section>
```

### Étape 2 : Calcul du scroll
```tsx
const [scrollProgress, setScrollProgress] = useState(0);
const sectionRef = useRef<HTMLElement>(null);

useEffect(() => {
  const handleScroll = () => {
    if (!sectionRef.current) return;
    
    const sectionTop = sectionRef.current.offsetTop;
    const sectionHeight = sectionRef.current.offsetHeight;
    const windowHeight = window.innerHeight;
    const scrollY = window.scrollY;
    
    // Calculer la progression du scroll dans la section (0 à 1)
    const progress = Math.max(0, Math.min(1, 
      (scrollY - sectionTop + windowHeight) / sectionHeight
    ));
    
    setScrollProgress(progress);
  };
  
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Initial call
  
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
```

### Étape 3 : Animation des cartes
```tsx
// Pour chaque carte, calculer sa position
const cardOffset = scrollProgress * totalCardsHeight - (index * cardHeight);
const translateY = -cardOffset;

// Appliquer le transform
style={{ transform: `translateY(${translateY}px)` }}
```

### Étape 4 : Highlight des numéros
- Utiliser Intersection Observer pour détecter quelle carte est visible
- Mettre à jour `activeService` selon la carte visible

### Étape 5 : Masquer la scrollbar
```css
.scroll-container {
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE/Edge */
}

.scroll-container::-webkit-scrollbar {
  display: none; /* Chrome/Safari */
}
```

## Détails techniques

### Hauteur de la section
- La section doit avoir une hauteur suffisante pour permettre le scroll
- Calcul : `(nombre de cartes × hauteur de carte) + espacement`
- Exemple : 5 cartes × 600px + espacements = ~3500px = ~3.5 viewport height

### Performance
- Utiliser `requestAnimationFrame` pour les animations
- Debounce le scroll event si nécessaire
- Utiliser `will-change: transform` pour optimiser les animations
- Éviter les re-renders inutiles avec `useMemo` et `useCallback`

### Accessibilité
- S'assurer que le scroll clavier fonctionne
- Permettre le scroll avec la molette
- Maintenir la navigation au clavier

## Structure finale

```
Section Services (hauteur: 5x viewport)
├── Sticky Container (h-screen, overflow-hidden)
    ├── Titre (position: absolute, top)
    ├── Numéros (position: absolute, left, sticky)
    └── Cartes Container (position: absolute, right)
        ├── Carte 1 (transform: translateY())
        ├── Carte 2 (transform: translateY())
        ├── Carte 3 (transform: translateY())
        ├── Carte 4 (transform: translateY())
        └── Carte 5 (transform: translateY())
```

## Tests à effectuer

1. ✅ Scroll fluide sans saccades
2. ✅ Pas de scrollbar visible
3. ✅ Les numéros se highlightent correctement
4. ✅ Après la dernière carte, le scroll normal reprend
5. ✅ Compatible mobile (touch scroll)
6. ✅ Performance acceptable (60fps)
7. ✅ Navigation clavier fonctionne

## Fichiers à modifier

1. `apps/web/src/components/sections/ServicesSection.tsx` - Refonte complète
2. (Optionnel) Créer un hook `useScrollAnimation` pour réutiliser la logique
