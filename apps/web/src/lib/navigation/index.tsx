/**
 * Navigation Structure
 * 
 * Centralized navigation configuration for the application sidebar.
 * Supports grouped navigation items with collapsible sections.
 */

import { ReactNode } from 'react';
import { 
  LayoutDashboard, 
  Users, 
  UserCog, 
  Shield, 
  FolderKanban, 
  FileText, 
  Image, 
  Settings, 
  User, 
  Lock, 
  Sliders, 
  FileCheck, 
  Palette, 
  Cog,
  GraduationCap,
  Folder,
  Tag,
  Calendar,
  Layout,
  Menu as MenuIcon,
  Search
} from 'lucide-react';

export interface NavigationItem {
  name: string;
  href: string;
  icon?: ReactNode;
  badge?: string | number;
}

export interface NavigationGroup {
  name: string;
  icon?: ReactNode;
  items: NavigationItem[];
  collapsible?: boolean;
  defaultOpen?: boolean;
}

export interface NavigationConfig {
  items: (NavigationItem | NavigationGroup)[];
}

/**
 * Get default navigation structure
 * Can be customized based on user permissions
 */
export function getNavigationConfig(isAdmin: boolean): NavigationConfig {
  const config: NavigationConfig = {
    items: [
      // Dashboard (non-grouped)
      {
        name: 'Dashboard',
        href: '/dashboard',
        icon: <LayoutDashboard className="w-5 h-5" />,
      },
      // CMS (collapsible group)
      {
        name: 'CMS',
        icon: <FolderKanban className="w-5 h-5" />,
        items: [
          {
            name: 'Vue d\'ensemble',
            href: '/dashboard',
            icon: <LayoutDashboard className="w-5 h-5" />,
          },
          {
            name: 'Pages',
            href: '/content/pages',
            icon: <FileText className="w-5 h-5" />,
          },
          {
            name: 'Articles',
            href: '/content/posts',
            icon: <FileCheck className="w-5 h-5" />,
          },
          {
            name: 'Médias',
            href: '/content/media',
            icon: <Image className="w-5 h-5" />,
          },
          {
            name: 'Catégories',
            href: '/content/categories',
            icon: <Folder className="w-5 h-5" />,
          },
          {
            name: 'Tags',
            href: '/content/tags',
            icon: <Tag className="w-5 h-5" />,
          },
          {
            name: 'Templates',
            href: '/content/templates',
            icon: <Layout className="w-5 h-5" />,
          },
          {
            name: 'Planification',
            href: '/content/schedule',
            icon: <Calendar className="w-5 h-5" />,
          },
        ],
        collapsible: true,
        defaultOpen: true,
      },
      // Site (collapsible group)
      {
        name: 'Site',
        icon: <Settings className="w-5 h-5" />,
        items: [
          {
            name: 'Menus',
            href: '/dashboard/site/menus',
            icon: <MenuIcon className="w-5 h-5" />,
          },
          {
            name: 'SEO',
            href: '/dashboard/site/seo',
            icon: <Search className="w-5 h-5" />,
          },
        ],
        collapsible: true,
        defaultOpen: false,
      },
      // Gestion (collapsible group)
      {
        name: 'Gestion',
        icon: <Users className="w-5 h-5" />,
        items: [
          {
            name: 'Utilisateurs',
            href: '/admin/users',
            icon: <Users className="w-5 h-5" />,
          },
          {
            name: 'Équipes',
            href: '/admin/teams',
            icon: <UserCog className="w-5 h-5" />,
          },
          {
            name: 'Rôles',
            href: '/admin/roles',
            icon: <Shield className="w-5 h-5" />,
          },
        ],
        collapsible: true,
        defaultOpen: false,
      },
      // Contenu (collapsible group)
      {
        name: 'Contenu',
        icon: <FolderKanban className="w-5 h-5" />,
        items: [
          {
            name: 'Pages',
            href: '/admin/pages',
            icon: <FileText className="w-5 h-5" />,
          },
          {
            name: 'Articles',
            href: '/admin/articles',
            icon: <FileCheck className="w-5 h-5" />,
          },
          {
            name: 'Médias',
            href: '/admin/media',
            icon: <Image className="w-5 h-5" />,
          },
        ],
        collapsible: true,
        defaultOpen: false,
      },
      // Paramètres (collapsible group)
      {
        name: 'Paramètres',
        icon: <Settings className="w-5 h-5" />,
        items: [
          {
            name: 'Profil',
            href: '/settings/profile',
            icon: <User className="w-5 h-5" />,
          },
          {
            name: 'Sécurité',
            href: '/settings/security',
            icon: <Lock className="w-5 h-5" />,
          },
          {
            name: 'Préférences',
            href: '/settings/preferences',
            icon: <Sliders className="w-5 h-5" />,
          },
        ],
        collapsible: true,
        defaultOpen: false,
      },
    ],
  };

  // Add Admin group only for admins
  if (isAdmin) {
    config.items.push({
      name: 'Admin',
      icon: <Shield className="w-5 h-5" />,
      items: [
        {
          name: 'Masterclass',
          href: '/admin/masterclass',
          icon: <GraduationCap className="w-5 h-5" />,
        },
        {
          name: 'Thèmes',
          href: '/admin/themes',
          icon: <Palette className="w-5 h-5" />,
        },
        {
          name: 'Configuration',
          href: '/admin/settings',
          icon: <Cog className="w-5 h-5" />,
        },
      ],
      collapsible: true,
      defaultOpen: false,
    });
  }

  return config;
}
