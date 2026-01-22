'use client';

import { useParams } from 'next/navigation';
import { Link } from '@/i18n/routing';
import Image from 'next/image';
import { notFound } from 'next/navigation';

const projectsData = {
  '1': {
    id: 1,
    title: 'Transformation digitale - TechCorp',
    date: '2024',
    service: 'Expérience client',
    client: 'TechCorp Inc.',
    objective: 'Optimiser le parcours client et augmenter la conversion de 50%',
    description: "Refonte complète de l'expérience digitale avec une approche centrée sur l'utilisateur. Mise en place d'outils d'analyse avancés et optimisation continue basée sur les données.",
    image: '/assets/realisations/projet-1.webp',
    results: ['+50% conversion', '+35% satisfaction', '2M€ revenus'],
    challenge: "TechCorp faisait face à un taux de conversion stagnant et une expérience utilisateur fragmentée. Les clients abandonnaient leur parcours d'achat à différentes étapes, sans qu'il soit possible d'identifier précisément les points de friction.",
    solution: "Nous avons mené une analyse approfondie du parcours utilisateur, combinant données quantitatives (analytics, heatmaps) et qualitatives (interviews, tests utilisateurs). Sur cette base, nous avons redesigné l'ensemble de l'expérience digitale en appliquant les principes du design thinking et de l'optimisation continue.",
    impact: "En 6 mois, le taux de conversion a augmenté de 50%, la satisfaction client de 35%, et les revenus générés ont atteint 2M€. L'approche data-driven mise en place permet désormais à TechCorp d'optimiser en continu son expérience digitale.",
    testimonial: {
      quote: "L'équipe d'Expérience Collective a transformé notre approche digitale. Leur méthodologie rigoureuse et leur expertise nous ont permis d'atteindre des résultats que nous n'aurions jamais crus possibles.",
      author: "Marie Dubois",
      role: "Directrice Marketing, TechCorp Inc."
    }
  },
  '2': {
    id: 2,
    title: 'Repositionnement de marque - InnovSolutions',
    date: '2024',
    service: 'Image de marque',
    client: 'InnovSolutions',
    objective: 'Créer une identité de marque moderne et différenciante',
    description: "Développement d'une nouvelle identité visuelle, stratégie de marque complète et campagne de lancement multi-canal. Résultat : +200% de notoriété en 6 mois.",
    image: '/assets/realisations/projet-2.jpg',
    results: ['+200% notoriété', '15 prix design', 'Top 10 marques'],
    challenge: "InnovSolutions, malgré son excellence technique, souffrait d'une image de marque vieillissante qui ne reflétait pas son positionnement innovant. La marque peinait à se différencier dans un marché saturé.",
    solution: "Nous avons orchestré un repositionnement complet de la marque, démarrant par des ateliers stratégiques avec les parties prenantes. Nous avons développé une nouvelle plateforme de marque, une identité visuelle moderne et distinctive, et déployé une campagne de lancement intégrée sur tous les canaux.",
    impact: "La notoriété de la marque a bondi de 200% en 6 mois. La nouvelle identité a remporté 15 prix de design et InnovSolutions figure désormais dans le top 10 des marques les plus innovantes de son secteur.",
    testimonial: {
      quote: "Le travail réalisé dépasse toutes nos attentes. Notre nouvelle identité nous a permis de nous positionner comme leader d'opinion dans notre industrie.",
      author: "Sophie Laurent",
      role: "CEO, InnovSolutions"
    }
  },
  '3': {
    id: 3,
    title: 'Stratégie de croissance - GrowthLab',
    date: '2023',
    service: 'Accompagnement stratégique',
    client: 'GrowthLab',
    objective: "Accélérer la croissance et structurer l'organisation marketing",
    description: "CMO on demand pendant 12 mois pour définir et exécuter la stratégie de croissance. Mise en place d'une équipe marketing performante et de processus optimisés.",
    image: '/assets/realisations/projet-3.jpg',
    results: ['+150% croissance', '12 mois CMO', '8 recrutements'],
    challenge: "GrowthLab, une startup en forte croissance, manquait de structure marketing et d'expertise senior pour passer à l'échelle. L'absence de stratégie claire freinait le développement commercial.",
    solution: "Nous avons fourni un CMO on demand pendant 12 mois pour structurer l'organisation marketing. Définition de la stratégie go-to-market, mise en place des processus, recrutement et formation d'une équipe performante, et pilotage des premières campagnes d'acquisition.",
    impact: "La croissance a accéléré de 150% sur l'année. Une équipe marketing de 8 personnes a été recrutée et formée. Les processus mis en place continuent de porter leurs fruits après notre mission.",
    testimonial: {
      quote: "Avoir un CMO expérimenté à nos côtés a été un game-changer. Nous avons structuré notre marketing et accéléré notre croissance bien au-delà de nos objectifs.",
      author: "Jean Tremblay",
      role: "Fondateur, GrowthLab"
    }
  },
  '4': {
    id: 4,
    title: 'Dashboard analytique - DataFlow',
    date: '2023',
    service: 'Mesure de performance',
    client: 'DataFlow',
    objective: 'Centraliser et visualiser les KPIs critiques en temps réel',
    description: "Conception et développement d'un tableau de bord personnalisé intégrant toutes les sources de données. Automatisation des rapports et alertes intelligentes.",
    image: '/assets/realisations/projet-4.jpg',
    results: ['-80% temps analyse', '20 KPIs live', '100% automatisé'],
    challenge: "DataFlow perdait un temps considérable à compiler manuellement des données provenant de multiples sources. L'absence de vision en temps réel des KPIs critiques ralentissait la prise de décision.",
    solution: "Nous avons conçu et développé un dashboard analytique sur mesure, intégrant automatiquement toutes les sources de données de l'entreprise. Le système inclut des alertes intelligentes et des rapports automatisés, permettant une vision en temps réel de la performance.",
    impact: "Le temps consacré à l'analyse a diminué de 80%. Les équipes ont désormais accès à 20 KPIs en temps réel et les rapports sont 100% automatisés, libérant du temps pour l'action stratégique.",
    testimonial: {
      quote: "Ce dashboard a révolutionné notre façon de travailler. Nous prenons désormais des décisions basées sur des données en temps réel plutôt que sur des rapports obsolètes.",
      author: "Alexandre Martin",
      role: "Directeur des Opérations, DataFlow"
    }
  },
  '5': {
    id: 5,
    title: "Appel d'offres gouvernemental - PublicServices",
    date: '2023',
    service: "Appels d'offres",
    client: 'PublicServices',
    objective: 'Remporter un contrat gouvernemental stratégique',
    description: "Accompagnement complet de l'analyse des exigences à la rédaction de la proposition. Résultat : contrat remporté avec la note la plus élevée.",
    image: '/assets/realisations/projet-5.jpg',
    results: ['Note 98/100', '5M€ contrat', '3 ans durée'],
    challenge: "PublicServices visait un contrat gouvernemental majeur mais manquait d'expérience dans la réponse aux appels d'offres publics. La complexité du cahier des charges et la concurrence féroce rendaient le défi considérable.",
    solution: "Nous avons accompagné PublicServices de bout en bout : analyse approfondie du cahier des charges, identification des critères de différenciation, structuration de la proposition, rédaction des contenus techniques et financiers, et préparation à la soutenance orale.",
    impact: "Le contrat a été remporté avec une note exceptionnelle de 98/100. D'une valeur de 5M€ sur 3 ans, ce contrat a permis à PublicServices de se positionner comme acteur majeur du secteur public.",
    testimonial: {
      quote: "Sans leur expertise, nous n'aurions jamais remporté ce contrat. Leur connaissance des appels d'offres publics et leur rigueur ont fait toute la différence.",
      author: "Caroline Bergeron",
      role: "Directrice Commerciale, PublicServices"
    }
  },
  '6': {
    id: 6,
    title: 'Campagne de lancement - EcoTech',
    date: '2022',
    service: 'Image de marque',
    client: 'EcoTech',
    objective: 'Lancer un nouveau produit sur un marché compétitif',
    description: 'Stratégie de lancement 360° incluant branding, campagne digitale, relations publiques et événementiel. Plus de 10 000 leads qualifiés générés.',
    image: '/assets/realisations/projet-6.jpg',
    results: ['10K leads', '+300% trafic', '50 médias'],
    challenge: "EcoTech s'apprêtait à lancer un produit innovant sur un marché déjà saturé. Le défi était de créer du bruit et de générer rapidement une base de leads qualifiés pour assurer le succès du lancement.",
    solution: "Nous avons orchestré une stratégie de lancement 360° : création de l'identité de marque du produit, campagne digitale multi-canal, relations presse et influenceurs, événement de lancement, et activation sur les réseaux sociaux. Chaque point de contact était soigneusement coordonné pour maximiser l'impact.",
    impact: "Le lancement a généré plus de 10 000 leads qualifiés, le trafic web a explosé de 300%, et le produit a été couvert par 50 médias. EcoTech a réussi son pari de s'imposer rapidement sur ce marché compétitif.",
    testimonial: {
      quote: "Le lancement de notre produit a été un succès retentissant. L'approche 360° et l'exécution impeccable ont dépassé toutes nos espérances.",
      author: "Thomas Gagnon",
      role: "VP Marketing, EcoTech"
    }
  }
};

