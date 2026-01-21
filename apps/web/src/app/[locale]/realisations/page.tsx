'use client';

import { useState } from 'react';
import { Link } from '@/i18n/routing';

const projects = [
  {
    id: 1,
    title: 'Transformation digitale - TechCorp',
    date: '2024',
    service: 'Expérience client',
    client: 'TechCorp Inc.',
    objective: 'Optimiser le parcours client et augmenter la conversion de 50%',
    description: "Refonte complète de l'expérience digitale avec une approche centrée sur l'utilisateur. Mise en place d'outils d'analyse avancés et optimisation continue basée sur les données.",
  },
  {
    id: 2,
    title: 'Repositionnement de marque - InnovSolutions',
    date: '2024',
    service: 'Image de marque',
    client: 'InnovSolutions',
    objective: 'Créer une identité de marque moderne et différenciante',
    description: "Développement d'une nouvelle identité visuelle, stratégie de marque complète et campagne de lancement multi-canal. Résultat : +200% de notoriété en 6 mois.",
  },
  {
    id: 3,
    title: 'Stratégie de croissance - GrowthLab',
    date: '2023',
    service: 'Accompagnement stratégique',
    client: 'GrowthLab',
    objective: "Accélérer la croissance et structurer l'organisation marketing",
    description: "CMO on demand pendant 12 mois pour définir et exécuter la stratégie de croissance. Mise en place d'une équipe marketing performante et de processus optimisés.",
  },
  {
    id: 4,
    title: 'Dashboard analytique - DataFlow',
    date: '2023',
    service: 'Mesure de performance',
    client: 'DataFlow',
    objective: 'Centraliser et visualiser les KPIs critiques en temps réel',
    description: "Conception et développement d'un tableau de bord personnalisé intégrant toutes les sources de données. Automatisation des rapports et alertes intelligentes.",
  },
  {
    id: 5,
    title: "Appel d'offres gouvernemental - PublicServices",
    date: '2023',
    service: "Appels d'offres",
    client: 'PublicServices',
    objective: 'Remporter un contrat gouvernemental stratégique',
    description: "Accompagnement complet de l'analyse des exigences à la rédaction de la proposition. Résultat : contrat remporté avec la note la plus élevée.",
  },
  {
    id: 6,
    title: 'Campagne de lancement - EcoTech',
    date: '2022',
    service: 'Image de marque',
    client: 'EcoTech',
    objective: 'Lancer un nouveau produit sur un marché compétitif',
    description: 'Stratégie de lancement 360° incluant branding, campagne digitale, relations publiques et événementiel. Plus de 10 000 leads qualifiés générés.',
  },
];

