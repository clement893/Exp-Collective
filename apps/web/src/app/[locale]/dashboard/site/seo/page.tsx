'use client';

import { PageHeader, PageContainer } from '@/components/layout';
import SEOManager from '@/components/site/SEOManager';
import ProtectedRoute from '@/components/auth/ProtectedRoute';
import MotionDiv from '@/components/motion/MotionDiv';

export default function SEOPage() {
  return (
    <ProtectedRoute>
      <PageContainer>
        <MotionDiv variant="slideUp" duration="normal" className="space-y-2xl">
          <MotionDiv variant="fade" delay={100}>
            <PageHeader
              title="Configuration SEO"
              description="Configurez les paramètres SEO du site"
              breadcrumbs={[
                { label: 'Dashboard', href: '/dashboard' },
                { label: 'Site', href: '/dashboard/site' },
                { label: 'SEO' },
              ]}
            />
          </MotionDiv>
          <MotionDiv variant="slideUp" delay={200}>
            <div className="mt-8">
              <SEOManager />
            </div>
          </MotionDiv>
        </MotionDiv>
      </PageContainer>
    </ProtectedRoute>
  );
}
