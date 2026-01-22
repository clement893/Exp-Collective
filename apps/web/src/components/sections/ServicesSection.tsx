'use client';

import { Link } from '@/i18n/routing';
import Image from 'next/image';
import { Palette, TrendingUp, BarChart3, FileText } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      id: 'service-1',
      number: '01',
      title: 'Image de marque et marketing',
      description: 'Construire ou réinventer l\'image de marque',
      details: 'Publicité et visibilité\nFaire briller votre offre avec des campagnes qui captivent',
      href: '/services/image-de-marque',
      image: '/assets/services/branding.jpg',
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
      image: '/assets/services/strategie.jpg',
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
      image: '/assets/services/experience-client.jpg',
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
      image: '/assets/services/analytics.png',
      alt: 'Mesure de performance',
      icon: FileText,
    },
  ];

  return (
    <section id="services" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Titre de section */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl lg:text-5xl font-light text-exp-black leading-tight">
            Des services personnalisés<br />à vos ambitions
          </h2>
        </div>

        {/* Grille de services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <Link key={service.id} href={service.href}>
              <div className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-500 transform hover:scale-105">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                
                {/* Contenu */}
                <div className="p-8 bg-gradient-to-br from-white to-gray-50">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-sm font-light text-gray-400">{service.number}</span>
                    {service.icon && (
                      <service.icon className="w-6 h-6 text-exp-yellow" />
                    )}
                  </div>
                  
                  <h3 className="text-2xl font-light text-exp-black mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-base text-gray-700 leading-relaxed mb-3 font-light">
                    {service.description}
                  </p>
                  
                  <p className="text-sm text-gray-600 leading-relaxed mb-6 font-light whitespace-pre-line">
                    {service.details}
                  </p>
                  
                  <button className="bg-exp-yellow text-exp-black px-6 py-2 rounded-full text-sm font-medium hover:bg-exp-black hover:text-white transition-all duration-300">
                    En savoir plus
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
