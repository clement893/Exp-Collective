'use client';

import type { Metadata } from 'next';
import { Link } from '@/i18n/routing';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function HomeDemoPage() {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Parallax effect pour le hero
  const parallaxOffset = scrollY * 0.5;

  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section - Grand 'e' jaune avec parallax subtil */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center bg-exp-black overflow-hidden">
        {/* Grand 'e' jaune en arrière-plan avec parallax */}
        <div 
          className="absolute inset-0 flex items-center justify-center transition-transform duration-100"
          style={{ transform: `translateY(${parallaxOffset}px)` }}
        >
          <div className="relative w-[80%] h-[80%] max-w-[1200px]">
            <Image
              src="/assets/e infusion/e infusion V3 copie.png"
              alt=""
              fill
              className="object-contain opacity-90"
              priority
            />
          </div>
        </div>

        {/* Texture légère (grain) */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] opacity-[0.02]"></div>

        {/* Contenu superposé */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Logo à gauche avec micro-animation */}
            <div className="flex justify-center lg:justify-start">
              <div className="w-full max-w-2xl animate-fade-in-up">
                <Image
                  src="/assets/Logo/Final/ExpC_Lc inv.png"
                  alt="Expérience Collective"
                  width={800}
                  height={300}
                  className="w-full h-auto drop-shadow-2xl"
                  priority
                />
              </div>
            </div>

            {/* Tagline à droite avec animation staggered */}
            <div className="text-left">
              <p className="text-3xl lg:text-4xl text-exp-yellow font-light leading-relaxed">
                <span className="inline-block animate-fade-in-up animation-delay-200">Comprendre pour oser,</span>
                <br />
                <span className="inline-block animate-fade-in-up animation-delay-400">oser pour comprendre.</span>
              </p>
            </div>
          </div>

          {/* Bouton découvrir en bas */}
          <div className="absolute bottom-16 left-1/2 -translate-x-1/2 animate-fade-in-up animation-delay-600">
            <a href="#services">
              <button className="text-white text-sm font-light tracking-widest uppercase hover:text-exp-yellow transition-all duration-700 flex items-center gap-3 group">
                <span>Découvrez plus</span>
                <svg className="w-5 h-5 transform group-hover:translate-y-1 transition-transform duration-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Section Services - Scroll fixe avec grid asymétrique et chiffres en filigrane */}
      <section id="services" className="py-24 px-6 bg-[#F5F3F0] relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Titre de section avec micro-animation */}
          <div className="mb-16">
            <h2 className="text-5xl font-light text-exp-black leading-tight animate-fade-in-up">
              Des services personnalisés<br />à vos ambitions
            </h2>
          </div>

          {/* Layout avec numéros sticky à gauche */}
          <div className="flex gap-12">
            {/* Numéros sticky à gauche */}
            <div className="hidden lg:block w-20 flex-shrink-0">
              <div className="sticky top-32 space-y-6">
                <a href="#service-1" className="block text-2xl font-light text-gray-400 hover:text-exp-black transition-all duration-300 hover:scale-110 origin-left">
                  01
                </a>
                <a href="#service-2" className="block text-2xl font-light text-gray-400 hover:text-exp-black transition-all duration-300 hover:scale-110 origin-left">
                  02
                </a>
                <a href="#service-3" className="block text-2xl font-light text-gray-400 hover:text-exp-black transition-all duration-300 hover:scale-110 origin-left">
                  03
                </a>
                <a href="#service-4" className="block text-2xl font-light text-gray-400 hover:text-exp-black transition-all duration-300 hover:scale-110 origin-left">
                  04
                </a>
                <a href="#service-5" className="block text-2xl font-light text-gray-400 hover:text-exp-black transition-all duration-300 hover:scale-110 origin-left">
                  05
                </a>
              </div>
            </div>

            {/* Contenu scrollable à droite avec grid asymétrique */}
            <div className="flex-1 space-y-12">
              {/* Service 1 - Image de marque - LARGE */}
              <div id="service-1" className="scroll-mt-32 relative">
                {/* Chiffre géant en filigrane */}
                <div className="absolute -top-8 -left-8 text-[200px] font-thin text-exp-black/[0.03] pointer-events-none select-none leading-none">
                  01
                </div>
                
                <Link href="/services/image-de-marque">
                  <div className="group bg-white rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgb(0,0,0,0.08)] transition-all duration-700">
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
                      {/* Image - 3 colonnes */}
                      <div className="relative h-80 md:h-auto md:col-span-3 overflow-hidden">
                        <Image
                          src="/assets/photos/FREDERICXAnnieClaudePhotographie-22.jpg"
                          alt="Image de marque et marketing"
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        {/* Bordure dégradée */}
                        <div className="absolute inset-0 border-t-2 border-transparent bg-gradient-to-r from-exp-yellow/20 to-transparent"></div>
                      </div>
                      {/* Contenu - 2 colonnes */}
                      <div className="p-8 md:col-span-2 flex flex-col justify-center">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="text-sm font-light text-gray-400">01</span>
                          <h3 className="text-2xl font-light text-exp-black group-hover:text-exp-black/80 transition-colors duration-500">
                            Image de marque et marketing
                          </h3>
                        </div>
                        <p className="text-base text-gray-600 leading-relaxed mb-4 font-light">
                          Construire ou réinventer l'image de marque
                        </p>
                        <p className="text-sm text-gray-500 leading-relaxed mb-6 font-light">
                          Publicité et visibilité<br />
                          Faire briller votre offre avec des campagnes qui captivent
                        </p>
                        <button className="inline-flex items-center text-exp-black text-sm font-light border border-exp-black px-6 py-2 rounded-full hover:bg-exp-black hover:text-white transition-all duration-500 group-hover:border-exp-yellow group-hover:text-exp-yellow hover:!bg-exp-yellow hover:!text-exp-black">
                          Voir plus
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>

              {/* Service 2 - Stratégie - MEDIUM (grid normal) */}
              <div id="service-2" className="scroll-mt-32 relative">
                <div className="absolute -top-8 -left-8 text-[200px] font-thin text-exp-black/[0.03] pointer-events-none select-none leading-none">
                  02
                </div>
                
                <Link href="/services/strategie-cmo">
                  <div className="group bg-white rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgb(0,0,0,0.08)] transition-all duration-700">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                      <div className="relative h-80 md:h-auto overflow-hidden">
                        <Image
                          src="/assets/photos/FREDERICXAnnieClaudePhotographie-22.jpg"
                          alt="Accompagnement stratégique"
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                      <div className="p-8 flex flex-col justify-center">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="text-sm font-light text-gray-400">02</span>
                          <h3 className="text-2xl font-light text-exp-black">
                            Accompagnement stratégique global
                          </h3>
                        </div>
                        <p className="text-base text-gray-600 leading-relaxed mb-4 font-light">
                          Vision stratégique et exécution tactique
                        </p>
                        <p className="text-sm text-gray-500 leading-relaxed mb-6 font-light">
                          CMO on demand<br />
                          Propulser votre croissance avec expertise
                        </p>
                        <button className="inline-flex items-center text-exp-black text-sm font-light border border-exp-black px-6 py-2 rounded-full hover:bg-exp-black hover:text-white transition-all duration-500">
                          Voir plus
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>

              {/* Service 3 - Expérience - SMALL (image plus petite) */}
              <div id="service-3" className="scroll-mt-32 relative">
                <div className="absolute -top-8 -left-8 text-[200px] font-thin text-exp-black/[0.03] pointer-events-none select-none leading-none">
                  03
                </div>
                
                <Link href="/services/experience-client">
                  <div className="group bg-white rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgb(0,0,0,0.08)] transition-all duration-700">
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
                      {/* Image - 2 colonnes */}
                      <div className="relative h-80 md:h-auto md:col-span-2 overflow-hidden">
                        <Image
                          src="/assets/photos/FREDERICXAnnieClaudePhotographie-22.jpg"
                          alt="Expérience client"
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                      {/* Contenu - 3 colonnes */}
                      <div className="p-8 md:col-span-3 flex flex-col justify-center">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="text-sm font-light text-gray-400">03</span>
                          <h3 className="text-2xl font-light text-exp-black">
                            Expérience client et design
                          </h3>
                        </div>
                        <p className="text-base text-gray-600 leading-relaxed mb-4 font-light">
                          Créer des parcours mémorables
                        </p>
                        <p className="text-sm text-gray-500 leading-relaxed mb-6 font-light">
                          Design centré utilisateur<br />
                          Transformer chaque interaction en moment fort
                        </p>
                        <button className="inline-flex items-center text-exp-black text-sm font-light border border-exp-black px-6 py-2 rounded-full hover:bg-exp-black hover:text-white transition-all duration-500">
                          Voir plus
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>

              {/* Service 4 - Mesure - MEDIUM */}
              <div id="service-4" className="scroll-mt-32 relative">
                <div className="absolute -top-8 -left-8 text-[200px] font-thin text-exp-black/[0.03] pointer-events-none select-none leading-none">
                  04
                </div>
                
                <Link href="/services/mesure-performance">
                  <div className="group bg-white rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgb(0,0,0,0.08)] transition-all duration-700">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                      <div className="relative h-80 md:h-auto overflow-hidden">
                        <Image
                          src="/assets/photos/FREDERICXAnnieClaudePhotographie-22.jpg"
                          alt="Mesure de performance"
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                      <div className="p-8 flex flex-col justify-center">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="text-sm font-light text-gray-400">04</span>
                          <h3 className="text-2xl font-light text-exp-black">
                            Mesure de performance
                          </h3>
                        </div>
                        <p className="text-base text-gray-600 leading-relaxed mb-4 font-light">
                          Données et insights actionnables
                        </p>
                        <p className="text-sm text-gray-500 leading-relaxed mb-6 font-light">
                          Analytics et optimisation<br />
                          Prendre des décisions éclairées basées sur les données
                        </p>
                        <button className="inline-flex items-center text-exp-black text-sm font-light border border-exp-black px-6 py-2 rounded-full hover:bg-exp-black hover:text-white transition-all duration-500">
                          Voir plus
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>

              {/* Service 5 - Appels d'offres - LARGE */}
              <div id="service-5" className="scroll-mt-32 relative">
                <div className="absolute -top-8 -left-8 text-[200px] font-thin text-exp-black/[0.03] pointer-events-none select-none leading-none">
                  05
                </div>
                
                <Link href="/services/appels-offres">
                  <div className="group bg-white rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgb(0,0,0,0.08)] transition-all duration-700">
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
                      <div className="relative h-80 md:h-auto md:col-span-3 overflow-hidden">
                        <Image
                          src="/assets/photos/FREDERICXAnnieClaudePhotographie-22.jpg"
                          alt="Appels d'offres"
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                      <div className="p-8 md:col-span-2 flex flex-col justify-center">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="text-sm font-light text-gray-400">05</span>
                          <h3 className="text-2xl font-light text-exp-black">
                            Appels d'offres et soumissions
                          </h3>
                        </div>
                        <p className="text-base text-gray-600 leading-relaxed mb-4 font-light">
                          Gagner les contrats stratégiques
                        </p>
                        <p className="text-sm text-gray-500 leading-relaxed mb-6 font-light">
                          Rédaction et stratégie<br />
                          Maximiser vos chances de succès
                        </p>
                        <button className="inline-flex items-center text-exp-black text-sm font-light border border-exp-black px-6 py-2 rounded-full hover:bg-exp-black hover:text-white transition-all duration-500">
                          Voir plus
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Raison d'être - Fond noir avec glassmorphism */}
      <section className="py-40 px-6 bg-exp-black relative overflow-hidden">
        {/* Formes organiques en arrière-plan */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-exp-yellow/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-exp-yellow/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl font-thin text-white mb-12 leading-tight tracking-tight">
            Notre{' '}
            <span className="relative inline-block">
              <span className="relative z-10">raison</span>
              <span className="absolute inset-x-0 top-0 h-full bg-exp-yellow/40 -z-0"></span>
            </span>
            {' '}d'être
          </h2>
          <p className="text-2xl text-gray-300 font-light leading-relaxed">
            Nous croyons que chaque organisation a une histoire unique à raconter. 
            Notre mission est de vous aider à la révéler, à la partager et à la faire vivre 
            à travers des expériences qui marquent les esprits et transforment les intentions en actions.
          </p>
        </div>
      </section>

      {/* Section Photo avec texte superposé et parallax */}
      <section className="relative h-screen overflow-hidden">
        <div 
          className="absolute inset-0 transition-transform duration-100"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        >
          <Image
            src="/assets/photos/FREDERICXAnnieClaudePhotographie-22.jpg"
            alt="Les yeux, les oreilles grand ouverts"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-exp-black/40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6 backdrop-blur-sm bg-white/5 p-12 rounded-3xl border border-white/10">
            <h2 className="text-6xl font-thin text-white mb-6 leading-tight tracking-tight">
              Les yeux, les oreilles{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-white">grand ouverts</span>
                <span className="absolute inset-x-0 top-0 h-full bg-exp-yellow/40 -z-0"></span>
              </span>
            </h2>
            <p className="text-xl text-white/90 font-light max-w-2xl mx-auto">
              Nous écoutons, observons et comprenons avant d'agir. 
              C'est dans cette attention que naissent les meilleures solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Section Témoignages avec séparateur élégant */}
      <section className="py-40 px-6 bg-white relative">
        {/* Séparateur élégant en haut */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-exp-yellow to-transparent"></div>
        
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-thin text-exp-black mb-20 text-center leading-tight tracking-tight">
            Ce qu'ils disent de nous
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Témoignage 1 avec ombre douce */}
            <div className="space-y-6 p-8 rounded-2xl bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgb(0,0,0,0.08)] transition-all duration-700">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-exp-teal flex items-center justify-center text-white text-2xl font-light shadow-lg">
                  M
                </div>
                <div>
                  <div className="font-medium text-exp-black">Marie Tremblay</div>
                  <div className="text-sm text-gray-500 font-light">Directrice Marketing, TechCorp</div>
                </div>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed font-light italic">
                "Expérience Collective a transformé notre approche marketing. 
                Leur capacité à comprendre nos enjeux et à proposer des solutions innovantes 
                a dépassé toutes nos attentes."
              </p>
            </div>

            {/* Témoignage 2 */}
            <div className="space-y-6 p-8 rounded-2xl bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgb(0,0,0,0.08)] transition-all duration-700">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-exp-green flex items-center justify-center text-white text-2xl font-light shadow-lg">
                  J
                </div>
                <div>
                  <div className="font-medium text-exp-black">Jean Dubois</div>
                  <div className="text-sm text-gray-500 font-light">PDG, Innovation Plus</div>
                </div>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed font-light italic">
                "Une équipe à l'écoute, créative et stratégique. 
                Ils ont su donner vie à notre vision et créer une identité de marque 
                qui nous ressemble vraiment."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final avec bordure dégradée */}
      <section className="py-32 px-6 bg-exp-black relative overflow-hidden">
        {/* Bordure dégradée en haut */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-exp-yellow to-transparent"></div>
        
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-thin text-white mb-8 leading-tight tracking-tight">
            Prêt à transformer votre{' '}
            <span className="relative inline-block">
              <span className="relative z-10">vision</span>
              <span className="absolute inset-x-0 top-0 h-full bg-exp-yellow/40 -z-0"></span>
            </span>
            {' '}en réalité ?
          </h2>
          <p className="text-xl text-gray-300 font-light mb-12">
            Discutons de vos ambitions et découvrons ensemble comment nous pouvons vous aider.
          </p>
          <Link href="/contact">
            <button className="bg-exp-yellow text-exp-black px-10 py-4 rounded-full text-lg font-medium hover:bg-white transition-all duration-500 transform hover:scale-105 shadow-[0_20px_60px_rgb(255,212,0,0.3)]">
              Contactez-nous
            </button>
          </Link>
        </div>
      </section>

      {/* CSS pour les animations personnalisées */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}
