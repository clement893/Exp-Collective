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
      
      {/* Hero Section - Noir avec forme organique jaune subtile */}
      <section className="relative min-h-screen flex items-center justify-center bg-exp-black overflow-hidden">
        {/* Forme organique jaune en arrière-plan - comme de l'encre qui se dilue */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-30">
          <Image
            src="/assets/e infusion/e infusion V3 copie.png"
            alt=""
            fill
            className="object-contain animate-float-slow"
            priority
          />
        </div>

        {/* Badges flottants - détails créatifs */}
        <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-exp-teal rounded-full flex items-center justify-center animate-float shadow-lg">
          <span className="text-white font-medium text-xl">F</span>
        </div>
        <div className="absolute top-1/3 right-1/5 w-14 h-14 bg-exp-yellow rounded-full flex items-center justify-center animate-float-delay shadow-lg">
          <span className="text-exp-black font-medium text-lg">C</span>
        </div>
        <div className="absolute bottom-1/3 left-1/4 w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center animate-float-slow shadow-lg">
          <span className="text-white font-medium">D</span>
        </div>

        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto py-32">
          <div className="mb-16 opacity-0 animate-fade-in">
            <h1 className="text-7xl font-thin text-white mb-6 leading-tight tracking-wide">
              experience collective
            </h1>
            <div className="inline-block relative">
              <p className="text-2xl text-gray-400 font-light tracking-wider">
                Comprendre pour{' '}
                <span className="relative inline-block">
                  <span className="relative z-10">oser</span>
                  <span className="absolute inset-x-0 bottom-0 h-3 bg-exp-yellow/40 -z-0"></span>
                </span>
                . Oser pour comprendre.
              </p>
            </div>
          </div>

          <div className="opacity-0 animate-fade-in-delay-600">
            <Link href="#services">
              <button className="text-white text-sm font-light tracking-wider hover:text-exp-yellow transition-colors duration-500 flex items-center gap-2 mx-auto group">
                <span>Découvrez plus</span>
                <svg className="w-4 h-4 transform group-hover:translate-y-1 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Section Services - Fond blanc avec numérotation élégante */}
      <section id="services" className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24">
            {/* Badge flottant */}
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-exp-teal rounded-full flex items-center justify-center">
                <span className="text-white font-medium text-sm">F</span>
              </div>
              <div className="w-10 h-10 bg-exp-yellow rounded-full flex items-center justify-center">
                <span className="text-exp-black font-medium text-sm">C</span>
              </div>
            </div>

            <h2 className="text-5xl font-thin text-exp-black mb-6 leading-tight">
              Services personnalisés
              <br />
              à vos ambitions
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Numérotation à gauche */}
            <div className="lg:col-span-2 space-y-8 text-gray-400 font-light text-sm">
              <div className="hover:text-exp-yellow transition-colors duration-300 cursor-pointer">01</div>
              <div className="hover:text-exp-yellow transition-colors duration-300 cursor-pointer">02</div>
              <div className="hover:text-exp-yellow transition-colors duration-300 cursor-pointer">03</div>
              <div className="hover:text-exp-yellow transition-colors duration-300 cursor-pointer">04</div>
              <div className="hover:text-exp-yellow transition-colors duration-300 cursor-pointer">05</div>
            </div>

            {/* Contenu services */}
            <div className="lg:col-span-10 space-y-16">
              {/* Service 1 */}
              <Link href="/services/image-de-marque">
                <div className="group cursor-pointer">
                  <div className="flex items-start gap-8">
                    <div className="relative w-64 h-64 flex-shrink-0 rounded-2xl overflow-hidden bg-exp-black">
                      <Image
                        src="/assets/e infusion/e infusion V2 copie.png"
                        alt=""
                        fill
                        className="object-contain opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                      />
                      {/* Badge sur l'image */}
                      <div className="absolute top-4 right-4 flex gap-2">
                        <div className="w-10 h-10 bg-exp-teal rounded-full flex items-center justify-center shadow-lg">
                          <span className="text-white font-medium text-sm">C</span>
                        </div>
                        <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center shadow-lg">
                          <span className="text-white font-medium text-sm">M</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <svg className="w-6 h-6 text-exp-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                        </svg>
                        <h3 className="text-2xl font-light text-exp-black group-hover:text-exp-teal transition-colors duration-500">
                          Image de marque et marketing
                        </h3>
                      </div>
                      <p className="text-base text-gray-600 leading-relaxed font-light mb-6">
                        Construire ou réinventer l'image de marque
                      </p>
                      <div className="space-y-2 text-sm text-gray-500 font-light">
                        <p>• Publicité et visibilité</p>
                        <p>• Lorem ipsum dolor sit amet consectetur. Praesent nullis turtor ewemod ornare et imperdiet in risus.</p>
                      </div>
                      <div className="mt-6 inline-flex items-center text-exp-teal text-sm font-light group-hover:gap-3 gap-2 transition-all duration-500">
                        <span>Voir plus</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Service 2 */}
              <Link href="/services/strategie-cmo">
                <div className="group cursor-pointer">
                  <div className="flex items-start gap-8">
                    <div className="relative w-64 h-64 flex-shrink-0 rounded-2xl overflow-hidden bg-exp-black">
                      <Image
                        src="/assets/e infusion/e infusion V1 copie.png"
                        alt=""
                        fill
                        className="object-contain opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <svg className="w-6 h-6 text-exp-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                        <h3 className="text-2xl font-light text-exp-black group-hover:text-exp-teal transition-colors duration-500">
                          Accompagnement stratégique global et CMO on demand
                        </h3>
                      </div>
                      <p className="text-base text-gray-600 leading-relaxed font-light mb-6">
                        Vision stratégique et exécution tactique
                      </p>
                      <div className="mt-6 inline-flex items-center text-exp-teal text-sm font-light group-hover:gap-3 gap-2 transition-all duration-500">
                        <span>Voir plus</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Service 3 */}
              <Link href="/services/experience-client">
                <div className="group cursor-pointer">
                  <div className="flex items-start gap-8">
                    <div className="relative w-64 h-64 flex-shrink-0 rounded-2xl overflow-hidden bg-exp-black">
                      <Image
                        src="/assets/Globe infusion/globe infusion V1 copie.png"
                        alt=""
                        fill
                        className="object-contain opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <svg className="w-6 h-6 text-exp-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <h3 className="text-2xl font-light text-exp-black group-hover:text-exp-teal transition-colors duration-500">
                          Expérience client et transformation digitale
                        </h3>
                      </div>
                      <p className="text-base text-gray-600 leading-relaxed font-light mb-6">
                        Optimiser chaque point de contact
                      </p>
                      <div className="mt-6 inline-flex items-center text-exp-teal text-sm font-light group-hover:gap-3 gap-2 transition-all duration-500">
                        <span>Voir plus</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Service 4 */}
              <Link href="/services/mesure-performance">
                <div className="group cursor-pointer">
                  <div className="flex items-start gap-8">
                    <div className="relative w-64 h-64 flex-shrink-0 rounded-2xl overflow-hidden bg-exp-black">
                      <Image
                        src="/assets/e infusion/e infusion V3 copie.png"
                        alt=""
                        fill
                        className="object-contain opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <svg className="w-6 h-6 text-exp-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                        <h3 className="text-2xl font-light text-exp-black group-hover:text-exp-teal transition-colors duration-500">
                          Mesure de performance et outils d'analyse
                        </h3>
                      </div>
                      <p className="text-base text-gray-600 leading-relaxed font-light mb-6">
                        Données en temps réel pour décisions éclairées
                      </p>
                      <div className="mt-6 inline-flex items-center text-exp-teal text-sm font-light group-hover:gap-3 gap-2 transition-all duration-500">
                        <span>Voir plus</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Service 5 */}
              <Link href="/services/appels-offres">
                <div className="group cursor-pointer">
                  <div className="flex items-start gap-8">
                    <div className="relative w-64 h-64 flex-shrink-0 rounded-2xl overflow-hidden bg-exp-black">
                      <Image
                        src="/assets/e infusion/e infusion V2 copie.png"
                        alt=""
                        fill
                        className="object-contain opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <svg className="w-6 h-6 text-exp-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                        <h3 className="text-2xl font-light text-exp-black group-hover:text-exp-teal transition-colors duration-500">
                          Accompagnement pour la gestion des appels d'offres
                        </h3>
                      </div>
                      <p className="text-base text-gray-600 leading-relaxed font-light mb-6">
                        Maximiser vos chances de succès
                      </p>
                      <div className="mt-6 inline-flex items-center text-exp-teal text-sm font-light group-hover:gap-3 gap-2 transition-all duration-500">
                        <span>Voir plus</span>
                        <svg className="w-4 h-6 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section Raison d'Être - Fond noir avec surlignage subtil */}
      <section className="py-32 px-6 bg-exp-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-thin text-white mb-16 leading-tight">
            Notre{' '}
            <span className="relative inline-block">
              <span className="relative z-10">raison</span>
              <span className="absolute inset-x-0 bottom-0 h-3 bg-exp-yellow/40 -z-0"></span>
            </span>
            {' '}d'être
          </h2>

          <p className="text-lg text-gray-300 leading-loose font-light mb-16 max-w-4xl">
            "Chez Expérience Collective, nous accompagnons nos partenaires à chaque étape de leur croissance et projets, en élaborant des stratégies sur mesure qui allient innovation, efficacité et créativité. Grâce à notre expertise en marketing stratégique et des outils de performance accélérés par l'IA, nous aidons nos clients à atteindre leurs objectifs, tout en créant une véritable valeur ajoutée sur le long terme."
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800 hover:border-exp-yellow/30 transition-all duration-500">
              <div className="text-exp-yellow text-sm font-light mb-4 tracking-wider">Valeur</div>
              <p className="text-gray-400 text-sm leading-relaxed font-light">
                Lorem ipsum dolor sit amet consectetur. In integer consequat. Ut ultrices tempus at lorem. Phasellus lectus ut vitae nec velit molestie blandit.
              </p>
            </Card>

            <Card className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800 hover:border-exp-yellow/30 transition-all duration-500">
              <div className="text-exp-yellow text-sm font-light mb-4 tracking-wider">Valeur</div>
              <p className="text-gray-400 text-sm leading-relaxed font-light">
                Lorem ipsum dolor sit amet consectetur. In integer consequat. Ut ultrices tempus at lorem. Phasellus lectus ut vitae nec velit molestie blandit.
              </p>
            </Card>

            <Card className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800 hover:border-exp-yellow/30 transition-all duration-500">
              <div className="text-exp-yellow text-sm font-light mb-4 tracking-wider">Valeur</div>
              <p className="text-gray-400 text-sm leading-relaxed font-light">
                Lorem ipsum dolor sit amet consectetur. In integer consequat. Ut ultrices tempus at lorem. Phasellus lectus ut vitae nec velit molestie blandit.
              </p>
            </Card>
          </div>

          {/* Badge flottant */}
          <div className="mt-16 flex justify-end">
            <div className="w-16 h-16 bg-exp-teal rounded-full flex items-center justify-center shadow-lg animate-float">
              <span className="text-white font-medium text-xl">C</span>
            </div>
            <div className="w-14 h-14 bg-pink-500 rounded-full flex items-center justify-center shadow-lg animate-float-delay -ml-4">
              <span className="text-white font-medium">M</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section Témoignages - Fond noir */}
      <section className="py-32 px-6 bg-exp-black border-t border-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-4xl font-thin text-white">
              Nos{' '}
              <span className="relative inline-block">
                <span className="relative z-10">témoignages</span>
                <span className="absolute inset-x-0 bottom-0 h-3 bg-exp-yellow/40 -z-0"></span>
              </span>
            </h2>
            <div className="flex gap-4 ml-auto">
              <Link href="/realisations">
                <Button variant="secondary" size="sm" className="text-white border-white hover:border-exp-yellow hover:text-exp-yellow transition-all duration-500 rounded-full px-6 text-sm font-light">
                  Nos réalisations
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="secondary" size="sm" className="text-white border-white hover:border-exp-yellow hover:text-exp-yellow transition-all duration-500 rounded-full px-6 text-sm font-light">
                  Nous joindre
                </Button>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gray-900/30 p-8 rounded-2xl border border-gray-800">
              <p className="text-gray-400 text-sm leading-relaxed font-light mb-6">
                "Lorem ipsum dolor sit amet consectetur. Consectetur quam in vitae dui mollis faucibus tellus. Neque tellus nisl purus commodo."
              </p>
              <p className="text-gray-500 text-xs font-light">- Lorem Ipsum</p>
            </Card>

            <Card className="bg-gray-900/30 p-8 rounded-2xl border border-gray-800">
              <p className="text-gray-400 text-sm leading-relaxed font-light mb-6">
                "Lorem ipsum dolor sit amet consectetur. Consectetur quam in vitae dui mollis faucibus tellus. Neque tellus nisl purus commodo."
              </p>
              <p className="text-gray-500 text-xs font-light">- Lorem Ipsum</p>
            </Card>

            <Card className="bg-gray-900/30 p-8 rounded-2xl border border-gray-800">
              <p className="text-gray-400 text-sm leading-relaxed font-light mb-6">
                "Lorem ipsum dolor sit amet consectetur. Consectetur quam in vitae dui mollis faucibus tellus. Neque tellus nisl purus commodo."
              </p>
              <p className="text-gray-500 text-xs font-light">- Lorem Ipsum</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Section CTA Final - Blanc avec photo et formulaire */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Photo */}
            <div className="relative h-[600px] rounded-3xl overflow-hidden">
              <Image
                src="/images/founder.jpg"
                alt="Fondateur"
                fill
                className="object-cover"
              />
            </div>

            {/* Formulaire */}
            <div>
              <h2 className="text-5xl font-thin text-exp-black mb-8 leading-tight">
                Faites le premier pas
                <br />
                vers vos{' '}
                <span className="relative inline-block">
                  <span className="relative z-10">objectifs</span>
                  <span className="absolute inset-x-0 bottom-0 h-4 bg-exp-yellow/40 -z-0"></span>
                </span>
              </h2>
              <p className="text-base text-gray-600 leading-relaxed font-light mb-12">
                Prenez contact avec notre équipe dès aujourd'hui pour donner vie à vos projets
              </p>

              {/* Badge flottant */}
              <div className="flex gap-3 mb-8">
                <div className="w-12 h-12 bg-exp-teal rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-medium">C</span>
                </div>
                <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-medium">M</span>
                </div>
                <div className="w-12 h-12 bg-exp-yellow rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-exp-black font-medium">D</span>
                </div>
              </div>

              <div className="bg-exp-yellow/10 p-8 rounded-2xl border border-exp-yellow/20">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-exp-black text-sm font-light">Contactez-nous</span>
                  <svg className="w-4 h-4 text-exp-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                  </svg>
                </div>

                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Nom"
                      className="px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm font-light focus:outline-none focus:border-exp-yellow transition-colors duration-300"
                    />
                    <input
                      type="text"
                      placeholder="Prénom"
                      className="px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm font-light focus:outline-none focus:border-exp-yellow transition-colors duration-300"
                    />
                  </div>
                  <input
                    type="email"
                    placeholder="Courriel"
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm font-light focus:outline-none focus:border-exp-yellow transition-colors duration-300"
                  />
                  <input
                    type="text"
                    placeholder="Titre"
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm font-light focus:outline-none focus:border-exp-yellow transition-colors duration-300"
                  />
                  <textarea
                    placeholder="Message"
                    rows={4}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm font-light focus:outline-none focus:border-exp-yellow transition-colors duration-300 resize-none"
                  />
                  <Button
                    variant="primary"
                    size="lg"
                    className="w-full bg-exp-yellow hover:bg-exp-black text-exp-black hover:text-white py-4 rounded-lg text-sm font-medium transition-all duration-500"
                  >
                    Envoyer
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Text - Noir */}
      <section className="py-24 px-6 bg-exp-black">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <div className="text-exp-yellow text-9xl font-thin mb-8 leading-none">
              experience
              <br />
              collective
            </div>
          </div>
          <p className="text-gray-400 text-base leading-relaxed font-light">
            Discutons ensemble d'une stratégie à la hauteur de vos ambitions
          </p>
          <Link href="/contact">
            <Button
              variant="secondary"
              size="sm"
              className="mt-8 text-exp-yellow border-exp-yellow hover:bg-exp-yellow hover:text-exp-black transition-all duration-500 rounded-full px-8 text-sm font-light"
            >
              Contactez-nous
            </Button>
          </Link>
        </div>
      </section>

    </div>
  );
}
