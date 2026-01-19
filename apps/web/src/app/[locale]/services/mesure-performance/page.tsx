import { Metadata } from 'next';
import { Link } from '@/i18n/routing';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Mesure de Performance & Outils d\'Analyse - Expérience Collective',
  description: 'Tableaux de bord, KPIs et outils d\'analyse pour piloter vos décisions marketing avec précision.',
};

export default function MesurePerformancePage() {
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
            Mesure de Performance &{' '}
            <span className="relative inline-block">
              <span className="relative z-10 font-medium">Outils d'Analyse</span>
              <span className="absolute inset-0 bg-exp-yellow -z-0"></span>
            </span>
          </h1>
          <p className="text-2xl text-gray-300 font-light leading-relaxed max-w-3xl mx-auto">
            Prenez des décisions{' '}
            <span className="relative inline-block">
              <span className="relative z-10">éclairées</span>
              <span className="absolute inset-0 bg-exp-yellow -z-0"></span>
            </span>
            {' '}grâce à des données précises et des tableaux de bord intuitifs
          </p>
        </div>
      </section>

      {/* Section Description */}
      <section className="py-48 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-32">
            <div>
              <h2 className="text-5xl font-light text-exp-black mb-10 leading-tight">
                Des données qui{' '}
                <span className="relative inline-block">
                  <span className="relative z-10 font-medium">racontent une histoire</span>
                  <span className="absolute inset-0 bg-exp-yellow -z-0"></span>
                </span>
              </h2>
              <p className="text-xl text-gray-700 mb-8 leading-loose font-light">
                Dans un environnement où les données sont omniprésentes, savoir les interpréter et les utiliser efficacement fait toute la différence. Nous transformons vos données brutes en insights actionnables.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed font-light">
                De la configuration d'outils d'analyse à la création de tableaux de bord personnalisés, nous vous donnons les moyens de{' '}
                <span className="relative inline-block">
                  <span className="relative z-10">mesurer</span>
                  <span className="absolute inset-0 bg-exp-yellow -z-0"></span>
                </span>
                ,{' '}
                <span className="relative inline-block">
                  <span className="relative z-10">comprendre</span>
                  <span className="absolute inset-0 bg-exp-yellow -z-0"></span>
                </span>
                {' '}et{' '}
                <span className="relative inline-block">
                  <span className="relative z-10">optimiser</span>
                  <span className="absolute inset-0 bg-exp-yellow -z-0"></span>
                </span>
                {' '}vos performances marketing.
              </p>
            </div>
            <div className="bg-gray-50 p-12 rounded-2xl">
              <h3 className="text-2xl font-medium text-exp-black mb-8">Ce que nous mettons en place</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-exp-yellow/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-exp-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-exp-black mb-2">Tableaux de bord personnalisés</h4>
                    <p className="text-gray-600 font-light">Visualisation claire de vos KPIs en temps réel</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-exp-yellow/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-exp-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-exp-black mb-2">Configuration d'outils</h4>
                    <p className="text-gray-600 font-light">Google Analytics, Tag Manager, Data Studio, etc.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-exp-yellow/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-exp-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-exp-black mb-2">Rapports automatisés</h4>
                    <p className="text-gray-600 font-light">Envoi régulier de rapports de performance</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-exp-yellow/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-exp-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-exp-black mb-2">Analyse et recommandations</h4>
                    <p className="text-gray-600 font-light">Insights actionnables pour optimiser vos campagnes</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section KPIs */}
      <section className="py-48 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-light text-exp-black mb-6 leading-tight">
              Les{' '}
              <span className="relative inline-block">
                <span className="relative z-10 font-medium">KPIs</span>
                <span className="absolute inset-0 bg-exp-yellow -z-0"></span>
              </span>
              {' '}que nous suivons
            </h2>
            <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
              Des indicateurs{' '}
              <span className="relative inline-block">
                <span className="relative z-10">pertinents</span>
                <span className="absolute inset-0 bg-exp-yellow -z-0"></span>
              </span>
              {' '}alignés sur vos objectifs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <Card className="bg-white p-12 rounded-xl shadow-sm hover:shadow-lg transition-all duration-700 border border-gray-100 hover:border-exp-yellow/50 hover:-translate-y-2">
              <div className="w-16 h-16 bg-exp-yellow/20 rounded-xl flex items-center justify-center mb-8">
                <svg className="w-8 h-8 text-exp-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-medium text-exp-black mb-4">Acquisition</h3>
              <p className="text-base text-gray-600 leading-relaxed font-light mb-4">
                Trafic, sources, coût par acquisition, taux de conversion
              </p>
            </Card>

            <Card className="bg-white p-12 rounded-xl shadow-sm hover:shadow-lg transition-all duration-700 border border-gray-100 hover:border-exp-yellow/50 hover:-translate-y-2">
              <div className="w-16 h-16 bg-exp-yellow/20 rounded-xl flex items-center justify-center mb-8">
                <svg className="w-8 h-8 text-exp-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-medium text-exp-black mb-4">Engagement</h3>
              <p className="text-base text-gray-600 leading-relaxed font-light mb-4">
                Temps sur site, pages vues, taux de rebond, interactions
              </p>
            </Card>

            <Card className="bg-white p-12 rounded-xl shadow-sm hover:shadow-lg transition-all duration-700 border border-gray-100 hover:border-exp-yellow/50 hover:-translate-y-2">
              <div className="w-16 h-16 bg-exp-yellow/20 rounded-xl flex items-center justify-center mb-8">
                <svg className="w-8 h-8 text-exp-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-2xl font-medium text-exp-black mb-4">Conversion</h3>
              <p className="text-base text-gray-600 leading-relaxed font-light mb-4">
                Ventes, leads, formulaires, objectifs atteints
              </p>
            </Card>

            <Card className="bg-white p-12 rounded-xl shadow-sm hover:shadow-lg transition-all duration-700 border border-gray-100 hover:border-exp-yellow/50 hover:-translate-y-2">
              <div className="w-16 h-16 bg-exp-yellow/20 rounded-xl flex items-center justify-center mb-8">
                <svg className="w-8 h-8 text-exp-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-2xl font-medium text-exp-black mb-4">Rétention</h3>
              <p className="text-base text-gray-600 leading-relaxed font-light mb-4">
                Taux de retour, fidélisation, lifetime value
              </p>
            </Card>

            <Card className="bg-white p-12 rounded-xl shadow-sm hover:shadow-lg transition-all duration-700 border border-gray-100 hover:border-exp-yellow/50 hover:-translate-y-2">
              <div className="w-16 h-16 bg-exp-yellow/20 rounded-xl flex items-center justify-center mb-8">
                <svg className="w-8 h-8 text-exp-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-medium text-exp-black mb-4">ROI</h3>
              <p className="text-base text-gray-600 leading-relaxed font-light mb-4">
                Retour sur investissement, revenus, coûts, marges
              </p>
            </Card>

            <Card className="bg-white p-12 rounded-xl shadow-sm hover:shadow-lg transition-all duration-700 border border-gray-100 hover:border-exp-yellow/50 hover:-translate-y-2">
              <div className="w-16 h-16 bg-exp-yellow/20 rounded-xl flex items-center justify-center mb-8">
                <svg className="w-8 h-8 text-exp-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <h3 className="text-2xl font-medium text-exp-black mb-4">Performance</h3>
              <p className="text-base text-gray-600 leading-relaxed font-light mb-4">
                Vitesse du site, taux d'erreur, disponibilité
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
            Prêt à mesurer ce qui compte{' '}
            <span className="italic font-light">vraiment</span> ?
          </h2>
          <p className="text-xl text-exp-black/80 mb-14 font-light leading-relaxed">
            Mettons en place les outils et tableaux de bord qui vous permettront de piloter efficacement
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/contact">
              <Button
                variant="primary"
                size="lg"
                className="bg-exp-teal hover:bg-exp-black text-white px-12 py-5 text-base font-medium rounded-xl transition-all duration-500 transform hover:scale-105 hover:shadow-2xl"
              >
                Commençons l'analyse
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
