import { Metadata } from 'next';
import { Link } from '@/i18n/routing';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { ExpHeader, ExpFooter } from '@/components/exp';

export const metadata: Metadata = {
  title: 'Expérience Collective - Agence de marketing et stratégie',
  description: 'Comprendre pour oser, oser pour comprendre. Services de marketing, stratégie et transformation digitale.',
};

export default function ExpHomePage() {
  return (
    <div className="min-h-screen bg-exp-white">
      <ExpHeader />
      
      {/* Hero Section - Full Screen avec animation */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-exp-black via-exp-black to-exp-teal overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-exp-yellow/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-exp-teal/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-5xl mx-auto space-y-12">
            {/* Logo animé */}
            <div className="inline-block animate-fade-in-up">
              <h1 className="text-6xl md:text-8xl font-bold">
                <span className="relative inline-block">
                  <span className="bg-exp-yellow text-exp-black px-6 py-3 rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300">
                    exp
                  </span>
                  <span className="ml-4 text-exp-white">érience collective</span>
                </span>
              </h1>
              <p className="text-exp-yellow/80 text-sm mt-4 italic">L'encre jaune qui se dilue</p>
            </div>

            {/* Tagline avec effet de highlight */}
            <p className="text-3xl md:text-4xl font-light text-exp-white leading-relaxed animate-fade-in-up delay-200">
              Comprendre pour <span className="bg-exp-yellow text-exp-black px-3 py-1 rounded font-semibold">oser</span>, 
              oser pour <span className="bg-exp-yellow text-exp-black px-3 py-1 rounded font-semibold">comprendre</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up delay-400">
              <Link href="/contact">
                <Button size="lg" className="bg-exp-yellow text-exp-black hover:bg-exp-yellow/90 font-bold px-12 py-6 text-xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300">
                  Passez à l'action ! →
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="border-2 border-exp-white text-exp-white hover:bg-exp-white hover:text-exp-black font-bold px-12 py-6 text-xl transition-all duration-300">
                  Découvrir nos services
                </Button>
              </Link>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
              <svg className="w-8 h-8 text-exp-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Avec cartes dynamiques */}
      <section className="py-32 bg-exp-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-exp-yellow via-exp-teal to-exp-yellow"></div>
        
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-exp-black mb-6">
              Nos <span className="bg-exp-yellow px-4 py-1 rounded">Services</span>
            </h2>
            <p className="text-xl text-exp-gray max-w-3xl mx-auto leading-relaxed">
              Des solutions complètes pour propulser votre entreprise vers de nouveaux sommets
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Service 1 */}
            <Card className="group hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-exp-yellow bg-gradient-to-br from-exp-white to-exp-yellow/5 transform hover:-translate-y-2">
              <div className="p-8 space-y-6">
                <div className="w-16 h-16 bg-exp-yellow rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <svg className="w-8 h-8 text-exp-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-exp-black group-hover:text-exp-yellow transition-colors">
                  Stratégie & CMO
                </h3>
                <p className="text-exp-gray leading-relaxed">
                  Accompagnement stratégique global et CMO on demand pour définir et exécuter votre vision.
                </p>
                <Link href="/services" className="inline-flex items-center text-exp-black font-semibold group-hover:text-exp-yellow transition-colors">
                  En savoir plus
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </Card>

            {/* Service 2 */}
            <Card className="group hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-exp-yellow bg-gradient-to-br from-exp-white to-exp-teal/5 transform hover:-translate-y-2">
              <div className="p-8 space-y-6">
                <div className="w-16 h-16 bg-exp-teal rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <svg className="w-8 h-8 text-exp-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-exp-black group-hover:text-exp-teal transition-colors">
                  Image de Marque
                </h3>
                <p className="text-exp-gray leading-relaxed">
                  Création d'identités visuelles distinctives et stratégies de marque percutantes.
                </p>
                <Link href="/services" className="inline-flex items-center text-exp-black font-semibold group-hover:text-exp-teal transition-colors">
                  En savoir plus
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </Card>

            {/* Service 3 */}
            <Card className="group hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-exp-yellow bg-gradient-to-br from-exp-white to-exp-yellow/5 transform hover:-translate-y-2">
              <div className="p-8 space-y-6">
                <div className="w-16 h-16 bg-exp-yellow rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <svg className="w-8 h-8 text-exp-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-exp-black group-hover:text-exp-yellow transition-colors">
                  Expérience Client
                </h3>
                <p className="text-exp-gray leading-relaxed">
                  Transformation digitale et optimisation de l'expérience client pour des parcours mémorables.
                </p>
                <Link href="/services" className="inline-flex items-center text-exp-black font-semibold group-hover:text-exp-yellow transition-colors">
                  En savoir plus
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </Card>

            {/* Service 4 */}
            <Card className="group hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-exp-teal bg-gradient-to-br from-exp-white to-exp-teal/5 transform hover:-translate-y-2">
              <div className="p-8 space-y-6">
                <div className="w-16 h-16 bg-exp-teal rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <svg className="w-8 h-8 text-exp-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-exp-black group-hover:text-exp-teal transition-colors">
                  Mesure de Performance
                </h3>
                <p className="text-exp-gray leading-relaxed">
                  Outils d'analyse et tableaux de bord pour mesurer l'impact de vos actions en temps réel.
                </p>
                <Link href="/services" className="inline-flex items-center text-exp-black font-semibold group-hover:text-exp-teal transition-colors">
                  En savoir plus
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </Card>

            {/* Service 5 */}
            <Card className="group hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-exp-yellow bg-gradient-to-br from-exp-white to-exp-yellow/5 transform hover:-translate-y-2">
              <div className="p-8 space-y-6">
                <div className="w-16 h-16 bg-exp-yellow rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <svg className="w-8 h-8 text-exp-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-exp-black group-hover:text-exp-yellow transition-colors">
                  Appels d'Offres
                </h3>
                <p className="text-exp-gray leading-relaxed">
                  Accompagnement stratégique pour la gestion et la réponse aux appels d'offres complexes.
                </p>
                <Link href="/services" className="inline-flex items-center text-exp-black font-semibold group-hover:text-exp-yellow transition-colors">
                  En savoir plus
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </Card>

            {/* CTA Card */}
            <Card className="bg-gradient-to-br from-exp-black to-exp-teal text-exp-white border-2 border-exp-yellow transform hover:-translate-y-2 transition-all duration-500">
              <div className="p-8 space-y-6 flex flex-col justify-center h-full">
                <h3 className="text-3xl font-bold">
                  Besoin d'un service sur mesure ?
                </h3>
                <p className="text-exp-white/80 leading-relaxed">
                  Discutons ensemble de vos besoins spécifiques
                </p>
                <Link href="/contact">
                  <Button className="bg-exp-yellow text-exp-black hover:bg-exp-yellow/90 font-bold w-full py-4 text-lg">
                    Contactez-nous →
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Philosophy Section - Avec design asymétrique */}
      <section className="py-32 bg-gradient-to-br from-exp-black via-exp-teal/20 to-exp-black text-exp-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-exp-yellow/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-exp-teal/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                Notre <span className="bg-exp-yellow text-exp-black px-4 py-1 rounded">Raison d'Être</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <p className="text-2xl font-light leading-relaxed text-exp-white/90">
                  Nous sommes plus qu'une agence : nous sommes vos{' '}
                  <span className="text-exp-yellow font-semibold">partenaires stratégiques</span>, 
                  déterminés à transformer vos ambitions en succès tangibles.
                </p>
                <p className="text-xl text-exp-white/70 leading-relaxed">
                  Notre approche unique combine écoute active, expertise pointue et créativité débridée 
                  pour créer des expériences qui marquent les esprits et génèrent des résultats mesurables.
                </p>
                <Link href="/a-propos">
                  <Button size="lg" className="bg-exp-yellow text-exp-black hover:bg-exp-yellow/90 font-bold px-10 py-5 text-lg">
                    Découvrir notre histoire →
                  </Button>
                </Link>
              </div>

              <div className="space-y-6">
                <div className="bg-exp-white/10 backdrop-blur-sm p-8 rounded-2xl border-2 border-exp-yellow/30 hover:border-exp-yellow transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-exp-yellow rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-exp-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Vision</h3>
                      <p className="text-exp-white/70">Voir au-delà de l'évident pour révéler le potentiel inexploité</p>
                    </div>
                  </div>
                </div>

                <div className="bg-exp-white/10 backdrop-blur-sm p-8 rounded-2xl border-2 border-exp-teal/30 hover:border-exp-teal transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-exp-teal rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-exp-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Action</h3>
                      <p className="text-exp-white/70">Transformer les idées en réalité avec agilité et détermination</p>
                    </div>
                  </div>
                </div>

                <div className="bg-exp-white/10 backdrop-blur-sm p-8 rounded-2xl border-2 border-exp-yellow/30 hover:border-exp-yellow transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-exp-yellow rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-exp-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Impact</h3>
                      <p className="text-exp-white/70">Créer des résultats mesurables qui dépassent les attentes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Bold et impactant */}
      <section className="py-32 bg-exp-yellow relative overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-10">
            <h2 className="text-5xl md:text-7xl font-bold text-exp-black leading-tight">
              Prêt à transformer vos ambitions en <span className="italic">réalité</span> ?
            </h2>
            <p className="text-2xl text-exp-black/80 max-w-2xl mx-auto leading-relaxed">
              Discutons ensemble d'une stratégie à la hauteur de vos objectifs
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/contact">
                <Button size="lg" className="bg-exp-black text-exp-white hover:bg-exp-black/90 font-bold px-12 py-6 text-xl shadow-2xl transform hover:scale-105 transition-all duration-300">
                  Passez à l'action ! →
                </Button>
              </Link>
              <Link href="/realisations">
                <Button size="lg" variant="outline" className="border-2 border-exp-black text-exp-black hover:bg-exp-black hover:text-exp-white font-bold px-12 py-6 text-xl transition-all duration-300">
                  Voir nos réalisations
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ExpFooter />
    </div>
  );
}
