'use client';

import { useEffect, useRef, useState, useMemo } from 'react';
import { Link } from '@/i18n/routing';
import Image from 'next/image';

export default function ServicesSection() {
  const [activeService, setActiveService] = useState<number>(1);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const sectionRef = useRef<HTMLElement | null>(null);
  const stickyContainerRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Configuration de l'animation
  const CARD_HEIGHT = 400; // Hauteur approximative d'une carte (réduite pour design plus compact)
  const CARD_GAP = 32; // Espacement entre les cartes (réduit)
  const SECTION_MULTIPLIER = 4; // Multiplicateur de viewport pour la hauteur de la section (réduit)

  const services = [
    {
      id: 'service-1',
      number: '01',
      title: 'Image de marque et marketing',
      description: 'Construire ou réinventer l\'image de marque',
      details: 'Publicité et visibilité\nFaire briller votre offre avec des campagnes qui captivent',
      href: '/services/image-de-marque',
      image: '/assets/photos/FREDERICXAnnieClaudePhotographie-22.jpg',
      alt: 'Image de marque et marketing',
    },
    {
      id: 'service-2',
      number: '02',
      title: 'Accompagnement stratégique global',
      description: 'Vision stratégique et exécution tactique',
      details: 'CMO on demand\nPropulser votre croissance avec expertise',
      href: '/services/strategie-cmo',
      image: '/assets/photos/FREDERICXAnnieClaudePhotographie-22.jpg',
      alt: 'Accompagnement stratégique',
    },
    {
      id: 'service-3',
      number: '03',
      title: 'Expérience client et design',
      description: 'Créer des parcours mémorables',
      details: 'Design centré utilisateur\nTransformer chaque interaction en moment fort',
      href: '/services/experience-client',
      image: '/assets/photos/FREDERICXAnnieClaudePhotographie-22.jpg',
      alt: 'Expérience client',
    },
    {
      id: 'service-4',
      number: '04',
      title: 'Mesure de performance',
      description: 'Données et insights actionnables',
      details: 'Analytics et optimisation\nPrendre des décisions éclairées basées sur les données',
      href: '/services/mesure-performance',
      image: '/assets/photos/FREDERICXAnnieClaudePhotographie-22.jpg',
      alt: 'Mesure de performance',
    },
    {
      id: 'service-5',
      number: '05',
      title: 'Appels d\'offres et soumissions',
      description: 'Gagner les contrats stratégiques',
      details: 'Rédaction et stratégie\nMaximiser vos chances de succès',
      href: '/services/appels-offres',
      image: '/assets/photos/FREDERICXAnnieClaudePhotographie-22.jpg',
      alt: 'Appels d\'offres',
    },
  ];

  // Calculer la hauteur totale nécessaire pour toutes les cartes
  const totalCardsHeight = useMemo(() => {
    return services.length * CARD_HEIGHT + (services.length - 1) * CARD_GAP;
  }, []);

  // Écouter le scroll de la page pour calculer la progression
  useEffect(() => {
    let rafId: number | null = null;

    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      // Calculer la progression (0 à 1) du scroll dans la section
      // La section commence quand le haut du viewport atteint le haut de la section
      // La section se termine quand on a scrollé toute la hauteur de la section
      const scrollStart = sectionTop - windowHeight; // Quand la section entre dans le viewport
      const scrollEnd = sectionTop + sectionHeight - windowHeight; // Quand on a fini de scroller la section
      const scrollRange = scrollEnd - scrollStart;
      
      let progress = 0;
      if (scrollY >= scrollStart && scrollY <= scrollEnd) {
        // On est dans la section
        progress = (scrollY - scrollStart) / scrollRange;
        progress = Math.max(0, Math.min(1, progress)); // Clamp entre 0 et 1
      } else if (scrollY > scrollEnd) {
        // On a dépassé la section
        progress = 1;
      }

      setScrollProgress(progress);
    };

    const onScroll = () => {
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
      rafId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll(); // Appel initial

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', handleScroll);
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  // Intersection Observer pour highlight des numéros
  useEffect(() => {
    if (!stickyContainerRef.current) return;

    const observers: IntersectionObserver[] = [];

    cardRefs.current.forEach((ref, index) => {
      if (!ref) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const containerRect = stickyContainerRef.current?.getBoundingClientRect();
              const cardRect = entry.boundingClientRect;
              
              if (containerRect) {
                const containerCenter = containerRect.top + containerRect.height / 2;
                const cardCenter = cardRect.top + cardRect.height / 2;
                const distanceFromCenter = Math.abs(cardCenter - containerCenter);

                // Active le service si la carte est dans la zone centrale (40% du conteneur)
                if (distanceFromCenter < containerRect.height * 0.2) {
                  setActiveService(index + 1);
                }
              }
            }
          });
        },
        {
          root: stickyContainerRef.current,
          threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
          rootMargin: '-30% 0px -30% 0px',
        }
      );

      observer.observe(ref);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  // Calculer le translateY pour chaque carte selon la progression du scroll
  const getCardTransform = (index: number) => {
    if (typeof window === 'undefined') return 0;
    
    const viewportHeight = window.innerHeight;
    const titleHeight = 100; // Hauteur approximative du titre + padding (réduite)
    const availableHeight = viewportHeight - titleHeight;
    
    // Chaque carte doit passer par le centre du viewport disponible
    // On veut que les cartes défilent une par une
    const progressPerCard = 1 / services.length;
    const cardStartProgress = index * progressPerCard;
    const cardEndProgress = (index + 1) * progressPerCard;
    
    // Calculer la progression relative de cette carte (0 à 1)
    let cardProgress = 0;
    if (scrollProgress >= cardEndProgress) {
      cardProgress = 1; // Carte complètement passée
    } else if (scrollProgress > cardStartProgress) {
      cardProgress = (scrollProgress - cardStartProgress) / progressPerCard;
    }
    
    // Position initiale : la carte commence en bas du conteneur (hors vue)
    const initialY = availableHeight + 50; // Réduit de 100 à 50
    
    // Position finale : la carte remonte jusqu'à être centrée puis continue
    // On veut que chaque carte passe par le centre du viewport disponible
    const centerY = availableHeight / 2 - CARD_HEIGHT / 2;
    const finalY = -index * (CARD_HEIGHT + CARD_GAP) + centerY - (CARD_HEIGHT + CARD_GAP);
    
    // Interpolation entre position initiale et finale avec easing
    const easeInOut = (t: number) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    const easedProgress = easeInOut(cardProgress);
    
    const translateY = initialY + (finalY - initialY) * easedProgress;
    
    return translateY;
  };

  return (
    <section 
      ref={sectionRef}
      id="services" 
      className="relative bg-[#F5F3F0]"
      style={{ 
        height: `${SECTION_MULTIPLIER * 100}vh`,
        minHeight: `${SECTION_MULTIPLIER * 100}vh`
      }}
    >
      {/* Sticky container qui reste fixe pendant le scroll */}
      <div 
        ref={stickyContainerRef}
        className="sticky top-0 h-screen overflow-hidden"
      >
        <div className="max-w-7xl mx-auto w-full h-full px-4 lg:px-6 py-4 lg:py-6 flex flex-col">
          {/* Titre de section - fixe en haut */}
          <div className="mb-4 flex-shrink-0 z-10">
            <h2 className="text-4xl lg:text-5xl font-light text-exp-black leading-tight">
              Des services personnalisés<br />à vos ambitions
            </h2>
          </div>

          {/* Layout avec numéros sticky à gauche et cartes animées */}
          <div className="flex gap-6 lg:gap-8 flex-1 min-h-0 relative">
            {/* Numéros sticky à gauche */}
            <div className="hidden lg:block w-16 flex-shrink-0 z-20">
              <div className="sticky top-24 space-y-4">
                {services.map((service, index) => (
                  <button
                    key={service.id}
                    onClick={() => {
                      // Scroll vers la section services
                      sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
                      // On pourrait aussi ajuster le scroll progress ici si nécessaire
                    }}
                    className={`block text-xl lg:text-2xl font-light transition-all duration-300 ${
                      activeService === index + 1
                        ? 'text-exp-black scale-105'
                        : 'text-gray-400 hover:text-exp-black'
                    }`}
                  >
                    {service.number}
                  </button>
                ))}
              </div>
            </div>

            {/* Conteneur des cartes - position relative pour les cartes en absolute */}
            <div className="flex-1 relative" style={{ minHeight: totalCardsHeight }}>
              {services.map((service, index) => {
                const translateY = getCardTransform(index);
                
                return (
                  <div
                    key={service.id}
                    id={service.id}
                    ref={(el) => {
                      cardRefs.current[index] = el;
                    }}
                    className="absolute left-0 right-0"
                    style={{
                      transform: `translateY(${translateY}px)`,
                      willChange: 'transform',
                      top: 0,
                    }}
                  >
                    <Link href={service.href}>
                      <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                          {/* Image */}
                          <div className="relative h-64 md:h-72 overflow-hidden">
                            <Image
                              src={service.image}
                              alt={service.alt}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                          </div>
                          {/* Contenu */}
                          <div className="p-6 flex flex-col justify-center">
                            <div className="flex items-center gap-2 mb-3">
                              <span className="text-xs font-light text-gray-400">{service.number}</span>
                              <h3 className="text-xl lg:text-2xl font-light text-exp-black">
                                {service.title}
                              </h3>
                            </div>
                            <p className="text-sm lg:text-base text-gray-600 leading-relaxed mb-3 font-light">
                              {service.description}
                            </p>
                            <p className="text-xs lg:text-sm text-gray-500 leading-relaxed mb-4 font-light whitespace-pre-line">
                              {service.details}
                            </p>
                            <button className="inline-flex items-center text-exp-black text-xs lg:text-sm font-light border border-exp-black px-5 py-1.5 rounded-full hover:bg-exp-black hover:text-white transition-all duration-300 w-fit">
                              Voir plus
                            </button>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
