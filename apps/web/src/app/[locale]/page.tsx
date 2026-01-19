import type { Metadata } from 'next';
import { Link } from '@/i18n/routing';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Expérience Collective - L\'encre jaune qui se dilue',
  description: 'Comprendre pour oser. Oser pour comprendre.',
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section - Grand 'e' jaune avec logo superposé */}
      <section className="relative min-h-screen flex items-center justify-center bg-exp-black overflow-hidden">
        {/* Grand 'e' jaune en arrière-plan */}
        <div className="absolute inset-0 flex items-center justify-center">
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

        {/* Contenu superposé */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Logo à gauche */}
            <div className="flex justify-center lg:justify-start">
              <div className="w-full max-w-2xl">
                <Image
                  src="/assets/Logo/Final/ExpC_Lc inv.png"
                  alt="Expérience Collective"
                  width={800}
                  height={300}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>

            {/* Tagline à droite */}
            <div className="text-left">
              <p className="text-3xl lg:text-4xl text-exp-yellow font-light leading-relaxed">
                Comprendre pour oser,
                <br />
                oser pour comprendre.
              </p>
            </div>
          </div>

          {/* Bouton découvrir en bas */}
          <div className="absolute bottom-16 left-1/2 -translate-x-1/2">
            <a href="#services">
              <button className="text-white text-sm font-light tracking-widest uppercase hover:text-exp-yellow transition-colors duration-700 flex items-center gap-3 group">
                <span>Découvrez plus</span>
                <svg className="w-5 h-5 transform group-hover:translate-y-1 transition-transform duration-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Section Services - Scroll fixe avec numéros à gauche */}
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
                <a href="#service-1" className="block text-2xl font-light text-gray-400 hover:text-exp-black transition-colors duration-300">
                  01
                </a>
                <a href="#service-2" className="block text-2xl font-light text-gray-400 hover:text-exp-black transition-colors duration-300">
                  02
                </a>
                <a href="#service-3" className="block text-2xl font-light text-gray-400 hover:text-exp-black transition-colors duration-300">
                  03
                </a>
                <a href="#service-4" className="block text-2xl font-light text-gray-400 hover:text-exp-black transition-colors duration-300">
                  04
                </a>
                <a href="#service-5" className="block text-2xl font-light text-gray-400 hover:text-exp-black transition-colors duration-300">
                  05
                </a>
              </div>
            </div>

            {/* Contenu scrollable à droite */}
            <div className="flex-1 space-y-12">
              {/* Service 1 - Image de marque */}
              <div id="service-1" className="scroll-mt-32">
                <Link href="/services/image-de-marque">
                  <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                      {/* Image */}
                      <div className="relative h-80 md:h-auto overflow-hidden">
                        <Image
                          src="/assets/photos/FREDERICXAnnieClaudePhotographie-22.jpg"
                          alt="Image de marque et marketing"
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                      {/* Contenu */}
                      <div className="p-8 flex flex-col justify-center">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="text-sm font-light text-gray-400">01</span>
                          <h3 className="text-2xl font-light text-exp-black">
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
                        <button className="inline-flex items-center text-exp-black text-sm font-light border border-exp-black px-6 py-2 rounded-full hover:bg-exp-black hover:text-white transition-all duration-300">
                          Voir plus
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>

              {/* Service 2 - Stratégie */}
              <div id="service-2" className="scroll-mt-32">
                <Link href="/services/strategie-cmo">
                  <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
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
                        <button className="inline-flex items-center text-exp-black text-sm font-light border border-exp-black px-6 py-2 rounded-full hover:bg-exp-black hover:text-white transition-all duration-300">
                          Voir plus
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>

              {/* Service 3 - Expérience */}
              <div id="service-3" className="scroll-mt-32">
                <Link href="/services/experience-client">
                  <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                      <div className="relative h-80 md:h-auto overflow-hidden">
                        <Image
                          src="/assets/photos/FREDERICXAnnieClaudePhotographie-22.jpg"
                          alt="Expérience client"
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                      <div className="p-8 flex flex-col justify-center">
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
                        <button className="inline-flex items-center text-exp-black text-sm font-light border border-exp-black px-6 py-2 rounded-full hover:bg-exp-black hover:text-white transition-all duration-300">
                          Voir plus
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>

              {/* Service 4 - Mesure */}
              <div id="service-4" className="scroll-mt-32">
                <Link href="/services/mesure-performance">
                  <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
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
                        <button className="inline-flex items-center text-exp-black text-sm font-light border border-exp-black px-6 py-2 rounded-full hover:bg-exp-black hover:text-white transition-all duration-300">
                          Voir plus
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>

              {/* Service 5 - Appels d'offres */}
              <div id="service-5" className="scroll-mt-32">
                <Link href="/services/appels-offres">
                  <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                      <div className="relative h-80 md:h-auto overflow-hidden">
                        <Image
                          src="/assets/photos/FREDERICXAnnieClaudePhotographie-22.jpg"
                          alt="Appels d'offres"
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                      <div className="p-8 flex flex-col justify-center">
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
                        <button className="inline-flex items-center text-exp-black text-sm font-light border border-exp-black px-6 py-2 rounded-full hover:bg-exp-black hover:text-white transition-all duration-300">
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

      {/* Section Raison d'être - Fond noir */}
      <section className="py-40 px-6 bg-exp-black">
        <div className="max-w-4xl mx-auto text-center">
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

      {/* Section Photo avec texte superposé */}
      <section className="relative h-screen">
        <Image
          src="/assets/photos/FREDERICXAnnieClaudePhotographie-22.jpg"
          alt="Les yeux, les oreilles grand ouverts"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-exp-black/40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6">
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

      {/* Section Témoignages */}
      <section className="py-40 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-thin text-exp-black mb-20 text-center leading-tight tracking-tight">
            Ce qu'ils disent de nous
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Témoignage 1 */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-exp-teal flex items-center justify-center text-white text-2xl font-light">
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
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-exp-green flex items-center justify-center text-white text-2xl font-light">
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

      {/* CTA Final */}
      <section className="py-32 px-6 bg-exp-black">
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
            <button className="bg-exp-yellow text-exp-black px-10 py-4 rounded-full text-lg font-medium hover:bg-white transition-all duration-300 transform hover:scale-105">
              Contactez-nous
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