export default function RealisationsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedService, setSelectedService] = useState('all');
  const [selectedYear, setSelectedYear] = useState('all');

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.client.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesService = selectedService === 'all' || project.service === selectedService;
    const matchesYear = selectedYear === 'all' || project.date === selectedYear;
    
    return matchesSearch && matchesService && matchesYear;
  });

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFFFFF' }}>
      {/* Hero Section */}
      <section className="py-20" style={{ backgroundColor: '#000000', color: '#FFFFFF' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ color: '#FFFFFF' }}>
              De la vision à <span className="px-2" style={{ backgroundColor: '#FFD400', color: '#000000' }}>la réussite</span>
            </h1>
            <p className="text-xl" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
              Découvrez comment nous avons aidé nos clients à atteindre leurs objectifs
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-12 border-b" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)', borderColor: 'rgba(107, 107, 107, 0.2)' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Search */}
              <div>
                <label htmlFor="search" className="block text-sm font-bold mb-2" style={{ color: '#000000' }}>
                  Rechercher
                </label>
                <input
                  id="search"
                  type="text"
                  placeholder="Mot-clé, client..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border"
                  style={{
                    backgroundColor: '#FFFFFF',
                    color: '#000000',
                    borderColor: '#E2E8F0',
                  }}
                />
              </div>

              {/* Service Filter */}
              <div>
                <label htmlFor="service" className="block text-sm font-bold mb-2" style={{ color: '#000000' }}>
                  Service
                </label>
                <select
                  id="service"
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border"
                  style={{
                    backgroundColor: '#FFFFFF',
                    color: '#000000',
                    borderColor: '#E2E8F0',
                  }}
                >
                  <option value="all">Tous les services</option>
                  <option value="Accompagnement stratégique">Accompagnement stratégique</option>
                  <option value="Image de marque">Image de marque</option>
                  <option value="Expérience client">Expérience client</option>
                  <option value="Mesure de performance">Mesure de performance</option>
                  <option value="Appels d'offres">Appels d'offres</option>
                </select>
              </div>

              {/* Year Filter */}
              <div>
                <label htmlFor="year" className="block text-sm font-bold mb-2" style={{ color: '#000000' }}>
                  Année
                </label>
                <select
                  id="year"
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border"
                  style={{
                    backgroundColor: '#FFFFFF',
                    color: '#000000',
                    borderColor: '#E2E8F0',
                  }}
                >
                  <option value="all">Toutes les années</option>
                  <option value="2024">2024</option>
                  <option value="2023">2023</option>
                  <option value="2022">2022</option>
                </select>
              </div>
            </div>

            {/* Reset Button */}
            {(searchTerm || selectedService !== 'all' || selectedYear !== 'all') && (
              <div className="mt-4 text-center">
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedService('all');
                    setSelectedYear('all');
                  }}
                  className="px-4 py-2 rounded-lg transition-colors"
                  style={{
                    backgroundColor: 'transparent',
                    color: '#6B6B6B',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#000000';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#6B6B6B';
                  }}
                >
                  Réinitialiser les filtres
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {filteredProjects.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-xl" style={{ color: '#6B6B6B' }}>Aucun projet ne correspond à vos critères de recherche.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredProjects.map((project) => (
                  <div
                    key={project.id}
                    className="group rounded-lg border-2 border-transparent hover:border-[#FFD400] transition-all duration-300 shadow-sm hover:shadow-2xl"
                    style={{
                      backgroundColor: '#FFFFFF',
                      borderColor: 'transparent',
                    }}
                  >
                    <div className="p-6 space-y-4">
                      {/* Project Image Placeholder */}
                      <div className="w-full h-48 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(to bottom right, rgba(255, 212, 0, 0.2), rgba(74, 139, 158, 0.2))' }}>
                        <div className="text-center">
                          <div className="text-4xl font-bold mb-2" style={{ color: '#FFD400' }}>
                            <span className="px-3 py-1 rounded" style={{ backgroundColor: '#FFD400', color: '#000000' }}>exp</span>
                          </div>
                          <p className="text-sm" style={{ color: '#6B6B6B' }}>Image du projet</p>
                        </div>
                      </div>

                      {/* Project Info */}
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="inline-block px-3 py-1 text-xs font-bold rounded-full" style={{ backgroundColor: '#FFD400', color: '#000000' }}>
                            {project.service}
                          </span>
                          <span className="text-sm" style={{ color: '#6B6B6B' }}>{project.date}</span>
                        </div>
                        
                        <h3
                          className="text-2xl font-bold transition-colors"
                          style={{ color: '#000000' }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.color = '#FFD400';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.color = '#000000';
                          }}
                        >
                          {project.title}
                        </h3>
                        
                        <p className="text-sm" style={{ color: '#6B6B6B' }}>
                          <span className="font-semibold">Client :</span> {project.client}
                        </p>
                        
                        <p className="text-sm" style={{ color: '#6B6B6B' }}>
                          <span className="font-semibold">Objectif :</span> {project.objective}
                        </p>
                        
                        <p className="leading-relaxed" style={{ color: '#6B6B6B' }}>
                          {project.description}
                        </p>
                      </div>

                      {/* CTA */}
                      <div className="pt-4">
                        <button
                          className="transition-all duration-300 group-hover:translate-x-2"
                          style={{
                            backgroundColor: 'transparent',
                            color: '#000000',
                            border: 'none',
                            padding: 0,
                            cursor: 'pointer',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.color = '#FFD400';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.color = '#000000';
                          }}
                        >
                          Voir le détail →
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20" style={{ backgroundColor: '#000000', color: '#FFFFFF' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center" style={{ color: '#FFFFFF' }}>
              Preuves & <span className="px-2" style={{ backgroundColor: '#FFD400', color: '#000000' }}>Résultats</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold mb-2" style={{ color: '#FFD400' }}>50+</div>
                <p style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Projets réalisés</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2" style={{ color: '#FFD400' }}>95%</div>
                <p style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Clients satisfaits</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2" style={{ color: '#FFD400' }}>+150%</div>
                <p style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Croissance moyenne</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2" style={{ color: '#FFD400' }}>6 ans</div>
                <p style={{ color: 'rgba(255, 255, 255, 0.8)' }}>D&apos;expérience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center" style={{ color: '#000000' }}>
              Ce que disent nos <span className="px-2" style={{ backgroundColor: '#FFD400' }}>clients</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 rounded-lg border-2" style={{ backgroundColor: '#FFFFFF', borderColor: 'rgba(107, 107, 107, 0.2)' }}>
                <div className="space-y-4">
                  <div className="flex gap-1" style={{ color: '#FFD400' }}>
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="italic text-sm" style={{ color: '#6B6B6B' }}>
                    "Des résultats exceptionnels qui ont dépassé toutes nos attentes."
                  </p>
                  <p className="font-bold text-sm" style={{ color: '#000000' }}>Marie D., TechCorp</p>
                </div>
              </div>

              <div className="p-6 rounded-lg border-2" style={{ backgroundColor: '#FFFFFF', borderColor: 'rgba(107, 107, 107, 0.2)' }}>
                <div className="space-y-4">
                  <div className="flex gap-1" style={{ color: '#FFD400' }}>
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="italic text-sm" style={{ color: '#6B6B6B' }}>
                    "Une équipe professionnelle et à l&apos;écoute. Un vrai partenariat."
                  </p>
                  <p className="font-bold text-sm" style={{ color: '#000000' }}>Jean T., GrowthLab</p>
                </div>
              </div>

              <div className="p-6 rounded-lg border-2" style={{ backgroundColor: '#FFFFFF', borderColor: 'rgba(107, 107, 107, 0.2)' }}>
                <div className="space-y-4">
                  <div className="flex gap-1" style={{ color: '#FFD400' }}>
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="italic text-sm" style={{ color: '#6B6B6B' }}>
                    "L&apos;expertise et la créativité dont nous avions besoin."
                  </p>
                  <p className="font-bold text-sm" style={{ color: '#000000' }}>Sophie L., InnovSolutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ backgroundColor: '#FFD400' }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#000000' }}>
            Prêt à écrire votre histoire de succès ?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto" style={{ color: 'rgba(0, 0, 0, 0.8)' }}>
            Faites le premier pas vers vos objectifs
          </p>
          <Link href="/exp/contact">
            <button
              className="px-12 py-6 text-lg font-bold rounded-lg transition-all duration-300"
              style={{
                backgroundColor: '#000000',
                color: '#FFFFFF',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#000000';
              }}
            >
              Passez à l&apos;action !
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
