import { Metadata } from 'next';
import { Link } from '@/i18n/routing';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Nos Services - Expérience Collective',
  description: 'Des services personnalisés à vos ambitions. Découvrez comment nous pouvons vous aider à atteindre vos objectifs.',
};

const services = [
  {
    id: 1,
    slug: 'accompagnement-strategique',
    title: 'Accompagnement stratégique global et CMO on demand',
    description: 'Propulsez votre entreprise vers de nouveaux sommets avec notre accompagnement stratégique sur mesure. En tant que CMO on demand, nous vous offrons une expertise de haut niveau pour définir et exécuter votre vision stratégique, sans les coûts d'un poste à temps plein.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    id: 2,
    slug: 'image-de-marque',
    title: 'Image de marque et marketing',
    description: 'Créez une identité de marque forte et cohérente qui résonne profondément avec votre audience cible. De la stratégie de marque initiale aux campagnes marketing percutantes, nous donnons vie à votre vision et amplifions votre présence sur le marché.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
  {
    id: 3,
    slug: 'experience-client',
    title: 'Expérience client et transformation digitale',
    description: 'Transformez votre entreprise pour l'ère numérique en plaçant vos clients au cœur de votre stratégie. Nous optimisons chaque point de contact pour créer des parcours clients mémorables et générer une fidélisation durable.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    id: 4,
    slug: 'mesure-performance',
    title: 'Mesure de performance et outils d'analyse',
    description: 'Prenez des décisions éclairées basées sur des données concrètes. Nos tableaux de bord personnalisés et nos outils d'analyse avancés vous permettent de mesurer précisément l'impact de vos actions et d'optimiser continuellement vos résultats.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    id: 5,
    slug: 'appels-offres',
    title: 'Accompagnement pour la gestion des appels d'offres',
    description: 'Maximisez vos chances de succès dans les appels d'offres avec notre accompagnement stratégique. De l'analyse des exigences à la rédaction de propositions percutantes, nous vous guidons à chaque étape pour vous démarquer de la concurrence.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-exp-white">
      {/* Hero Section */}
      <section className="py-20 bg-exp-black text-exp-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Des services personnalisés à <span className="bg-exp-yellow text-exp-black px-2">vos ambitions</span>
            </h1>
            <p className="text-xl text-exp-white/80">
              Nous transformons vos défis en opportunités de croissance
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-16">
            {services.map((service, index) => (
              <Card 
                key={service.id} 
                className={`group hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-exp-yellow ${
                  index % 2 === 0 ? '' : 'bg-exp-black/5'
                }`}
              >
                <div className="p-8 md:p-12">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                    <div className="md:col-span-2">
                      <div className="w-16 h-16 bg-exp-yellow rounded-lg flex items-center justify-center text-exp-black">
                        {service.icon}
                      </div>
                    </div>
                    
                    <div className="md:col-span-7 space-y-4">
                      <h2 className="text-3xl font-bold text-exp-black">
                        {service.title}
                      </h2>
                      <p className="text-lg text-exp-gray leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                    
                    <div className="md:col-span-3 flex justify-end">
                      <Link href={`/exp/services/${service.slug}`}>
                        <Button 
                          size="lg" 
                          className="bg-exp-black text-exp-white hover:bg-exp-yellow hover:text-exp-black font-bold group-hover:scale-105 transition-transform"
                        >
                          En savoir plus →
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-exp-black text-exp-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">
              Notre <span className="bg-exp-yellow text-exp-black px-2">expertise</span>
            </h2>
            <p className="text-xl text-exp-white/80 leading-relaxed">
              Chez Expérience Collective, nous combinons <span className="text-exp-yellow">stratégie</span>, 
              <span className="text-exp-yellow"> créativité</span> et <span className="text-exp-yellow">données</span> pour 
              propulser votre entreprise vers de nouveaux sommets. Notre approche collaborative et notre expertise 
              multidisciplinaire nous permettent de relever les défis les plus complexes.
            </p>
            <p className="text-xl text-exp-white/80 leading-relaxed">
              Que vous cherchiez à renforcer votre positionnement, à optimiser votre expérience client ou à mesurer 
              l'impact de vos actions, nous sommes là pour vous accompagner à chaque étape de votre transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-exp-black mb-12 text-center">
              Ce que disent nos <span className="bg-exp-yellow px-2">clients</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-8 border-2 border-exp-gray/20">
                <div className="space-y-4">
                  <div className="flex gap-1 text-exp-yellow">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-lg text-exp-gray italic">
                    "L'équipe d'Expérience Collective a transformé notre approche marketing. Leur expertise stratégique 
                    et leur créativité ont propulsé notre marque vers de nouveaux sommets."
                  </p>
                  <div>
                    <p className="font-bold text-exp-black">Marie Dubois</p>
                    <p className="text-sm text-exp-gray">Directrice Marketing, TechCorp</p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border-2 border-exp-gray/20">
                <div className="space-y-4">
                  <div className="flex gap-1 text-exp-yellow">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-lg text-exp-gray italic">
                    "Un partenariat exceptionnel ! Leur accompagnement sur notre transformation digitale a dépassé 
                    toutes nos attentes. Des résultats concrets et mesurables."
                  </p>
                  <div>
                    <p className="font-bold text-exp-black">Jean Tremblay</p>
                    <p className="text-sm text-exp-gray">PDG, InnovSolutions</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-exp-yellow">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-exp-black mb-6">
            Faites le premier pas vers vos objectifs
          </h2>
          <p className="text-xl text-exp-black/80 mb-8 max-w-2xl mx-auto">
            Discutons de vos défis et découvrons ensemble comment nous pouvons vous aider
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
