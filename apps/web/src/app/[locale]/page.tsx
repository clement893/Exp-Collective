import { Metadata } from 'next';
import { Link } from '@/i18n/routing';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Expérience Collective - Agence de marketing et stratégie',
  description: 'Comprendre pour oser, oser pour comprendre. Services de marketing, stratégie et transformation digitale.',
};

export default function ExpHomePage() {
  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section - Minimaliste et élégant */}
      <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
        {/* Forme fluide subtile en background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-exp-yellow/5 rounded-full blur-3xl animate-pulse"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto py-40">
          {/* Logo élégant */}
          <div className="mb-16">
            <div className="inline-flex items-baseline gap-4">
              <div className="bg-exp-yellow px-6 py-3 rounded-xl">
                <span className="text-5xl font-bold text-exp-black">exp</span>
              </div>
              <div className="text-left">
                <h1 className="text-5xl font-light text-exp-black">
                  érience<br/>collective
                </h1>
                <p className="text-exp-yellow text-lg font-light italic mt-1">
                  L'encre jaune qui se dilue
                </p>
              </div>
            </div>
          </div>

          {/* Tagline avec mots surlignés subtilement */}
          <h2 className="text-4xl font-light text-exp-black mb-16 leading-relaxed max-w-4xl mx-auto">
            Comprendre pour{' '}
            <span className="relative inline-block">
              <span className="relative z-10">oser</span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-exp-yellow/30 -z-0"></span>
            </span>
            , oser pour{' '}
            <span className="relative inline-block">
              <span className="relative z-10">comprendre</span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-exp-yellow/30 -z-0"></span>
            </span>
          </h2>

          {/* CTAs élégants */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact">
              <Button
                variant="primary"
                size="lg"
                className="bg-exp-black hover:bg-exp-yellow text-white hover:text-exp-black px-10 py-4 text-base font-medium rounded-lg transition-all duration-300 border border-exp-black"
              >
                Passez à l'action
              </Button>
            </Link>
            <Link href="/services">
              <Button
                variant="secondary"
                size="lg"
                className="bg-white hover:bg-exp-yellow/10 text-exp-black px-10 py-4 text-base font-medium rounded-lg border border-gray-200 hover:border-exp-yellow transition-all duration-300"
              >
                Découvrir nos services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Section Services - Fond gris ultra-léger */}
      <section className="py-32 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Titre élégant */}
          <div className="text-center mb-20">
            <h2 className="text-5xl font-light text-exp-black mb-4">
              Nos{' '}
              <span className="relative inline-block">
                <span className="relative z-10 font-medium">Services</span>
                <span className="absolute bottom-1 left-0 w-full h-3 bg-exp-yellow/30 -z-0"></span>
              </span>
            </h2>
            <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto mt-6">
              Des solutions complètes pour propulser votre entreprise vers de nouveaux sommets
            </p>
          </div>

          {/* Grille de cartes élégantes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <Card className="group bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-exp-yellow/50 hover:-translate-y-1">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gray-100 group-hover:bg-exp-yellow/10 rounded-lg flex items-center justify-center transition-all duration-300">
                  <svg className="w-8 h-8 text-exp-teal group-hover:text-exp-yellow transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-medium text-exp-black mb-3">Stratégie & CMO</h3>
              <p className="text-base text-gray-600 leading-relaxed mb-6">
                Accompagnement stratégique global et CMO on demand pour définir et exécuter votre vision.
              </p>
              <Link href="/services/strategie-cmo">
                <Button variant="link" className="text-exp-teal group-hover:text-exp-yellow font-medium text-sm transition-colors">
                  En savoir plus →
                </Button>
              </Link>
            </Card>

            {/* Service 2 */}
            <Card className="group bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-exp-yellow/50 hover:-translate-y-1">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gray-100 group-hover:bg-exp-yellow/10 rounded-lg flex items-center justify-center transition-all duration-300">
                  <svg className="w-8 h-8 text-exp-teal group-hover:text-exp-yellow transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-medium text-exp-black mb-3">Image de Marque</h3>
              <p className="text-base text-gray-600 leading-relaxed mb-6">
                Création d'identités visuelles distinctives et stratégies de marque percutantes.
              </p>
              <Link href="/services/image-de-marque">
                <Button variant="link" className="text-exp-teal group-hover:text-exp-yellow font-medium text-sm transition-colors">
                  En savoir plus →
                </Button>
              </Link>
            </Card>

            {/* Service 3 */}
            <Card className="group bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-exp-yellow/50 hover:-translate-y-1">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gray-100 group-hover:bg-exp-yellow/10 rounded-lg flex items-center justify-center transition-all duration-300">
                  <svg className="w-8 h-8 text-exp-teal group-hover:text-exp-yellow transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-medium text-exp-black mb-3">Expérience Client</h3>
              <p className="text-base text-gray-600 leading-relaxed mb-6">
                Transformation digitale et optimisation de l'expérience client pour des parcours mémorables.
              </p>
              <Link href="/services/experience-client">
                <Button variant="link" className="text-exp-teal group-hover:text-exp-yellow font-medium text-sm transition-colors">
                  En savoir plus →
                </Button>
              </Link>
            </Card>

            {/* Service 4 */}
            <Card className="group bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-exp-yellow/50 hover:-translate-y-1">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gray-100 group-hover:bg-exp-yellow/10 rounded-lg flex items-center justify-center transition-all duration-300">
                  <svg className="w-8 h-8 text-exp-teal group-hover:text-exp-yellow transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-medium text-exp-black mb-3">Mesure de Performance</h3>
              <p className="text-base text-gray-600 leading-relaxed mb-6">
                Outils d'analyse et tableaux de bord pour mesurer l'impact de vos actions en temps réel.
              </p>
              <Link href="/services/mesure-performance">
                <Button variant="link" className="text-exp-teal group-hover:text-exp-yellow font-medium text-sm transition-colors">
                  En savoir plus →
                </Button>
              </Link>
            </Card>

            {/* Service 5 */}
            <Card className="group bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-exp-yellow/50 hover:-translate-y-1">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gray-100 group-hover:bg-exp-yellow/10 rounded-lg flex items-center justify-center transition-all duration-300">
                  <svg className="w-8 h-8 text-exp-teal group-hover:text-exp-yellow transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-medium text-exp-black mb-3">Appels d'Offres</h3>
              <p className="text-base text-gray-600 leading-relaxed mb-6">
                Accompagnement stratégique pour la gestion et la réponse aux appels d'offres complexes.
              </p>
              <Link href="/services/appels-offres">
                <Button variant="link" className="text-exp-teal group-hover:text-exp-yellow font-medium text-sm transition-colors">
                  En savoir plus →
                </Button>
              </Link>
            </Card>

            {/* CTA Card */}
            <Card className="group bg-gradient-to-br from-gray-900 to-exp-black p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-800 hover:border-exp-yellow/50 hover:-translate-y-1 flex flex-col justify-center">
              <h3 className="text-2xl font-medium text-white mb-4">
                Besoin d'un service sur mesure ?
              </h3>
              <p className="text-base text-gray-300 mb-6 leading-relaxed">
                Discutons ensemble de vos besoins spécifiques
              </p>
              <Link href="/contact">
                <Button
                  variant="primary"
                  size="md"
                  className="bg-exp-yellow hover:bg-white text-exp-black px-6 py-3 text-sm font-medium rounded-lg transition-all duration-300"
                >
                  Contactez-nous →
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* Section Raison d'Être - Fond blanc, layout asymétrique */}
      <section className="py-32 px-6 bg-white relative overflow-hidden">
        {/* Forme fluide subtile */}
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-exp-teal/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Texte */}
            <div>
              <h2 className="text-5xl font-light text-exp-black mb-8 leading-tight">
                Notre{' '}
                <span className="relative inline-block">
                  <span className="relative z-10 font-medium">Raison d'Être</span>
                  <span className="absolute bottom-1 left-0 w-full h-3 bg-exp-yellow/30 -z-0"></span>
                </span>
              </h2>
              <p className="text-xl text-gray-700 mb-6 leading-relaxed font-light">
                Nous sommes plus qu'une agence : nous sommes vos{' '}
                <span className="relative inline-block">
                  <span className="relative z-10 font-medium">partenaires stratégiques</span>
                  <span className="absolute bottom-0 left-0 w-full h-2 bg-exp-yellow/20 -z-0"></span>
                </span>
                , déterminés à transformer vos ambitions en succès tangibles.
              </p>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                Notre approche unique combine écoute active, expertise pointue et créativité débridée 
                pour créer des expériences qui marquent les esprits et génèrent des résultats mesurables.
              </p>
              <Link href="/a-propos">
                <Button
                  variant="primary"
                  size="lg"
                  className="bg-exp-black hover:bg-exp-yellow text-white hover:text-exp-black px-8 py-4 text-base font-medium rounded-lg transition-all duration-300 border border-exp-black"
                >
                  Découvrir notre histoire
                </Button>
              </Link>
            </div>

            {/* Cartes Valeurs */}
            <div className="space-y-6">
              {/* Vision */}
              <Card className="group bg-white p-6 rounded-lg shadow-sm hover:shadow-md border border-gray-100 hover:border-exp-yellow/50 transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gray-100 group-hover:bg-exp-yellow/10 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300">
                    <svg className="w-7 h-7 text-exp-teal group-hover:text-exp-yellow transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-exp-black mb-2">Vision</h3>
                    <p className="text-base text-gray-600 leading-relaxed">
                      Voir au-delà de l'évident pour révéler le potentiel inexploité
                    </p>
                  </div>
                </div>
              </Card>

              {/* Action */}
              <Card className="group bg-white p-6 rounded-lg shadow-sm hover:shadow-md border border-gray-100 hover:border-exp-yellow/50 transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gray-100 group-hover:bg-exp-yellow/10 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300">
                    <svg className="w-7 h-7 text-exp-teal group-hover:text-exp-yellow transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-exp-black mb-2">Action</h3>
                    <p className="text-base text-gray-600 leading-relaxed">
                      Transformer les idées en réalité avec agilité et détermination
                    </p>
                  </div>
                </div>
              </Card>

              {/* Impact */}
              <Card className="group bg-white p-6 rounded-lg shadow-sm hover:shadow-md border border-gray-100 hover:border-exp-yellow/50 transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gray-100 group-hover:bg-exp-yellow/10 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300">
                    <svg className="w-7 h-7 text-exp-teal group-hover:text-exp-yellow transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-exp-black mb-2">Impact</h3>
                    <p className="text-base text-gray-600 leading-relaxed">
                      Créer des résultats mesurables qui dépassent les attentes
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Section CTA Finale - Fond gris clair */}
      <section className="py-32 px-6 bg-gray-50 relative overflow-hidden">
        {/* Forme fluide subtile */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-exp-yellow/5 rounded-full blur-3xl"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl font-light text-exp-black mb-6 leading-tight">
            Prêt à transformer vos ambitions en{' '}
            <span className="relative inline-block">
              <span className="relative z-10 font-medium">réalité</span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-exp-yellow/30 -z-0"></span>
            </span>
            {' '}?
          </h2>
          <p className="text-xl text-gray-600 mb-12 font-light">
            Discutons ensemble d'une stratégie à la hauteur de vos objectifs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact">
              <Button
                variant="primary"
                size="lg"
                className="bg-exp-black hover:bg-exp-yellow text-white hover:text-exp-black px-10 py-4 text-base font-medium rounded-lg transition-all duration-300 border border-exp-black"
              >
                Passez à l'action
              </Button>
            </Link>
            <Link href="/realisations">
              <Button
                variant="secondary"
                size="lg"
                className="bg-white hover:bg-exp-yellow/10 text-exp-black px-10 py-4 text-base font-medium rounded-lg border border-gray-200 hover:border-exp-yellow transition-all duration-300"
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
