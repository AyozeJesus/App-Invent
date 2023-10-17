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
    displayName: 'Envíos registrados',
    iconName: 'rosette',
    route: '/control-panel/list_shipment',
  },
  {
    displayName: 'Crear envío',
    iconName: 'poker-chip',
    route: '/control-panel/create_shipment',
  },
  {
    navCap: 'Paquetes',
  },
  {
    displayName: 'Tipos de paquetes',
    iconName: 'box',
    route: '/control-panel/list_package',
  },
  {
    navCap: 'Trabajadores',
  },
  {
    displayName: 'Informacion',
    iconName: 'users',
    route: '/control-panel/list_employee',
  },
  {
    navCap: 'Empresas externas',
  },
  {
    displayName: 'Transportistas',
    iconName: 'truck',
    route: '/control-panel/list_carrier',
  },
];