export default function ProjectDetailPage() {
  const params = useParams();
  const id = params.id as string;
  
  const project = projectsData[id as keyof typeof projectsData];

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Image */}
      <section className="relative h-[70vh] bg-exp-black">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-exp-black via-exp-black/50 to-transparent"></div>
        
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-6 pb-20">
            <div className="max-w-4xl">
              {/* Breadcrumb */}
              <div className="mb-6">
                <Link href="/realisations" className="text-exp-yellow hover:underline font-light">
                  ← Retour aux réalisations
                </Link>
              </div>
              
              {/* Badges */}
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="px-4 py-2 bg-exp-yellow text-exp-black text-sm font-bold rounded-full">
                  {project.service}
                </span>
                <span className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white text-sm font-bold rounded-full">
                  {project.date}
                </span>
              </div>
              
              {/* Title */}
              <h1 className="text-5xl md:text-6xl font-thin text-white mb-4 leading-tight">
                {project.title}
              </h1>
              
              <p className="text-xl text-white/80 font-light">
                {project.client}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Objective Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-thin text-exp-black mb-6">Objectif</h2>
            <p className="text-2xl text-gray-700 font-light leading-relaxed">
              {project.objective}
            </p>
          </div>
        </div>
      </section>

      {/* Challenge, Solution, Impact */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-16">
            {/* Challenge */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-exp-yellow rounded-full flex items-center justify-center">
                  <span className="text-2xl">🎯</span>
                </div>
                <h2 className="text-3xl font-thin text-exp-black">Le défi</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed font-light">
                {project.challenge}
              </p>
            </div>

            {/* Solution */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-exp-yellow rounded-full flex items-center justify-center">
                  <span className="text-2xl">💡</span>
                </div>
                <h2 className="text-3xl font-thin text-exp-black">Notre solution</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed font-light">
                {project.solution}
              </p>
            </div>

            {/* Impact */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-exp-yellow rounded-full flex items-center justify-center">
                  <span className="text-2xl">📈</span>
                </div>
                <h2 className="text-3xl font-thin text-exp-black">L'impact</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed font-light mb-8">
                {project.impact}
              </p>
              
              {/* Results Badges */}
              <div className="flex flex-wrap gap-3">
                {project.results.map((result, index) => (
                  <span
                    key={index}
                    className="px-6 py-3 bg-exp-black text-exp-yellow text-lg font-bold rounded-full"
                  >
                    {result}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-exp-black text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-exp-yellow text-6xl font-serif">"</span>
            </div>
            
            <blockquote className="text-center">
              <p className="text-2xl md:text-3xl font-light leading-relaxed mb-12 italic">
                {project.testimonial.quote}
              </p>
              
              <div className="flex items-center justify-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-exp-yellow to-yellow-600 flex items-center justify-center text-exp-black text-2xl font-bold">
                  {project.testimonial.author.charAt(0)}
                </div>
                <div className="text-left">
                  <div className="font-medium text-white text-lg">{project.testimonial.author}</div>
                  <div className="text-white/70 font-light">{project.testimonial.role}</div>
                </div>
              </div>
            </blockquote>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-thin text-exp-black mb-6 leading-tight">
              Un projet similaire ?
            </h2>
            <p className="text-xl text-gray-600 font-light mb-10">
              Discutons de vos objectifs et de la manière dont nous pouvons vous aider
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="px-10 py-4 bg-exp-yellow text-exp-black font-bold text-lg rounded-lg hover:bg-exp-black hover:text-exp-yellow hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  Contactez-nous
                </button>
              </Link>
              <Link href="/realisations">
                <button className="px-10 py-4 bg-white text-exp-black font-bold text-lg rounded-lg border-2 border-gray-300 hover:border-exp-yellow transition-all duration-300">
                  Voir d'autres projets
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
