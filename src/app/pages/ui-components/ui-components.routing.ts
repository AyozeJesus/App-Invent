import { Routes } from '@angular/router';

// ui
import { AppShipmentListComponent } from './listShipment/listShipment.component';
import { AppShipmentCreateComponent } from './createShipment/createShipment.component';

export const UiComponentsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'list_shipment',
        component: AppShipmentListComponent,
      },
      {
        path: 'create_shipment',
        component: AppShipmentCreateComponent,
      },
    ],
  },
];
