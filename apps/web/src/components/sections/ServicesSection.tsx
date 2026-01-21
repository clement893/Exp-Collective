'use client';

import { useEffect, useRef, useState } from 'react';
import { Link } from '@/i18n/routing';
import Image from 'next/image';

export default function ServicesSection() {
  const [activeService, setActiveService] = useState<number>(1);
  const serviceRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    serviceRefs.current.forEach((ref, index) => {
      if (!ref) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const boundingRect = entry.boundingClientRect;
              const viewportHeight = window.innerHeight;
              const viewportCenter = viewportHeight / 2;
              const cardCenter = boundingRect.top + boundingRect.height / 2;
              
              // Si le centre de la carte est proche du centre de l'écran
              const distanceFromCenter = Math.abs(cardCenter - viewportCenter);
              
              // Active le service si la carte est dans la zone centrale (40% du viewport)
              if (distanceFromCenter < viewportHeight * 0.2) {
                setActiveService(index + 1);
              }
            }
          });
        },
        {
          threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
          rootMargin: '-25% 0px -25% 0px',
        }
      );

      observer.observe(ref);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
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
    <section id="services" className="py-24 px-6 bg-[#F5F3F0]">
      <div className="max-w-7xl mx-auto">
        {/* Titre de section */}
        <div className="mb-16">
          <h2 className="text-5xl font-light text-exp-black leading-tight">
            Des services personnalisés<br />à vos ambitions
          </h2>
        </div>

        {/* Layout avec numéros sticky à gauche */}
        <div className="flex gap-12">
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
                      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
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

          {/* Contenu scrollable à droite */}
          <div className="flex-1 space-y-12">
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
