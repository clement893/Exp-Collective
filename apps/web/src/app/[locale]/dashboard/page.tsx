'use client';

// Force dynamic rendering to avoid static generation
export const dynamic = 'force-dynamic';
export const dynamicParams = true;

import { useAuthStore } from '@/lib/store';
import { PageHeader } from '@/components/layout';
import { ErrorBoundary } from '@/components/errors/ErrorBoundary';
import MotionDiv from '@/components/motion/MotionDiv';
import CMSDashboard from '@/components/dashboard/CMSDashboard';
import { useTranslations } from 'next-intl';

function DashboardContent() {
  const { user } = useAuthStore();
  const t = useTranslations('dashboard');

  return (
    <MotionDiv variant="slideUp" duration="normal" className="space-y-2xl">
      {/* Welcome Header */}
      <MotionDiv variant="fade" delay={100}>
        <PageHeader
          title={t('title') || `Bienvenue, ${user?.name || 'Utilisateur'} !`}
          description={t('description') || "Centre de gestion du contenu et du site"}
          breadcrumbs={[
            { label: 'Accueil', href: '/' },
            { label: 'Dashboard CMS' },
          ]}
        />
      </MotionDiv>

      {/* CMS Dashboard */}
      <MotionDiv variant="slideUp" delay={200}>
        <CMSDashboard />
      </MotionDiv>
    </MotionDiv>
  );
}

export default function DashboardPage() {
  return (
    <ErrorBoundary>
      <DashboardContent />
    </ErrorBoundary>
  );
}
