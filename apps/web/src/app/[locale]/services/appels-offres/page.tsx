import { Metadata } from 'next';
import { Link } from '@/i18n/routing';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Accompagnement Appels d\'Offres - Expérience Collective',
  description: 'Accompagnement stratégique pour maximiser vos chances de succès dans les appels d\'offres.',
};

export default function AppelsOffresPage() {
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
            Accompagnement{' '}
            <span className="relative inline-block">
              <span className="relative z-10 font-medium">Appels d'Offres</span>
              <span className="absolute inset-0 bg-exp-yellow -z-0"></span>
            </span>
          </h1>
          <p className="text-2xl text-gray-300 font-light leading-relaxed max-w-3xl mx-auto">
            Maximisez vos chances de{' '}
            <span className="relative inline-block">
              <span className="relative z-10">succès</span>
              <span className="absolute inset-0 bg-exp-yellow -z-0"></span>
            </span>
            {' '}avec des propositions stratégiques et percutantes
          </p>
        </div>
      </section>

      {/* Section Description */}
      <section className="py-48 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-32">
            <div>
              <h2 className="text-5xl font-light text-exp-black mb-10 leading-tight">
                Gagnez plus d'{' '}
                <span className="relative inline-block">
                  <span className="relative z-10 font-medium">appels d'offres</span>
                  <span className="absolute inset-0 bg-exp-yellow -z-0"></span>
                </span>
              </h2>
              <p className="text-xl text-gray-700 mb-8 leading-loose font-light">
                Les appels d'offres sont compétitifs et exigeants. Une proposition bien structurée, claire et convaincante fait toute la différence entre gagner et perdre un contrat important.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed font-light">
                Nous vous accompagnons dans toutes les étapes du processus : de l'analyse du cahier des charges à la rédaction de la proposition, en passant par la stratégie de{' '}
                <span className="relative inline-block">
                  <span className="relative z-10">différenciation</span>
                  <span className="absolute inset-0 bg-exp-yellow -z-0"></span>
                </span>
                {' '}et la préparation de la présentation orale.
              </p>
            </div>
            <div className="bg-gray-50 p-12 rounded-2xl">
              <h3 className="text-2xl font-medium text-exp-black mb-8">Notre accompagnement</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-exp-yellow/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-exp-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-exp-black mb-2">Analyse du cahier des charges</h4>
                    <p className="text-gray-600 font-light">Identification des critères clés et des attentes</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-exp-yellow/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-exp-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-exp-black mb-2">Stratégie de différenciation</h4>
                    <p className="text-gray-600 font-light">Positionnement unique et valeur ajoutée</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-exp-yellow/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-exp-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-exp-black mb-2">Rédaction de la proposition</h4>
                    <p className="text-gray-600 font-light">Document structuré, clair et convaincant</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-exp-yellow/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-exp-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-exp-black mb-2">Préparation de la présentation</h4>
                    <p className="text-gray-600 font-light">Coaching pour la présentation orale</p>
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
                <span className="relative z-10 font-medium">Méthodologie</span>
                <span className="absolute inset-0 bg-exp-yellow -z-0"></span>
              </span>
            </h2>
            <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
              Une approche éprouvée en 5 étapes pour des propositions{' '}
              <span className="relative inline-block">
                <span className="relative z-10">gagnantes</span>
                <span className="absolute inset-0 bg-exp-yellow -z-0"></span>
              </span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {/* Étape 1 */}
            <Card className="bg-white p-12 rounded-xl shadow-sm hover:shadow-lg transition-all duration-700 border border-gray-100 hover:border-exp-yellow/50 hover:-translate-y-2">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-exp-yellow/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-3xl font-light text-exp-teal">1</span>
                </div>
                <div>
                  <h3 className="text-2xl font-medium text-exp-black mb-4">Analyse</h3>
                  <p className="text-base text-gray-600 leading-relaxed font-light">
                    Décortication du cahier des charges et identification des critères de sélection
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
                    Définition de votre positionnement unique et de votre valeur ajoutée
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
                  <h3 className="text-2xl font-medium text-exp-black mb-4">Rédaction</h3>
                  <p className="text-base text-gray-600 leading-relaxed font-light">
                    Création d'une proposition structurée, claire et convaincante
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
                  <h3 className="text-2xl font-medium text-exp-black mb-4">Révision</h3>
                  <p className="text-base text-gray-600 leading-relaxed font-light">
                    Relecture critique et optimisation du contenu et de la forme
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Étape 5 - Full width */}
          <Card className="bg-white p-12 rounded-xl shadow-sm hover:shadow-lg transition-all duration-700 border border-gray-100 hover:border-exp-yellow/50 hover:-translate-y-2">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-exp-yellow/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-3xl font-light text-exp-teal">5</span>
              </div>
              <div>
                <h3 className="text-2xl font-medium text-exp-black mb-4">Présentation</h3>
                <p className="text-base text-gray-600 leading-relaxed font-light">
                  Préparation et coaching pour la présentation orale devant le comité de sélection
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Section Résultats */}
      <section className="py-48 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-light text-exp-black mb-6 leading-tight">
              Nos{' '}
              <span className="relative inline-block">
                <span className="relative z-10 font-medium">Résultats</span>
                <span className="absolute inset-0 bg-exp-yellow -z-0"></span>
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <Card className="bg-gray-50 p-12 rounded-xl text-center">
              <div className="text-6xl font-light text-exp-teal mb-6">75%</div>
              <h3 className="text-xl font-medium text-exp-black mb-3">Taux de succès</h3>
              <p className="text-base text-gray-600 font-light leading-relaxed">
                Des appels d'offres accompagnés remportés
              </p>
            </Card>

            <Card className="bg-gray-50 p-12 rounded-xl text-center">
              <div className="text-6xl font-light text-exp-teal mb-6">50+</div>
              <h3 className="text-xl font-medium text-exp-black mb-3">Propositions</h3>
              <p className="text-base text-gray-600 font-light leading-relaxed">
                Rédigées et présentées avec succès
              </p>
            </Card>

            <Card className="bg-gray-50 p-12 rounded-xl text-center">
              <div className="text-6xl font-light text-exp-teal mb-6">15M$</div>
              <h3 className="text-xl font-medium text-exp-black mb-3">Contrats gagnés</h3>
              <p className="text-base text-gray-600 font-light leading-relaxed">
                Valeur totale des contrats remportés
              </p>
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
            Prêt à remporter votre prochain{' '}
            <span className="italic font-light">appel d'offres</span> ?
          </h2>
          <p className="text-xl text-exp-black/80 mb-14 font-light leading-relaxed">
            Discutons de votre projet et de la façon dont nous pouvons maximiser vos chances
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/contact">
              <Button
                variant="primary"
                size="lg"
                className="bg-exp-teal hover:bg-exp-black text-white px-12 py-5 text-base font-medium rounded-xl transition-all duration-500 transform hover:scale-105 hover:shadow-2xl"
              >
                Parlons de votre projet
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
