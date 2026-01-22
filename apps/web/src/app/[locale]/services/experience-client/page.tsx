import { Metadata } from 'next';
import { Link } from '@/i18n/routing';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Expérience Client & Transformation Digitale - Expérience Collective',
  description: 'Optimisation de l\'expérience client et transformation digitale pour des parcours mémorables.',
};

export default function ExperienceClientPage() {
  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-exp-black overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px]">
          <div className="absolute inset-0 bg-gradient-radial from-exp-yellow/12 via-exp-yellow/6 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
        </div>

        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-exp-yellow rounded-full blur-3xl opacity-10 animate-float"></div>
          <div className="absolute bottom-1/4 left-1/4 w-[350px] h-[350px] bg-exp-teal rounded-full blur-3xl opacity-10 animate-float-slow"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto py-32">
          <h1 className="text-6xl font-light text-white mb-8 leading-tight">
            Expérience Client &{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-exp-black font-bold">Transformation Digitale</span>
              <span className="absolute inset-0 bg-exp-yellow -z-0"></span>
            </span>
          </h1>
          <p className="text-2xl text-gray-300 font-light leading-relaxed max-w-3xl mx-auto">
            Créez des parcours clients mémorables qui fidélisent et génèrent de la croissance
          </p>
        </div>
      </section>

      {/* Section Description */}
      <section className="py-48 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-32">
            <div>
              <h2 className="text-5xl font-light text-exp-black mb-10 leading-tight">
                Placez vos clients au{' '}
                <span className="relative inline-block">
                  <span className="relative z-10 text-exp-black font-bold">cœur de tout</span>
                  <span className="absolute inset-0 bg-exp-yellow -z-0"></span>
                </span>
              </h2>
              <p className="text-xl text-gray-700 mb-8 leading-loose font-light">
                Dans un monde où l'expérience client fait toute la différence, nous vous aidons à créer des parcours fluides, intuitifs et mémorables qui transforment vos clients en ambassadeurs.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed font-light">
                De l'analyse des points de contact à la mise en œuvre de solutions digitales innovantes, nous optimisons chaque interaction pour maximiser la satisfaction et la fidélisation.
              </p>
            </div>
            <div className="bg-gray-50 p-12 rounded-2xl">
              <h3 className="text-2xl font-medium text-exp-black mb-8">Nos interventions</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-exp-yellow/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-exp-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-exp-black mb-2">Cartographie du parcours client</h4>
                    <p className="text-gray-600 font-light">Analyse détaillée de tous les points de contact</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-exp-yellow/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-exp-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-exp-black mb-2">Transformation digitale</h4>
                    <p className="text-gray-600 font-light">Modernisation de vos outils et processus</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-exp-yellow/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-exp-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-exp-black mb-2">Optimisation UX/UI</h4>
                    <p className="text-gray-600 font-light">Design d'interfaces intuitives et engageantes</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-exp-yellow/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-exp-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-exp-black mb-2">Automatisation</h4>
                    <p className="text-gray-600 font-light">Mise en place de workflows intelligents</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section Bénéfices */}
      <section className="py-48 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-light text-exp-black mb-6 leading-tight">
              Les{' '}
              <span className="relative inline-block">
                <span className="relative z-10 font-medium">bénéfices</span>
                <span className="absolute inset-0 bg-exp-yellow -z-0"></span>
              </span>
              {' '}pour votre entreprise
            </h2>
            <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
              Des résultats{' '}
              <span className="relative inline-block">
                <span className="relative z-10">tangibles</span>
                <span className="absolute inset-0 bg-exp-yellow -z-0"></span>
              </span>
              {' '}qui impactent votre croissance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <Card className="bg-white p-10 rounded-xl shadow-sm hover:shadow-lg transition-all duration-700 border border-gray-100 hover:border-exp-yellow/50 hover:-translate-y-2 text-center">
              <div className="text-5xl font-light text-exp-teal mb-4">+35%</div>
              <h3 className="text-lg font-medium text-exp-black mb-2">Satisfaction client</h3>
              <p className="text-sm text-gray-600 font-light">En moyenne après optimisation</p>
            </Card>

            <Card className="bg-white p-10 rounded-xl shadow-sm hover:shadow-lg transition-all duration-700 border border-gray-100 hover:border-exp-yellow/50 hover:-translate-y-2 text-center">
              <div className="text-5xl font-light text-exp-teal mb-4">-40%</div>
              <h3 className="text-lg font-medium text-exp-black mb-2">Temps de traitement</h3>
              <p className="text-sm text-gray-600 font-light">Grâce à l'automatisation</p>
            </Card>

            <Card className="bg-white p-10 rounded-xl shadow-sm hover:shadow-lg transition-all duration-700 border border-gray-100 hover:border-exp-yellow/50 hover:-translate-y-2 text-center">
              <div className="text-5xl font-light text-exp-teal mb-4">+50%</div>
              <h3 className="text-lg font-medium text-exp-black mb-2">Taux de conversion</h3>
              <p className="text-sm text-gray-600 font-light">Avec des parcours optimisés</p>
            </Card>

            <Card className="bg-white p-10 rounded-xl shadow-sm hover:shadow-lg transition-all duration-700 border border-gray-100 hover:border-exp-yellow/50 hover:-translate-y-2 text-center">
              <div className="text-5xl font-light text-exp-teal mb-4">+25%</div>
              <h3 className="text-lg font-medium text-exp-black mb-2">Fidélisation</h3>
              <p className="text-sm text-gray-600 font-light">Clients qui reviennent</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="py-48 px-6 bg-exp-yellow relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 text-exp-black text-2xl font-light">+</div>
          <div className="absolute top-20 right-20 text-exp-black text-xl font-light">+</div>
          <div className="absolute bottom-20 left-20 text-exp-black text-3xl font-light">+</div>
          <div className="absolute bottom-40 right-1/4 text-exp-black text-2xl font-light">+</div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl font-medium text-exp-black mb-8 leading-tight">
            Prêt à transformer l'expérience de vos{' '}
            <span className="italic font-light">clients</span> ?
          </h2>
          <p className="text-xl text-exp-black/80 mb-14 font-light leading-relaxed">
            Analysons ensemble vos parcours actuels et identifions les opportunités d'amélioration
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/contact">
              <Button
                variant="primary"
                size="lg"
                className="bg-exp-teal hover:bg-exp-black text-white px-12 py-5 text-base font-medium rounded-xl transition-all duration-500 transform hover:scale-105 hover:shadow-2xl"
              >
                Planifions un audit
              </Button>
            </Link>
            <Link href="/services">
              <Button
                variant="secondary"
                size="lg"
                className="bg-transparent hover:bg-exp-black/10 text-exp-black px-12 py-5 text-base font-medium rounded-xl border-2 border-exp-black hover:border-exp-black transition-all duration-500 transform hover:scale-105"
              >
                Voir tous les services
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
