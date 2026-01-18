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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-exp-black text-exp-white">
        <div className="absolute inset-0 bg-gradient-to-br from-exp-black via-exp-black/95 to-exp-teal/20" />
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Logo */}
            <div className="inline-block">
              <h1 className="text-5xl md:text-7xl font-bold">
                <span className="relative">
                  <span className="bg-exp-yellow text-exp-black px-4 py-2">exp</span>
                  <span className="ml-2">érience collective</span>
                </span>
              </h1>
            </div>

            {/* Tagline */}
            <p className="text-2xl md:text-3xl font-light text-exp-white/90">
              Comprendre pour oser, <span className="text-exp-yellow">oser</span> pour comprendre
            </p>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
              <svg 
                className="w-6 h-6 text-exp-yellow" 
                fill="none" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-exp-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-exp-black mb-4 text-center">
            Nos <span className="bg-exp-yellow px-2">services</span>
          </h2>
          <p className="text-xl text-exp-gray text-center mb-16 max-w-3xl mx-auto">
            Des solutions personnalisées pour transformer vos ambitions en réalité
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Service 1 */}
            <Card className="group hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-exp-yellow">
              <div className="p-6 space-y-4">
                <div className="w-12 h-12 bg-exp-yellow rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-exp-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-exp-black">
                  Accompagnement stratégique
                </h3>
                <p className="text-exp-gray leading-relaxed">
                  CMO on demand et stratégie globale pour propulser votre entreprise vers de nouveaux sommets. 
                  Nous vous accompagnons dans la définition et l'exécution de votre vision stratégique.
                </p>
                <Link href="/exp/services/accompagnement-strategique">
                  <Button variant="ghost" className="text-exp-black hover:text-exp-yellow group-hover:translate-x-2 transition-transform">
                    En savoir plus →
                  </Button>
                </Link>
              </div>
            </Card>

            {/* Service 2 */}
            <Card className="group hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-exp-yellow">
              <div className="p-6 space-y-4">
                <div className="w-12 h-12 bg-exp-yellow rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-exp-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-exp-black">
                  Image de marque et marketing
                </h3>
                <p className="text-exp-gray leading-relaxed">
                  Créez une identité forte et cohérente qui résonne avec votre audience. 
                  De la stratégie de marque aux campagnes marketing, nous donnons vie à votre vision.
                </p>
                <Link href="/exp/services/image-de-marque">
                  <Button variant="ghost" className="text-exp-black hover:text-exp-yellow group-hover:translate-x-2 transition-transform">
                    En savoir plus →
                  </Button>
                </Link>
              </div>
            </Card>

            {/* Service 3 */}
            <Card className="group hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-exp-yellow">
              <div className="p-6 space-y-4">
                <div className="w-12 h-12 bg-exp-yellow rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-exp-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-exp-black">
                  Expérience client
                </h3>
                <p className="text-exp-gray leading-relaxed">
                  Transformation digitale et optimisation de l'expérience client pour créer des parcours mémorables. 
                  Placez vos clients au cœur de votre stratégie.
                </p>
                <Link href="/exp/services/experience-client">
                  <Button variant="ghost" className="text-exp-black hover:text-exp-yellow group-hover:translate-x-2 transition-transform">
                    En savoir plus →
                  </Button>
                </Link>
              </div>
            </Card>

            {/* Service 4 */}
            <Card className="group hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-exp-yellow">
              <div className="p-6 space-y-4">
                <div className="w-12 h-12 bg-exp-yellow rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-exp-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-exp-black">
                  Mesure de performance
                </h3>
                <p className="text-exp-gray leading-relaxed">
                  Outils d'analyse et tableaux de bord pour mesurer l'impact de vos actions. 
                  Prenez des décisions éclairées basées sur des données concrètes.
                </p>
                <Link href="/exp/services/mesure-performance">
                  <Button variant="ghost" className="text-exp-black hover:text-exp-yellow group-hover:translate-x-2 transition-transform">
                    En savoir plus →
                  </Button>
                </Link>
              </div>
            </Card>

            {/* Service 5 */}
            <Card className="group hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-exp-yellow">
              <div className="p-6 space-y-4">
                <div className="w-12 h-12 bg-exp-yellow rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-exp-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-exp-black">
                  Appels d'offres
                </h3>
                <p className="text-exp-gray leading-relaxed">
                  Accompagnement stratégique pour la gestion et la réponse aux appels d'offres. 
                  Maximisez vos chances de succès avec des propositions percutantes.
                </p>
                <Link href="/exp/services/appels-offres">
                  <Button variant="ghost" className="text-exp-black hover:text-exp-yellow group-hover:translate-x-2 transition-transform">
                    En savoir plus →
                  </Button>
                </Link>
              </div>
            </Card>
          </div>

          <div className="text-center">
            <Link href="/exp/realisations">
              <Button size="lg" className="bg-exp-yellow text-exp-black hover:bg-exp-yellow/90 font-bold px-8 py-6 text-lg">
                Voir nos réalisations
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-exp-black text-exp-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold">
                Notre <span className="bg-exp-yellow text-exp-black px-2">raison d'être</span>
              </h2>
              <p className="text-xl text-exp-white/80 leading-relaxed">
                Chez Expérience Collective, nous croyons que <span className="text-exp-yellow">comprendre</span> profondément 
                vos défis est la clé pour <span className="text-exp-yellow">oser</span> proposer des solutions innovantes. 
                Notre approche collaborative transforme les ambitions en réalisations concrètes.
              </p>
              <p className="text-xl text-exp-white/80 leading-relaxed">
                Nous sommes plus qu'une agence : nous sommes vos <span className="text-exp-yellow">partenaires stratégiques</span>, 
                engagés à faire rayonner votre marque et à propulser votre croissance.
              </p>
              <div className="pt-4">
                <Link href="/exp/a-propos">
                  <Button variant="outline" size="lg" className="border-exp-yellow text-exp-yellow hover:bg-exp-yellow hover:text-exp-black font-bold">
                    En apprendre plus sur nous
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative h-96 lg:h-full min-h-[400px] rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-exp-yellow/20 to-exp-teal/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="text-6xl font-bold text-exp-yellow">
                    <span className="bg-exp-yellow text-exp-black px-4 py-2 rounded-lg">exp</span>
                  </div>
                  <p className="text-2xl text-exp-white/60">L'encre jaune qui se dilue</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-exp-yellow">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-exp-black mb-6">
            Prêt à transformer vos ambitions en réalité ?
          </h2>
          <p className="text-xl text-exp-black/80 mb-8 max-w-2xl mx-auto">
            Discutons ensemble d'une stratégie à la hauteur de vos ambitions
          </p>
          <Link href="/exp/contact">
            <Button size="lg" className="bg-exp-black text-exp-white hover:bg-exp-black/90 font-bold px-12 py-6 text-lg">
              Passez à l'action !
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
