/**
 * Partenaires Page
 * 
 * Page displaying partners information
 */

'use client';

import { PageHeader, PageContainer } from '@/components/layout';

export default function PartenairesPage() {
  return (
    <PageContainer>
      <PageHeader
        title="Nos Partenaires"
        description="Découvrez nos partenaires et collaborateurs"
        breadcrumbs={[
          { label: 'Accueil', href: '/' },
          { label: 'Partenaires' },
        ]}
      />

      <div className="mt-8 max-w-4xl">
        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground">
            Cette page est en cours de construction. Les informations sur nos partenaires seront bientôt disponibles.
          </p>
        </div>
      </div>
    </PageContainer>
  );
}
