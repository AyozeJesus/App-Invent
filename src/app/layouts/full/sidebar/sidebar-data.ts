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
    route: '/ui-components/list_shipment',
  },
  {
    displayName: 'Crear envío',
    iconName: 'poker-chip',
    route: '/ui-components/create_shipment',
  },
  {
    navCap: 'Trabajadores',
  },
  {
    displayName: 'Informacion',
    iconName: 'users',
    route: '/ui-components/create_shipment', //Añadir ruta para informacion de trabajadores
  },
  {
    navCap: 'Paquetes',
  },
  {
    displayName: 'Tipos de paquetes',
    iconName: 'box',
    route: '/ui-components/create_shipment', //Añadir ruta informacion de paquetes
  },
  {
    navCap: 'Empresas externas',
  },
  {
    displayName: 'Transportistas',
    iconName: 'truck',
    route: '/ui-components/create_shipment', //Añadir ruta informacion de paquetes
  },
];
