'use client';

import { useEffect, useRef, useState } from 'react';
import { Link } from '@/i18n/routing';
import Image from 'next/image';
import { Palette, TrendingUp, BarChart3, FileText } from 'lucide-react';

export default function ServicesSection() {
  const [activeService, setActiveService] = useState<number>(1);
  const sectionRef = useRef<HTMLElement | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

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
      icon: Palette,
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
      icon: TrendingUp,
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
      icon: BarChart3,
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
      icon: FileText,
    },
  ];

  // Contrôler le scroll du conteneur interne avec le scroll de la page
  useEffect(() => {
    let rafId: number | null = null;

    const handleScroll = () => {
      if (!sectionRef.current || !scrollContainerRef.current) return;

      const section = sectionRef.current;
      const scrollContainer = scrollContainerRef.current;
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      // Calculer quand la section entre dans le viewport
      const scrollStart = sectionTop - windowHeight;
      const scrollEnd = sectionTop + sectionHeight - windowHeight;
      const scrollRange = scrollEnd - scrollStart;

      if (scrollY >= scrollStart && scrollY <= scrollEnd) {
        // On est dans la section - calculer le progress (0 à 1)
        const progress = Math.max(0, Math.min(1, (scrollY - scrollStart) / scrollRange));
        
        // Calculer le scrollTop du conteneur interne
        const maxScroll = scrollContainer.scrollHeight - scrollContainer.clientHeight;
        const targetScroll = progress * maxScroll;
        
        // Appliquer le scroll de manière fluide
        scrollContainer.scrollTop = targetScroll;
      } else if (scrollY < scrollStart) {
        scrollContainer.scrollTop = 0;
      } else if (scrollY > scrollEnd) {
        scrollContainer.scrollTop = scrollContainer.scrollHeight;
      }
    };

    const onScroll = () => {
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
      rafId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll();

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
    if (!scrollContainerRef.current) return;

    const observers: IntersectionObserver[] = [];

    cardRefs.current.forEach((ref, index) => {
      if (!ref) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const containerRect = scrollContainerRef.current?.getBoundingClientRect();
              const cardRect = entry.boundingClientRect;
              
              if (containerRect) {
                const containerCenter = containerRect.top + containerRect.height / 2;
                const cardCenter = cardRect.top + cardRect.height / 2;
                const distanceFromCenter = Math.abs(cardCenter - containerCenter);

                // Active le service si la carte est dans la zone centrale
                if (distanceFromCenter < containerRect.height * 0.25) {
                  setActiveService(index + 1);
                }
              }
            }
          });
        },
        {
          root: scrollContainerRef.current,
          threshold: [0, 0.25, 0.5, 0.75, 1],
          rootMargin: '-35% 0px -35% 0px',
        }
      );

      observer.observe(ref);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  // Calculer la hauteur de la section (basée sur le nombre de cartes)
  // Réduit à 60vh par carte pour un scroll plus rapide
  const sectionHeight = services.length * 60; // 60vh par carte

  return (
    <section 
      ref={sectionRef}
      id="services" 
      className="relative bg-[#F5F3F0]"
      style={{ 
        height: `${sectionHeight}vh`,
        minHeight: `${sectionHeight}vh`
      }}
    >
      {/* Sticky container qui reste fixe pendant le scroll */}
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="max-w-7xl mx-auto w-full h-full px-4 lg:px-6 py-4 lg:py-6 flex flex-col">
          {/* Titre de section - fixe en haut */}
          <div className="mb-4 flex-shrink-0 z-10">
            <h2 className="text-4xl lg:text-5xl font-light text-exp-black leading-tight">
              Des services personnalisés<br />à vos ambitions
            </h2>
          </div>

          {/* Layout avec numéros sticky à gauche et cartes scrollables */}
          <div className="flex gap-6 lg:gap-8 flex-1 min-h-0">
            {/* Numéros sticky à gauche */}
            <div className="hidden lg:block w-16 flex-shrink-0 z-20">
              <div className="sticky top-24 space-y-4">
                {services.map((service, index) => (
                  <button
                    key={service.id}
                    onClick={() => {
                      const card = cardRefs.current[index];
                      if (card && scrollContainerRef.current) {
                        const container = scrollContainerRef.current;
                        const cardRect = card.getBoundingClientRect();
                        const containerRect = container.getBoundingClientRect();
                        const targetScroll = container.scrollTop + cardRect.top - containerRect.top - (containerRect.height / 2) + (cardRect.height / 2);
                        container.scrollTo({ top: targetScroll, behavior: 'smooth' });
                      }
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

            {/* Conteneur scrollable masqué - les cartes défilent ici */}
            <div 
              ref={scrollContainerRef}
              className="flex-1 overflow-y-auto"
              style={{
                scrollbarWidth: 'none', // Firefox
                msOverflowStyle: 'none', // IE/Edge
              }}
            >
              <style jsx>{`
                div::-webkit-scrollbar {
                  display: none; /* Chrome/Safari */
                }
              `}</style>
              
              <div className="space-y-6">
                {services.map((service, index) => (
                  <div
                    key={service.id}
                    id={service.id}
                    ref={(el) => {
                      cardRefs.current[index] = el;
                    }}
                    className="scroll-mt-24"
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
                            <div className="flex items-center gap-3 mb-3">
                              <div className="flex items-center gap-2">
                                <span className="text-xs font-light text-gray-400">{service.number}</span>
                                {service.icon && (
                                  <service.icon className="w-5 h-5 text-exp-yellow" />
                                )}
                              </div>
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
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
