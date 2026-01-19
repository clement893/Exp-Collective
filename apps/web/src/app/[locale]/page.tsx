import { Metadata } from 'next';
import { Link } from '@/i18n/routing';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Expérience Collective - L\'encre jaune qui se dilue',
  description: 'Transformez votre marque en expérience mémorable. Stratégie, branding et communication qui marquent les esprits.',
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section - Noir avec message fort */}
      <section className="relative min-h-screen flex items-center justify-center bg-exp-black overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px]">
          <div className="absolute inset-0 bg-gradient-radial from-exp-yellow/15 via-exp-yellow/8 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
        </div>

        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-exp-yellow rounded-full blur-3xl opacity-10 animate-float"></div>
          <div className="absolute bottom-1/4 left-1/4 w-[450px] h-[450px] bg-exp-teal rounded-full blur-3xl opacity-10 animate-float-slow"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-exp-yellow rounded-full blur-3xl opacity-5 animate-ink-spread"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto py-32 animate-fade-in">
          <div className="mb-12 animate-fade-in-delay-200">
            <div className="inline-block bg-exp-yellow px-8 py-4 rounded-2xl">
              <span className="text-4xl font-medium text-exp-black">exp</span>
            </div>
          </div>
          
          <h1 className="text-7xl md:text-8xl font-light text-white mb-12 leading-tight animate-fade-in-delay-400">
            Votre marque mérite
            <br />
            <span className="relative inline-block">
              <span className="relative z-10 font-medium">plus qu'un logo</span>
              <span className="absolute inset-0 bg-exp-yellow -z-0 animate-highlight"></span>
            </span>
          </h1>
          
          <p className="text-3xl text-gray-300 font-thin mb-16 leading-relaxed max-w-4xl mx-auto animate-fade-in-delay-600">
            L'encre jaune qui se dilue
          </p>

          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center animate-fade-in-delay-800">
            <Link href="/contact">
              <Button
                variant="primary"
                size="lg"
                className="bg-exp-yellow hover:bg-white text-exp-black px-16 py-6 text-xl font-medium rounded-2xl transition-all duration-700 transform hover:scale-110 hover:shadow-2xl"
              >
                Créons ensemble →
              </Button>
            </Link>
            <Link href="/realisations">
              <Button
                variant="secondary"
                size="lg"
                className="bg-transparent hover:bg-exp-yellow/10 text-white px-16 py-6 text-xl font-light rounded-2xl border-2 border-white hover:border-exp-yellow transition-all duration-700 transform hover:scale-110"
              >
                Voir nos réalisations
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Section Photo avec Citation - Comme dans le guide de marque */}
      <section className="relative h-screen overflow-hidden">
        <Image
          src="/images/listening-close-up.jpg"
          alt="Les yeux, les oreilles grand ouverts"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-exp-black/80 via-exp-black/50 to-transparent"></div>
        <div className="relative z-10 h-full flex items-center px-6 max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <p className="text-7xl font-light text-white leading-tight mb-8">
              Les yeux, les oreilles
              <br />
              <span className="relative inline-block">
                <span className="relative z-10 font-medium">grand ouverts</span>
                <span className="absolute inset-0 bg-exp-yellow -z-0"></span>
              </span>
            </p>
            <p className="text-2xl text-gray-300 font-light leading-relaxed">
              Nous écoutons vraiment. Nous observons attentivement. Nous comprenons profondément. Parce que votre histoire mérite d'être racontée avec authenticité.
            </p>
          </div>
        </div>
      </section>

      {/* Section Manifesto - Fond Blanc */}
      <section className="py-48 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-32">
            <h2 className="text-6xl font-light text-exp-black mb-8 leading-tight">
              Nous ne créons pas des campagnes.
              <br />
              Nous créons des{' '}
              <span className="relative inline-block">
                <span className="relative z-10 font-medium">mouvements</span>
                <span className="absolute inset-0 bg-exp-yellow -z-0"></span>
              </span>
              .
            </h2>
            <p className="text-2xl text-gray-600 font-light max-w-4xl mx-auto leading-loose">
              Dans un monde saturé de messages, seules les marques qui osent être authentiques, qui comprennent vraiment leur audience, et qui communiquent avec impact laissent une trace indélébile.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="text-center">
              <div className="text-8xl font-thin text-exp-yellow mb-6">01</div>
              <h3 className="text-3xl font-medium text-exp-black mb-6">Écoute active</h3>
              <p className="text-lg text-gray-600 font-light leading-relaxed">
                Nous commençons par comprendre votre ADN, vos ambitions, et ce qui vous rend unique.
              </p>
            </div>

            <div className="text-center">
              <div className="text-8xl font-thin text-exp-yellow mb-6">02</div>
              <h3 className="text-3xl font-medium text-exp-black mb-6">Stratégie audacieuse</h3>
              <p className="text-lg text-gray-600 font-light leading-relaxed">
                Nous élaborons une stratégie qui ne suit pas les tendances, mais qui les crée.
              </p>
            </div>

            <div className="text-center">
              <div className="text-8xl font-thin text-exp-yellow mb-6">03</div>
              <h3 className="text-3xl font-medium text-exp-black mb-6">Exécution impeccable</h3>
              <p className="text-lg text-gray-600 font-light leading-relaxed">
                Nous transformons la stratégie en expériences mémorables qui marquent les esprits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Photo Équipe - Noir */}
      <section className="relative h-screen overflow-hidden bg-exp-black">
        <Image
          src="/images/team-brainstorming.jpg"
          alt="Notre équipe en action"
          fill
          className="object-cover opacity-40"
        />
        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <div className="text-center max-w-5xl">
            <p className="text-7xl font-light text-white leading-tight mb-12">
              Instinct.{' '}
              <span className="relative inline-block">
                <span className="relative z-10 font-medium">Expérience</span>
                <span className="absolute inset-0 bg-exp-yellow -z-0"></span>
              </span>
              . Résultats.
            </p>
            <p className="text-2xl text-gray-300 font-light leading-relaxed mb-16">
              Plus de 15 ans à transformer des marques en expériences inoubliables. Plus de 200 projets qui ont marqué leur industrie. Une seule obsession : votre succès.
            </p>
            <Link href="/a-propos">
              <Button
                variant="primary"
                size="lg"
                className="bg-exp-yellow hover:bg-white text-exp-black px-16 py-6 text-xl font-medium rounded-2xl transition-all duration-700 transform hover:scale-110 hover:shadow-2xl"
              >
                Découvrez notre histoire →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Section Services - Approche Storytelling */}
      <section className="py-48 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-32">
            <h2 className="text-6xl font-light text-exp-black mb-8 leading-tight">
              Comment nous{' '}
              <span className="relative inline-block">
                <span className="relative z-10 font-medium">transformons</span>
                <span className="absolute inset-0 bg-exp-yellow -z-0"></span>
              </span>
              {' '}votre marque
            </h2>
            <p className="text-2xl text-gray-600 font-light max-w-4xl mx-auto leading-loose">
              Cinq domaines d'expertise. Une approche intégrée. Des résultats mesurables.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            {/* Service 1 */}
            <Link href="/services/strategie-cmo">
              <Card className="group bg-gray-50 p-16 rounded-3xl hover:bg-exp-black transition-all duration-700 border border-gray-200 hover:border-exp-yellow hover:-translate-y-3 hover:shadow-2xl cursor-pointer h-full">
                <div className="flex items-start gap-8">
                  <div className="w-24 h-24 bg-exp-yellow/20 group-hover:bg-exp-yellow rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-700 transform group-hover:rotate-12">
                    <svg className="w-12 h-12 text-exp-teal group-hover:text-exp-black transition-colors duration-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-medium text-exp-black group-hover:text-white mb-6 transition-colors duration-700">
                      Stratégie & CMO
                    </h3>
                    <p className="text-lg text-gray-600 group-hover:text-gray-300 leading-relaxed font-light transition-colors duration-700">
                      Votre vision. Notre expertise stratégique. Un CMO on-demand qui propulse votre croissance.
                    </p>
                    <div className="mt-8 flex items-center text-exp-teal group-hover:text-exp-yellow transition-colors duration-700">
                      <span className="font-medium">Découvrir</span>
                      <svg className="w-6 h-6 ml-2 transform group-hover:translate-x-2 transition-transform duration-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>

            {/* Service 2 */}
            <Link href="/services/image-de-marque">
              <Card className="group bg-gray-50 p-16 rounded-3xl hover:bg-exp-black transition-all duration-700 border border-gray-200 hover:border-exp-yellow hover:-translate-y-3 hover:shadow-2xl cursor-pointer h-full">
                <div className="flex items-start gap-8">
                  <div className="w-24 h-24 bg-exp-yellow/20 group-hover:bg-exp-yellow rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-700 transform group-hover:rotate-12">
                    <svg className="w-12 h-12 text-exp-teal group-hover:text-exp-black transition-colors duration-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-medium text-exp-black group-hover:text-white mb-6 transition-colors duration-700">
                      Image de Marque
                    </h3>
                    <p className="text-lg text-gray-600 group-hover:text-gray-300 leading-relaxed font-light transition-colors duration-700">
                      Une identité qui ne se contente pas d'exister. Elle marque les esprits et crée des connexions émotionnelles.
                    </p>
                    <div className="mt-8 flex items-center text-exp-teal group-hover:text-exp-yellow transition-colors duration-700">
                      <span className="font-medium">Découvrir</span>
                      <svg className="w-6 h-6 ml-2 transform group-hover:translate-x-2 transition-transform duration-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>

            {/* Service 3 */}
            <Link href="/services/experience-client">
              <Card className="group bg-gray-50 p-16 rounded-3xl hover:bg-exp-black transition-all duration-700 border border-gray-200 hover:border-exp-yellow hover:-translate-y-3 hover:shadow-2xl cursor-pointer h-full">
                <div className="flex items-start gap-8">
                  <div className="w-24 h-24 bg-exp-yellow/20 group-hover:bg-exp-yellow rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-700 transform group-hover:rotate-12">
                    <svg className="w-12 h-12 text-exp-teal group-hover:text-exp-black transition-colors duration-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-medium text-exp-black group-hover:text-white mb-6 transition-colors duration-700">
                      Expérience Client
                    </h3>
                    <p className="text-lg text-gray-600 group-hover:text-gray-300 leading-relaxed font-light transition-colors duration-700">
                      Chaque point de contact devient une opportunité de créer de la valeur et de renforcer la relation.
                    </p>
                    <div className="mt-8 flex items-center text-exp-teal group-hover:text-exp-yellow transition-colors duration-700">
                      <span className="font-medium">Découvrir</span>
                      <svg className="w-6 h-6 ml-2 transform group-hover:translate-x-2 transition-transform duration-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>

            {/* Service 4 */}
            <Link href="/services/mesure-performance">
              <Card className="group bg-gray-50 p-16 rounded-3xl hover:bg-exp-black transition-all duration-700 border border-gray-200 hover:border-exp-yellow hover:-translate-y-3 hover:shadow-2xl cursor-pointer h-full">
                <div className="flex items-start gap-8">
                  <div className="w-24 h-24 bg-exp-yellow/20 group-hover:bg-exp-yellow rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-700 transform group-hover:rotate-12">
                    <svg className="w-12 h-12 text-exp-teal group-hover:text-exp-black transition-colors duration-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-medium text-exp-black group-hover:text-white mb-6 transition-colors duration-700">
                      Mesure & Performance
                    </h3>
                    <p className="text-lg text-gray-600 group-hover:text-gray-300 leading-relaxed font-light transition-colors duration-700">
                      Des données qui racontent une histoire. Des insights qui guident vos décisions. Des résultats qui parlent d'eux-mêmes.
                    </p>
                    <div className="mt-8 flex items-center text-exp-teal group-hover:text-exp-yellow transition-colors duration-700">
                      <span className="font-medium">Découvrir</span>
                      <svg className="w-6 h-6 ml-2 transform group-hover:translate-x-2 transition-transform duration-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          </div>

          {/* Service 5 - Full width */}
          <Link href="/services/appels-offres">
            <Card className="group bg-gray-50 p-16 rounded-3xl hover:bg-exp-black transition-all duration-700 border border-gray-200 hover:border-exp-yellow hover:-translate-y-3 hover:shadow-2xl cursor-pointer">
              <div className="flex items-start gap-8">
                <div className="w-24 h-24 bg-exp-yellow/20 group-hover:bg-exp-yellow rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-700 transform group-hover:rotate-12">
                  <svg className="w-12 h-12 text-exp-teal group-hover:text-exp-black transition-colors duration-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-medium text-exp-black group-hover:text-white mb-6 transition-colors duration-700">
                    Appels d'Offres
                  </h3>
                  <p className="text-lg text-gray-600 group-hover:text-gray-300 leading-relaxed font-light transition-colors duration-700">
                    Gagnez plus. Propositions stratégiques qui se démarquent et qui convainquent.
                  </p>
                  <div className="mt-8 flex items-center text-exp-teal group-hover:text-exp-yellow transition-colors duration-700">
                    <span className="font-medium">Découvrir</span>
                    <svg className="w-6 h-6 ml-2 transform group-hover:translate-x-2 transition-transform duration-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </Card>
          </Link>
        </div>
      </section>

      {/* Section CTA Final - Jaune avec pattern de + */}
      <section className="py-48 px-6 bg-exp-yellow relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 text-exp-black text-2xl font-light">+</div>
          <div className="absolute top-20 right-20 text-exp-black text-xl font-light">+</div>
          <div className="absolute bottom-20 left-20 text-exp-black text-3xl font-light">+</div>
          <div className="absolute bottom-40 right-1/4 text-exp-black text-2xl font-light">+</div>
          <div className="absolute top-1/2 left-1/4 text-exp-black text-2xl font-light">+</div>
          <div className="absolute top-1/3 right-1/3 text-exp-black text-xl font-light">+</div>
          <div className="absolute bottom-1/3 left-1/2 text-exp-black text-3xl font-light">+</div>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-6xl font-medium text-exp-black mb-12 leading-tight">
            Prêt à transformer vos ambitions en{' '}
            <span className="italic font-light">réalité</span> ?
          </h2>
          <p className="text-2xl text-exp-black/80 mb-16 font-light leading-relaxed">
            Discutons ensemble d'une stratégie à la hauteur de vos objectifs
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <Link href="/contact">
              <Button
                variant="primary"
                size="lg"
                className="bg-exp-teal hover:bg-exp-black text-white px-16 py-6 text-xl font-medium rounded-2xl transition-all duration-700 transform hover:scale-110 hover:shadow-2xl"
              >
                Passez à l'action ! →
              </Button>
            </Link>
            <Link href="/realisations">
              <Button
                variant="secondary"
                size="lg"
                className="bg-transparent hover:bg-exp-black/10 text-exp-black px-16 py-6 text-xl font-medium rounded-2xl border-2 border-exp-black hover:border-exp-black transition-all duration-700 transform hover:scale-110"
              >
                Voir nos réalisations
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
