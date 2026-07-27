import type { NavItem } from '../types';

export const mainNavItems: NavItem[] = [
  { label: 'Categorías', href: '/categories', icon: 'grid' },
  { label: 'Acerca de', href: '/about', icon: 'info' },
];

export const sidebarNavItems: NavItem[] = [
  { label: 'Explorar', href: '/', icon: 'compass' },
  { label: 'Software', href: '/categories/desarrollo-de-software', icon: 'code' },
  { label: 'Imágenes', href: '/categories/creacion-de-imagenes-y-diseno', icon: 'image' },
  { label: 'Video', href: '/categories/creacion-de-video-y-contenido', icon: 'video' },
  { label: 'Guías', href: '/categories/guias-y-consejos-de-prompts', icon: 'book' },
];

export const footerNavItems: NavItem[] = [
  { label: 'API', href: '#' },
  { label: 'GitHub', href: '#' },
  { label: 'Discord', href: '#' },
];

export const mobileBottomNavItems: NavItem[] = [
  { label: 'Explorar', href: '/', icon: 'compass' },
  { label: 'Buscar', href: '/search', icon: 'search' },
  { label: 'Guardados', href: '#', icon: 'bookmark' },
  { label: 'Info', href: '/about', icon: 'info' },
];
