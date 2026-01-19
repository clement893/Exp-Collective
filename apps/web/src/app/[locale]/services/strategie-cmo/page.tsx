import { Metadata } from 'next';
import { Link } from '@/i18n/routing';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Stratégie & CMO on Demand - Expérience Collective',
  description: 'Accompagnement stratégique global et CMO on demand pour définir et exécuter votre vision marketing.',
};

export default function StrategieCMOPage() {
  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-exp-black overflow-hidden">
        {/* Gradient "encre qui se dilue" */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px]">
          <div className="absolute inset-0 bg-gradient-radial from-exp-yellow/12 via-exp-yellow/6 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
        </div>

        {/* Formes fluides animées */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-exp-yellow rounded-full blur-3xl opacity-10 animate-float"></div>
          <div className="absolute bottom-1/4 left-1/4 w-[350px] h-[350px] bg-exp-teal rounded-full blur-3xl opacity-10 animate-float-slow"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto py-32">
          <h1 className="text-6xl font-light text-white mb-8 leading-tight">
            Stratégie &{' '}
            <span className="relative inline-block">
              <span className="relative z-10 font-medium">CMO on Demand</span>
              <span className="absolute inset-0 bg-exp-yellow -z-0"></span>
            </span>
          </h1>
          <p className="text-2xl text-gray-300 font-light leading-relaxed max-w-3xl mx-auto">
            Un accompagnement stratégique global pour{' '}
            <span className="relative inline-block">
              <span className="relative z-10">définir</span>
              <span className="absolute inset-0 bg-exp-yellow -z-0"></span>
            </span>
            {' '}et{' '}
            <span className="relative inline-block">
              <span className="relative z-10">exécuter</span>
              <span className="absolute inset-0 bg-exp-yellow -z-0"></span>
            </span>
            {' '}votre vision marketing
          </p>
        </div>
      </section>

      {/* Section Description */}
      <section className="py-48 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-32">
            <div>
              <h2 className="text-5xl font-light text-exp-black mb-10 leading-tight">
                Un{' '}
                <span className="relative inline-block">
                  <span className="relative z-10 font-medium">partenaire stratégique</span>
                  <span className="absolute inset-0 bg-exp-yellow -z-0"></span>
                </span>
                {' '}à vos côtés
              </h2>
              <p className="text-xl text-gray-700 mb-8 leading-loose font-light">
                Vous avez besoin d'une vision claire, d'une stratégie cohérente et d'une exécution sans faille ? Notre service de CMO on demand vous offre l'expertise d'un directeur marketing senior, sans les contraintes d'un poste à temps plein.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed font-light">
                Nous travaillons main dans la main avec votre équipe pour élaborer des stratégies marketing{' '}
                <span className="relative inline-block">
                  <span className="relative z-10">sur mesure</span>
                  <span className="absolute inset-0 bg-exp-yellow -z-0"></span>
                </span>
                , alignées sur vos objectifs d'affaires et adaptées à votre réalité.
              </p>
            </div>
            <div className="bg-gray-50 p-12 rounded-2xl">
              <h3 className="text-2xl font-medium text-exp-black mb-8">Ce que nous offrons</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-exp-yellow/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-exp-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-exp-black mb-2">Vision stratégique</h4>
                    <p className="text-gray-600 font-light">Définition d'une feuille de route marketing claire et actionnable</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-exp-yellow/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-exp-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-exp-black mb-2">Leadership marketing</h4>
                    <p className="text-gray-600 font-light">Encadrement de votre équipe et coordination des initiatives</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-exp-yellow/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-exp-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-exp-black mb-2">Optimisation budgétaire</h4>
                    <p className="text-gray-600 font-light">Maximisation du ROI de vos investissements marketing</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-exp-yellow/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-exp-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-exp-black mb-2">Exécution tactique</h4>
                    <p className="text-gray-600 font-light">Mise en œuvre concrète des stratégies définies</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section Processus */}
      <section className="py-48 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-light text-exp-black mb-6 leading-tight">
              Notre{' '}
              <span className="relative inline-block">
                <span className="relative z-10 font-medium">Processus</span>
                <span className="absolute inset-0 bg-exp-yellow -z-0"></span>
              </span>
            </h2>
            <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
              Une approche structurée en 4 étapes pour des résultats{' '}
              <span className="relative inline-block">
                <span className="relative z-10">mesurables</span>
                <span className="absolute inset-0 bg-exp-yellow -z-0"></span>
              </span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Étape 1 */}
            <Card className="bg-white p-12 rounded-xl shadow-sm hover:shadow-lg transition-all duration-700 border border-gray-100 hover:border-exp-yellow/50 hover:-translate-y-2">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-exp-yellow/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-3xl font-light text-exp-teal">1</span>
                </div>
                <div>
                  <h3 className="text-2xl font-medium text-exp-black mb-4">Diagnostic</h3>
                  <p className="text-base text-gray-600 leading-relaxed font-light">
                    Analyse approfondie de votre situation actuelle, de vos objectifs et de votre marché
                  </p>
                </div>
              </div>
            </Card>

            {/* Étape 2 */}
            <Card className="bg-white p-12 rounded-xl shadow-sm hover:shadow-lg transition-all duration-700 border border-gray-100 hover:border-exp-yellow/50 hover:-translate-y-2">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-exp-yellow/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-3xl font-light text-exp-teal">2</span>
                </div>
                <div>
                  <h3 className="text-2xl font-medium text-exp-black mb-4">Stratégie</h3>
                  <p className="text-base text-gray-600 leading-relaxed font-light">
                    Élaboration d'une feuille de route marketing alignée sur vos objectifs d'affaires
                  </p>
                </div>
              </div>
            </Card>

            {/* Étape 3 */}
            <Card className="bg-white p-12 rounded-xl shadow-sm hover:shadow-lg transition-all duration-700 border border-gray-100 hover:border-exp-yellow/50 hover:-translate-y-2">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-exp-yellow/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-3xl font-light text-exp-teal">3</span>
                </div>
                <div>
                  <h3 className="text-2xl font-medium text-exp-black mb-4">Exécution</h3>
                  <p className="text-base text-gray-600 leading-relaxed font-light">
                    Mise en œuvre des initiatives marketing avec votre équipe
                  </p>
                </div>
              </div>
            </Card>

            {/* Étape 4 */}
            <Card className="bg-white p-12 rounded-xl shadow-sm hover:shadow-lg transition-all duration-700 border border-gray-100 hover:border-exp-yellow/50 hover:-translate-y-2">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-exp-yellow/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-3xl font-light text-exp-teal">4</span>
                </div>
                <div>
                  <h3 className="text-2xl font-medium text-exp-black mb-4">Optimisation</h3>
                  <p className="text-base text-gray-600 leading-relaxed font-light">
                    Mesure des résultats et ajustements continus pour maximiser l'impact
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="py-48 px-6 bg-exp-yellow relative overflow-hidden">
        {/* Pattern de petits "+" */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 text-exp-black text-2xl font-light">+</div>
          <div className="absolute top-20 right-20 text-exp-black text-xl font-light">+</div>
          <div className="absolute bottom-20 left-20 text-exp-black text-3xl font-light">+</div>
          <div className="absolute bottom-40 right-1/4 text-exp-black text-2xl font-light">+</div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl font-medium text-exp-black mb-8 leading-tight">
            Prêt à donner une{' '}
            <span className="italic font-light">direction claire</span>{' '}
            à votre marketing ?
          </h2>
          <p className="text-xl text-exp-black/80 mb-14 font-light leading-relaxed">
            Discutons de vos défis et de la façon dont nous pouvons vous aider
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/contact">
              <Button
                variant="primary"
                size="lg"
                className="bg-exp-teal hover:bg-exp-black text-white px-12 py-5 text-base font-medium rounded-xl transition-all duration-500 transform hover:scale-105 hover:shadow-2xl"
              >
                Discutons ensemble
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
