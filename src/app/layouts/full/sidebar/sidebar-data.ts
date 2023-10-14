import { NavItem } from './nav-item/nav-item';

export const navItems: NavItem[] = [
  {
    navCap: 'Home',
  },
  {
    displayName: 'Dashboard',
    iconName: 'layout-dashboard',
    route: '/dashboard',
  },
  {
    navCap: 'Envíos',
  },
  {
    displayName: 'Localizar envío',
    iconName: 'rosette',
    route: '/ui-components/badge',
  },
  {
    displayName: 'Crear envío',
    iconName: 'poker-chip',
    route: '/ui-components/chips',
  },
  {
    displayName: 'Mostrar envíos',
    iconName: 'list',
    route: '/ui-components/lists',
  },
];
