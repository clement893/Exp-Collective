import { Metadata } from 'next';
import { Link } from '@/i18n/routing';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Expérience Collective - L\'encre jaune qui se dilue',
  description: 'Comprendre pour oser. Oser pour comprendre.',
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section - Noir avec forme organique jaune animée */}
      <section className="relative min-h-screen flex items-center justify-center bg-exp-black overflow-hidden">
        {/* Forme organique jaune en arrière-plan - fumée animée */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] opacity-50">
          <Image
            src="/assets/e infusion/e infusion V3 copie.png"
            alt=""
            fill
            className="object-contain animate-smoke-flow"
            priority
          />
        </div>

        {/* Deuxième couche de fumée pour plus de profondeur */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] opacity-30">
          <Image
            src="/assets/e infusion/e infusion V2 copie.png"
            alt=""
            fill
            className="object-contain animate-smoke-flow-delay"
            priority
          />
        </div>

        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto py-32">
          <div className="mb-20">
            <h1 className="text-8xl font-thin text-white mb-8 leading-[1.1] tracking-tight">
              expérience collective
            </h1>
            <div className="inline-block relative">
              <p className="text-3xl text-gray-400 font-light tracking-wide">
                Comprendre pour{' '}
                <span className="relative inline-block">
                  <span className="relative z-10">oser</span>
                  <span className="absolute inset-x-0 top-0 h-full bg-exp-yellow/40 -z-0"></span>
                </span>
                . Oser pour comprendre.
              </p>
            </div>
          </div>

          <div className="mt-24">
            <a href="#services">
              <button className="text-white text-sm font-light tracking-widest uppercase hover:text-exp-yellow transition-colors duration-700 flex items-center gap-3 mx-auto group">
                <span>Découvrir</span>
                <svg className="w-5 h-5 transform group-hover:translate-y-1 transition-transform duration-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Section Services - Fond blanc avec navigation dynamique */}
      <section id="services" className="py-40 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-32 text-center">
            <h2 className="text-6xl font-thin text-exp-black mb-6 leading-tight tracking-tight">
              Services
            </h2>
            <p className="text-xl text-gray-500 font-light max-w-2xl mx-auto">
              Des solutions sur mesure pour transformer votre vision en{' '}
            <span className="relative inline-block">
              <span className="relative z-10">impact</span>
              <span className="absolute inset-x-0 top-0 h-full bg-exp-yellow/40 -z-0"></span>
            </span>
            </p>
          </div>

          <div className="relative">
            {/* Navigation sticky avec chiffres */}
            <div className="sticky top-32 float-left mr-16 hidden lg:block">
              <div className="space-y-8">
                <a href="#service-1" className="block text-gray-400 hover:text-exp-yellow transition-colors duration-500 text-sm font-light tracking-wider">
                  01
                </a>
                <a href="#service-2" className="block text-gray-400 hover:text-exp-yellow transition-colors duration-500 text-sm font-light tracking-wider">
                  02
                </a>
                <a href="#service-3" className="block text-gray-400 hover:text-exp-yellow transition-colors duration-500 text-sm font-light tracking-wider">
                  03
                </a>
                <a href="#service-4" className="block text-gray-400 hover:text-exp-yellow transition-colors duration-500 text-sm font-light tracking-wider">
                  04
                </a>
                <a href="#service-5" className="block text-gray-400 hover:text-exp-yellow transition-colors duration-500 text-sm font-light tracking-wider">
                  05
                </a>
              </div>
            </div>

            <div className="space-y-32 lg:ml-24">
              {/* Service 1 - Image de marque */}
              <div id="service-1" className="scroll-mt-32">
                <Link href="/services/image-de-marque">
                  <div className="group cursor-pointer">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                      <div className="relative h-[500px] rounded-3xl overflow-hidden bg-gradient-to-br from-exp-black to-gray-900">
                        {/* Lettre en fumée */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Image
                            src="/assets/e infusion/e infusion V2 copie.png"
                            alt=""
                            fill
                            className="object-contain opacity-40 group-hover:opacity-60 animate-smoke-flow transition-opacity duration-1000"
                          />
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-[200px] font-thin text-white/20 group-hover:text-white/30 transition-colors duration-1000">I</span>
                        </div>
                      </div>
                      <div className="space-y-6">
                        <div className="text-exp-teal text-sm font-light tracking-widest uppercase">01 — Image</div>
                        <h3 className="text-4xl font-light text-exp-black group-hover:text-exp-teal transition-colors duration-700 leading-tight">
                          Image de marque et marketing
                        </h3>
                        <p className="text-lg text-gray-600 leading-relaxed font-light">
                          Construire ou réinventer l'image de marque pour créer une identité forte et cohérente qui résonne avec votre audience.
                        </p>
                        <div className="pt-4 inline-flex items-center text-exp-teal text-sm font-light tracking-wider uppercase group-hover:gap-4 gap-2 transition-all duration-700">
                          <span>Explorer</span>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>

              {/* Service 2 - Stratégie */}
              <div id="service-2" className="scroll-mt-32">
                <Link href="/services/strategie-cmo">
                  <div className="group cursor-pointer">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                      <div className="lg:order-2 relative h-[500px] rounded-3xl overflow-hidden bg-gradient-to-br from-exp-black to-gray-900">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Image
                            src="/assets/e infusion/e infusion V1 copie.png"
                            alt=""
                            fill
                            className="object-contain opacity-40 group-hover:opacity-60 animate-smoke-flow-delay transition-opacity duration-1000"
                          />
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-[200px] font-thin text-white/20 group-hover:text-white/30 transition-colors duration-1000">S</span>
                        </div>
                      </div>
                      <div className="lg:order-1 space-y-6">
                        <div className="text-exp-teal text-sm font-light tracking-widest uppercase">02 — Stratégie</div>
                        <h3 className="text-4xl font-light text-exp-black group-hover:text-exp-teal transition-colors duration-700 leading-tight">
                          Accompagnement stratégique global
                        </h3>
                        <p className="text-lg text-gray-600 leading-relaxed font-light">
                          Vision stratégique et exécution tactique pour propulser votre croissance avec un CMO on demand.
                        </p>
                        <div className="pt-4 inline-flex items-center text-exp-teal text-sm font-light tracking-wider uppercase group-hover:gap-4 gap-2 transition-all duration-700">
                          <span>Explorer</span>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>

              {/* Service 3 - Expérience */}
              <div id="service-3" className="scroll-mt-32">
                <Link href="/services/experience-client">
                  <div className="group cursor-pointer">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                      <div className="relative h-[500px] rounded-3xl overflow-hidden bg-gradient-to-br from-exp-black to-gray-900">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Image
                            src="/assets/e infusion/e infusion V3 copie.png"
                            alt=""
                            fill
                            className="object-contain opacity-40 group-hover:opacity-60 animate-smoke-flow transition-opacity duration-1000"
                          />
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-[200px] font-thin text-white/20 group-hover:text-white/30 transition-colors duration-1000">E</span>
                        </div>
                      </div>
                      <div className="space-y-6">
                        <div className="text-exp-teal text-sm font-light tracking-widest uppercase">03 — Expérience</div>
                        <h3 className="text-4xl font-light text-exp-black group-hover:text-exp-teal transition-colors duration-700 leading-tight">
                          Expérience client et transformation digitale
                        </h3>
                        <p className="text-lg text-gray-600 leading-relaxed font-light">
                          Optimiser chaque point de contact pour créer des expériences mémorables et engageantes.
                        </p>
                        <div className="pt-4 inline-flex items-center text-exp-teal text-sm font-light tracking-wider uppercase group-hover:gap-4 gap-2 transition-all duration-700">
                          <span>Explorer</span>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>

              {/* Service 4 - Mesure */}
              <div id="service-4" className="scroll-mt-32">
                <Link href="/services/mesure-performance">
                  <div className="group cursor-pointer">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                      <div className="lg:order-2 relative h-[500px] rounded-3xl overflow-hidden bg-gradient-to-br from-exp-black to-gray-900">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Image
                            src="/assets/e infusion/e infusion V2 copie.png"
                            alt=""
                            fill
                            className="object-contain opacity-40 group-hover:opacity-60 animate-smoke-flow-delay transition-opacity duration-1000"
                          />
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-[200px] font-thin text-white/20 group-hover:text-white/30 transition-colors duration-1000">M</span>
                        </div>
                      </div>
                      <div className="lg:order-1 space-y-6">
                        <div className="text-exp-teal text-sm font-light tracking-widest uppercase">04 — Mesure</div>
                        <h3 className="text-4xl font-light text-exp-black group-hover:text-exp-teal transition-colors duration-700 leading-tight">
                          Mesure de performance et analyse
                        </h3>
                        <p className="text-lg text-gray-600 leading-relaxed font-light">
                          Données en temps réel et insights actionnables pour des décisions stratégiques éclairées.
                        </p>
                        <div className="pt-4 inline-flex items-center text-exp-teal text-sm font-light tracking-wider uppercase group-hover:gap-4 gap-2 transition-all duration-700">
                          <span>Explorer</span>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>

              {/* Service 5 - Appels d'offres */}
              <div id="service-5" className="scroll-mt-32">
                <Link href="/services/appels-offres">
                  <div className="group cursor-pointer">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                      <div className="relative h-[500px] rounded-3xl overflow-hidden bg-gradient-to-br from-exp-black to-gray-900">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Image
                            src="/assets/e infusion/e infusion V1 copie.png"
                            alt=""
                            fill
                            className="object-contain opacity-40 group-hover:opacity-60 animate-smoke-flow transition-opacity duration-1000"
                          />
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-[200px] font-thin text-white/20 group-hover:text-white/30 transition-colors duration-1000">A</span>
                        </div>
                      </div>
                      <div className="space-y-6">
                        <div className="text-exp-teal text-sm font-light tracking-widest uppercase">05 — Appels d'offres</div>
                        <h3 className="text-4xl font-light text-exp-black group-hover:text-exp-teal transition-colors duration-700 leading-tight">
                          Gestion des appels d'offres
                        </h3>
                        <p className="text-lg text-gray-600 leading-relaxed font-light">
                          Accompagnement stratégique pour maximiser vos chances de succès et remporter les opportunités clés.
                        </p>
                        <div className="pt-4 inline-flex items-center text-exp-teal text-sm font-light tracking-wider uppercase group-hover:gap-4 gap-2 transition-all duration-700">
                          <span>Explorer</span>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Raison d'Être - Fond noir avec design élégant */}
      <section className="py-40 px-6 bg-exp-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-6xl font-thin text-white mb-20 leading-tight tracking-tight text-center">
            Notre{' '}
            <span className="relative inline-block">
              <span className="relative z-10">raison</span>
              <span className="absolute inset-x-0 top-0 h-full bg-exp-yellow/40 -z-0"></span>
            </span>
            {' '}d'être
          </h2>

          <p className="text-2xl text-gray-300 leading-loose font-light mb-24 text-center max-w-4xl mx-auto">
            Chez Expérience Collective, nous accompagnons nos partenaires à chaque étape de leur croissance, en élaborant des stratégies sur mesure qui allient innovation, efficacité et créativité.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <Card className="bg-transparent p-10 rounded-3xl border border-gray-800 hover:border-exp-yellow/50 transition-all duration-700 group">
              <div className="text-exp-yellow text-xs font-light mb-6 tracking-widest uppercase">Innovation</div>
              <p className="text-gray-400 text-base leading-relaxed font-light">
                Nous repoussons les limites du possible en intégrant les dernières technologies et approches créatives pour donner vie à vos projets.
              </p>
            </Card>

            <Card className="bg-transparent p-10 rounded-3xl border border-gray-800 hover:border-exp-yellow/50 transition-all duration-700 group">
              <div className="text-exp-yellow text-xs font-light mb-6 tracking-widest uppercase">Efficacité</div>
              <p className="text-gray-400 text-base leading-relaxed font-light">
                Chaque action est pensée pour maximiser l'impact et générer des résultats mesurables qui propulsent votre croissance.
              </p>
            </Card>

            <Card className="bg-transparent p-10 rounded-3xl border border-gray-800 hover:border-exp-yellow/50 transition-all duration-700 group">
              <div className="text-exp-yellow text-xs font-light mb-6 tracking-widest uppercase">Créativité</div>
              <p className="text-gray-400 text-base leading-relaxed font-light">
                Nous transformons les idées audacieuses en réalités tangibles grâce à une approche originale et sur mesure.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Section Image avec texte superposé - Inspiration brand guide */}
      <section className="relative h-[600px] overflow-hidden">
        <Image
          src="/assets/FREDERICXAnnieClaudePhotographie-22.jpg"
          alt="Les yeux, les oreilles grand ouverts"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-exp-black/40"></div>
        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <div className="text-center">
            <h2 className="text-6xl font-thin text-white leading-tight tracking-tight">
              Les yeux, les oreilles
              <br />
              <span className="relative inline-block mt-2">
                <span className="relative z-10">grand ouverts</span>
                <span className="absolute inset-x-0 top-0 h-full bg-exp-yellow/50 -z-0"></span>
              </span>
            </h2>
          </div>
        </div>
      </section>

      {/* Section Témoignages - Fond blanc */}
      <section className="py-40 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-20">
            <h2 className="text-5xl font-thin text-exp-black tracking-tight">
              Témoignages
            </h2>
            <div className="flex gap-4">
              <Link href="/realisations">
                <Button variant="secondary" size="sm" className="text-exp-black border-exp-black hover:bg-exp-black hover:text-white transition-all duration-500 rounded-full px-8 text-sm font-light tracking-wider uppercase">
                  Réalisations
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="primary" size="sm" className="bg-exp-yellow text-exp-black hover:bg-exp-black hover:text-white transition-all duration-500 rounded-full px-8 text-sm font-light tracking-wider uppercase border-0">
                  Contact
                </Button>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <Card className="bg-gray-50 p-10 rounded-3xl border-0 hover:shadow-xl transition-all duration-500">
              <p className="text-gray-700 text-base leading-relaxed font-light mb-8 italic">
                "Une approche stratégique qui a transformé notre vision en résultats concrets. L'équipe a su comprendre nos enjeux et proposer des solutions innovantes."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-exp-teal"></div>
                <div>
                  <p className="text-exp-black text-sm font-medium">Marie Dubois</p>
                  <p className="text-gray-500 text-xs font-light">Directrice Marketing</p>
                </div>
              </div>
            </Card>

            <Card className="bg-gray-50 p-10 rounded-3xl border-0 hover:shadow-xl transition-all duration-500">
              <p className="text-gray-700 text-base leading-relaxed font-light mb-8 italic">
                "Un accompagnement sur mesure qui a dépassé nos attentes. La créativité et l'expertise se sont parfaitement combinées pour créer un impact durable."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-exp-yellow"></div>
                <div>
                  <p className="text-exp-black text-sm font-medium">Jean Tremblay</p>
                  <p className="text-gray-500 text-xs font-light">PDG</p>
                </div>
              </div>
            </Card>

            <Card className="bg-gray-50 p-10 rounded-3xl border-0 hover:shadow-xl transition-all duration-500">
              <p className="text-gray-700 text-base leading-relaxed font-light mb-8 italic">
                "Une collaboration fluide et des résultats mesurables. L'équipe a su nous guider avec professionnalisme et créativité à chaque étape."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-pink-500"></div>
                <div>
                  <p className="text-exp-black text-sm font-medium">Sophie Martin</p>
                  <p className="text-gray-500 text-xs font-light">Directrice Générale</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Section CTA Final - Fond noir */}
      <section className="py-32 px-6 bg-exp-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-6xl font-thin text-white mb-8 leading-tight tracking-tight">
            Prêt à transformer
            <br />
            votre{' '}
            <span className="relative inline-block">
              <span className="relative z-10">vision</span>
              <span className="absolute inset-x-0 top-0 h-full bg-exp-yellow/40 -z-0"></span>
            </span>
            {' '}?
          </h2>
          <p className="text-xl text-gray-400 font-light mb-12 leading-relaxed">
            Discutons de vos ambitions et créons ensemble l'impact que vous méritez.
          </p>
          <Link href="/contact">
            <Button variant="primary" size="lg" className="bg-exp-yellow text-exp-black hover:bg-white transition-all duration-500 rounded-full px-12 py-4 text-base font-light tracking-wider uppercase border-0">
              Démarrons la conversation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
