/**
 * Ressources Page
 * 
 * Page displaying resources and useful links
 */

'use client';

import { PageHeader, PageContainer } from '@/components/layout';

export default function RessourcesPage() {
  return (
    <PageContainer>
      <PageHeader
        title="Nos Ressources"
        description="Découvrez nos ressources et outils pour vous accompagner"
        breadcrumbs={[
          { label: 'Accueil', href: '/' },
          { label: 'Ressources' },
        ]}
      />

      <div className="mt-8 max-w-4xl">
        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground">
            Cette page est en cours de construction. Nos ressources seront bientôt disponibles.
          </p>
        </div>
      </div>
    </PageContainer>
  );
}
