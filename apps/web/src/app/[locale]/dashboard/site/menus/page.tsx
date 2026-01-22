'use client';

import { PageHeader, PageContainer } from '@/components/layout';
import { MenusManager } from '@/components/site/MenusManager';
import ProtectedRoute from '@/components/auth/ProtectedRoute';
import MotionDiv from '@/components/motion/MotionDiv';

export default function MenusPage() {
  return (
    <ProtectedRoute>
      <PageContainer>
        <MotionDiv variant="slideUp" duration="normal" className="space-y-2xl">
          <MotionDiv variant="fade" delay={100}>
            <PageHeader
              title="Gestion des Menus"
              description="Créez et gérez les menus de navigation du site"
              breadcrumbs={[
                { label: 'Dashboard', href: '/dashboard' },
                { label: 'Site', href: '/dashboard/site' },
                { label: 'Menus' },
              ]}
            />
          </MotionDiv>
          <MotionDiv variant="slideUp" delay={200}>
            <div className="mt-8">
              <MenusManager />
            </div>
          </MotionDiv>
        </MotionDiv>
      </PageContainer>
    </ProtectedRoute>
  );
}
