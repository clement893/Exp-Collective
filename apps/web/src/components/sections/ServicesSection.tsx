'use client';

import { useEffect, useRef, useState } from 'react';
import { Link } from '@/i18n/routing';
import Image from 'next/image';

export default function ServicesSection() {
  const [activeService, setActiveService] = useState<number>(1);
  const serviceRefs = useRef<(HTMLDivElement | null)[]>([]);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const scrollContainer = scrollContainerRef.current;

    if (!scrollContainer) return;

    serviceRefs.current.forEach((ref, index) => {
      if (!ref) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const containerRect = scrollContainer.getBoundingClientRect();
              const cardRect = entry.boundingClientRect;
              const containerCenter = containerRect.top + containerRect.height / 2;
              const cardCenter = cardRect.top + cardRect.height / 2;
              
              // Si le centre de la carte est proche du centre du conteneur
              const distanceFromCenter = Math.abs(cardCenter - containerCenter);
              
              // Active le service si la carte est dans la zone centrale (40% du conteneur)
              if (distanceFromCenter < containerRect.height * 0.2) {
                setActiveService(index + 1);
              }
            }
          });
        },
        {
          root: scrollContainer,
          threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
          rootMargin: '-25% 0px -25% 0px',
        }
      );

      observer.observe(ref);
      observers.push(observer);
    });

    // Empêcher le scroll de la page quand on scroll dans le conteneur
    const handleWheel = (e: WheelEvent) => {
      const container = scrollContainerRef.current;
      if (!container) return;

      const isAtTop = container.scrollTop === 0;
      const isAtBottom = container.scrollTop + container.clientHeight >= container.scrollHeight - 1;

      // Si on scroll vers le haut et qu'on est déjà en haut, empêcher le scroll de la page
      if (e.deltaY < 0 && isAtTop) {
        e.preventDefault();
        e.stopPropagation();
      }
      // Si on scroll vers le bas et qu'on est déjà en bas, empêcher le scroll de la page
      else if (e.deltaY > 0 && isAtBottom) {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      observers.forEach((observer) => observer.disconnect());
      if (container) {
        container.removeEventListener('wheel', handleWheel);
      }
    };
  }, []);

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

  return (
    <section id="services" className="h-screen bg-[#F5F3F0] flex flex-col overflow-hidden">
      <div className="max-w-7xl mx-auto w-full px-6 py-12 flex flex-col flex-1 min-h-0">
        {/* Titre de section */}
        <div className="mb-8 flex-shrink-0">
          <h2 className="text-5xl font-light text-exp-black leading-tight">
            Des services personnalisés<br />à vos ambitions
          </h2>
        </div>

        {/* Layout avec numéros sticky à gauche et cartes scrollables */}
        <div className="flex gap-12 flex-1 min-h-0">
          {/* Numéros sticky à gauche */}
          <div className="hidden lg:block w-20 flex-shrink-0">
            <div className="sticky top-32 space-y-6">
              {services.map((service, index) => (
                <a
                  key={service.id}
                  href={`#${service.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById(service.id);
                    if (element) {
                      const scrollContainer = element.closest('.scroll-container');
                      if (scrollContainer) {
                        const containerRect = scrollContainer.getBoundingClientRect();
                        const elementRect = element.getBoundingClientRect();
                        const scrollTop = scrollContainer.scrollTop;
                        const targetScroll = scrollTop + elementRect.top - containerRect.top - containerRect.height / 2 + elementRect.height / 2;
                        scrollContainer.scrollTo({ top: targetScroll, behavior: 'smooth' });
                      }
                    }
                  }}
                  className={`block text-2xl font-light transition-all duration-300 ${
                    activeService === index + 1
                      ? 'text-exp-black scale-110'
                      : 'text-gray-400 hover:text-exp-black'
                  }`}
                >
                  {service.number}
                </a>
              ))}
            </div>
          </div>

          {/* Contenu scrollable à droite - seul élément qui scroll */}
          <div 
            ref={scrollContainerRef}
            className="flex-1 space-y-12 overflow-y-auto scroll-container scroll-smooth" 
            style={{ scrollbarWidth: 'thin' }}
          >
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                ref={(el) => {
                  serviceRefs.current[index] = el;
                }}
                className="scroll-mt-32"
              >
                <Link href={service.href}>
                  <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                      {/* Image */}
                      <div className="relative h-80 md:h-auto overflow-hidden">
                        <Image
                          src={service.image}
                          alt={service.alt}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                      {/* Contenu */}
                      <div className="p-8 flex flex-col justify-center">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="text-sm font-light text-gray-400">{service.number}</span>
                          <h3 className="text-2xl font-light text-exp-black">
                            {service.title}
                          </h3>
                        </div>
                        <p className="text-base text-gray-600 leading-relaxed mb-4 font-light">
                          {service.description}
                        </p>
                        <p className="text-sm text-gray-500 leading-relaxed mb-6 font-light whitespace-pre-line">
                          {service.details}
                        </p>
                        <button className="inline-flex items-center text-exp-black text-sm font-light border border-exp-black px-6 py-2 rounded-full hover:bg-exp-black hover:text-white transition-all duration-300">
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
    </section>
  );
}
