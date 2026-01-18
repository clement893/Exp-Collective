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
      
      {/* Hero Section - Full Screen avec animation */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-exp-black via-gray-900 to-exp-teal overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-exp-yellow/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-exp-teal/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          {/* Logo avec animation */}
          <div className="mb-12 animate-fade-in">
            <div className="inline-flex items-baseline gap-3">
              <div className="bg-exp-yellow px-8 py-4 rounded-2xl transform hover:scale-105 transition-transform duration-300">
                <span className="text-7xl md:text-8xl font-black text-exp-black">exp</span>
              </div>
              <div>
                <h1 className="text-6xl md:text-7xl font-black text-white">
                  érience<br/>collective
                </h1>
                <p className="text-exp-yellow text-xl md:text-2xl font-light italic mt-2">
                  L'encre jaune qui se dilue
                </p>
              </div>
            </div>
          </div>

          {/* Tagline avec mots surlignés */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 leading-tight">
            Comprendre pour{' '}
            <span className="bg-exp-yellow text-exp-black px-4 py-2 rounded-lg">oser</span>
            , oser pour{' '}
            <span className="bg-exp-yellow text-exp-black px-4 py-2 rounded-lg">comprendre</span>
          </h2>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/contact">
              <Button
                variant="primary"
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-6 text-xl font-bold rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                Passez à l'action ! →
              </Button>
            </Link>
            <Link href="/services">
              <Button
                variant="secondary"
                size="lg"
                className="bg-transparent border-4 border-exp-yellow text-exp-yellow hover:bg-exp-yellow hover:text-exp-black px-12 py-6 text-xl font-bold rounded-2xl transform hover:scale-105 transition-all duration-300"
              >
                Découvrir nos services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Section Services - Fond JAUNE VIF */}
      <section className="py-32 px-6 bg-exp-yellow relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-exp-black/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Titre avec style impactant */}
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl font-black text-exp-black mb-6">
              Nos <span className="bg-exp-black text-exp-yellow px-6 py-2 rounded-2xl">Services</span>
            </h2>
            <p className="text-2xl text-exp-black/80 font-medium max-w-3xl mx-auto">
              Des solutions complètes pour propulser votre entreprise vers de nouveaux sommets
            </p>
          </div>

          {/* Grille de cartes avec design impactant */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <Card className="group bg-white p-10 rounded-3xl shadow-2xl hover:shadow-exp-black/30 transform hover:-translate-y-4 transition-all duration-500 border-4 border-exp-black">
              <div className="mb-8">
                <div className="w-24 h-24 bg-exp-yellow rounded-2xl flex items-center justify-center transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500">
                  <svg className="w-14 h-14 text-exp-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-3xl font-black text-exp-black mb-4">Stratégie & CMO</h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Accompagnement stratégique global et CMO on demand pour définir et exécuter votre vision.
              </p>
              <Link href="/services/strategie-cmo">
                <Button variant="ghost" className="text-exp-teal font-bold text-lg group-hover:text-exp-black transition-colors">
                  En savoir plus →
                </Button>
              </Link>
            </Card>

            {/* Service 2 */}
            <Card className="group bg-white p-10 rounded-3xl shadow-2xl hover:shadow-exp-black/30 transform hover:-translate-y-4 transition-all duration-500 border-4 border-exp-black">
              <div className="mb-8">
                <div className="w-24 h-24 bg-exp-teal rounded-2xl flex items-center justify-center transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500">
                  <svg className="w-14 h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
              </div>
              <h3 className="text-3xl font-black text-exp-black mb-4">Image de Marque</h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Création d'identités visuelles distinctives et stratégies de marque percutantes.
              </p>
              <Link href="/services/image-de-marque">
                <Button variant="ghost" className="text-exp-teal font-bold text-lg group-hover:text-exp-black transition-colors">
                  En savoir plus →
                </Button>
              </Link>
            </Card>

            {/* Service 3 */}
            <Card className="group bg-white p-10 rounded-3xl shadow-2xl hover:shadow-exp-black/30 transform hover:-translate-y-4 transition-all duration-500 border-4 border-exp-black">
              <div className="mb-8">
                <div className="w-24 h-24 bg-exp-yellow rounded-2xl flex items-center justify-center transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500">
                  <svg className="w-14 h-14 text-exp-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-3xl font-black text-exp-black mb-4">Expérience Client</h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Transformation digitale et optimisation de l'expérience client pour des parcours mémorables.
              </p>
              <Link href="/services/experience-client">
                <Button variant="ghost" className="text-exp-teal font-bold text-lg group-hover:text-exp-black transition-colors">
                  En savoir plus →
                </Button>
              </Link>
            </Card>

            {/* Service 4 */}
            <Card className="group bg-white p-10 rounded-3xl shadow-2xl hover:shadow-exp-black/30 transform hover:-translate-y-4 transition-all duration-500 border-4 border-exp-black">
              <div className="mb-8">
                <div className="w-24 h-24 bg-exp-teal rounded-2xl flex items-center justify-center transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500">
                  <svg className="w-14 h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-3xl font-black text-exp-black mb-4">Mesure de Performance</h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Outils d'analyse et tableaux de bord pour mesurer l'impact de vos actions en temps réel.
              </p>
              <Link href="/services/mesure-performance">
                <Button variant="ghost" className="text-exp-teal font-bold text-lg group-hover:text-exp-black transition-colors">
                  En savoir plus →
                </Button>
              </Link>
            </Card>

            {/* Service 5 */}
            <Card className="group bg-white p-10 rounded-3xl shadow-2xl hover:shadow-exp-black/30 transform hover:-translate-y-4 transition-all duration-500 border-4 border-exp-black">
              <div className="mb-8">
                <div className="w-24 h-24 bg-exp-yellow rounded-2xl flex items-center justify-center transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500">
                  <svg className="w-14 h-14 text-exp-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-3xl font-black text-exp-black mb-4">Appels d'Offres</h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Accompagnement stratégique pour la gestion et la réponse aux appels d'offres complexes.
              </p>
              <Link href="/services/appels-offres">
                <Button variant="ghost" className="text-exp-teal font-bold text-lg group-hover:text-exp-black transition-colors">
                  En savoir plus →
                </Button>
              </Link>
            </Card>

            {/* CTA Card */}
            <Card className="group bg-gradient-to-br from-exp-black to-exp-teal p-10 rounded-3xl shadow-2xl hover:shadow-exp-yellow/50 transform hover:-translate-y-4 transition-all duration-500 border-4 border-exp-black flex flex-col justify-center items-center text-center">
              <h3 className="text-4xl font-black text-white mb-6">
                Besoin d'un service sur mesure ?
              </h3>
              <p className="text-xl text-white/90 mb-8">
                Discutons ensemble de vos besoins spécifiques
              </p>
              <Link href="/contact">
                <Button
                  variant="primary"
                  size="lg"
                  className="bg-exp-yellow hover:bg-white text-exp-black px-10 py-5 text-xl font-black rounded-2xl transform group-hover:scale-110 transition-all duration-300"
                >
                  Contactez-nous →
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* Section Raison d'Être - Fond NOIR */}
      <section className="py-32 px-6 bg-exp-black relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-exp-yellow/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-exp-teal/20 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Texte */}
            <div>
              <h2 className="text-6xl md:text-7xl font-black text-white mb-8">
                Notre{' '}
                <span className="bg-exp-yellow text-exp-black px-6 py-2 rounded-2xl">Raison d'Être</span>
              </h2>
              <p className="text-2xl text-white mb-8 leading-relaxed">
                Nous sommes plus qu'une agence : nous sommes vos{' '}
                <span className="text-exp-yellow font-bold">partenaires stratégiques</span>, 
                déterminés à transformer vos ambitions en succès tangibles.
              </p>
              <p className="text-xl text-white/80 mb-12 leading-relaxed">
                Notre approche unique combine écoute active, expertise pointue et créativité débridée 
                pour créer des expériences qui marquent les esprits et génèrent des résultats mesurables.
              </p>
              <Link href="/a-propos">
                <Button
                  variant="primary"
                  size="lg"
                  className="bg-exp-yellow hover:bg-white text-exp-black px-10 py-5 text-xl font-black rounded-2xl transform hover:scale-105 transition-all duration-300"
                >
                  Découvrir notre histoire →
                </Button>
              </Link>
            </div>

            {/* Cartes Valeurs */}
            <div className="space-y-6">
              {/* Vision */}
              <Card className="group bg-gradient-to-br from-exp-yellow/20 to-transparent backdrop-blur-sm p-8 rounded-3xl border-4 border-exp-yellow hover:border-white transform hover:scale-105 transition-all duration-500">
                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 bg-exp-yellow rounded-2xl flex items-center justify-center flex-shrink-0 transform group-hover:rotate-12 transition-transform duration-500">
                    <svg className="w-12 h-12 text-exp-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-3xl font-black text-white mb-3">Vision</h3>
                    <p className="text-lg text-white/90">
                      Voir au-delà de l'évident pour révéler le potentiel inexploité
                    </p>
                  </div>
                </div>
              </Card>

              {/* Action */}
              <Card className="group bg-gradient-to-br from-exp-teal/20 to-transparent backdrop-blur-sm p-8 rounded-3xl border-4 border-exp-teal hover:border-white transform hover:scale-105 transition-all duration-500">
                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 bg-exp-teal rounded-2xl flex items-center justify-center flex-shrink-0 transform group-hover:rotate-12 transition-transform duration-500">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-3xl font-black text-white mb-3">Action</h3>
                    <p className="text-lg text-white/90">
                      Transformer les idées en réalité avec agilité et détermination
                    </p>
                  </div>
                </div>
              </Card>

              {/* Impact */}
              <Card className="group bg-gradient-to-br from-exp-yellow/20 to-transparent backdrop-blur-sm p-8 rounded-3xl border-4 border-exp-yellow hover:border-white transform hover:scale-105 transition-all duration-500">
                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 bg-exp-yellow rounded-2xl flex items-center justify-center flex-shrink-0 transform group-hover:rotate-12 transition-transform duration-500">
                    <svg className="w-12 h-12 text-exp-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-3xl font-black text-white mb-3">Impact</h3>
                    <p className="text-lg text-white/90">
                      Créer des résultats mesurables qui dépassent les attentes
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Section CTA Finale - Fond TEAL */}
      <section className="py-32 px-6 bg-gradient-to-br from-exp-teal to-exp-teal/80 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-exp-yellow/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-exp-black/10 rounded-full blur-3xl"></div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-6xl md:text-7xl font-black text-white mb-8 leading-tight">
            Prêt à transformer vos ambitions en{' '}
            <span className="bg-exp-yellow text-exp-black px-6 py-3 rounded-2xl">réalité</span> ?
          </h2>
          <p className="text-2xl text-white/90 mb-12 font-medium">
            Discutons ensemble d'une stratégie à la hauteur de vos objectifs
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/contact">
              <Button
                variant="primary"
                size="lg"
                className="bg-exp-yellow hover:bg-white text-exp-black px-12 py-6 text-2xl font-black rounded-2xl shadow-2xl transform hover:scale-110 transition-all duration-300"
              >
                Passez à l'action ! →
              </Button>
            </Link>
            <Link href="/realisations">
              <Button
                variant="secondary"
                size="lg"
                className="bg-transparent border-4 border-white text-white hover:bg-white hover:text-exp-teal px-12 py-6 text-2xl font-black rounded-2xl transform hover:scale-110 transition-all duration-300"
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
