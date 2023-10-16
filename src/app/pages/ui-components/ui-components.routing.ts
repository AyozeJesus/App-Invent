import { Routes } from '@angular/router';

// ui
import { AppShipmentListComponent } from './listShipment/listShipment.component';
import { AppShipmentCreateComponent } from './createShipment/createShipment.component';
import { AppPackageListComponent } from './listPackage/listPackage.component';
import { AppEmployeeListComponent } from './listEmployee/listEmployee.component';
import { AppCarrierComponent } from './listCarrier/listCarrier.component';
import { AuthGuard } from 'src/app/guards/auth.guard';
AuthGuard;

export const UiComponentsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'list_shipment',
        canActivate: [AuthGuard],
        component: AppShipmentListComponent,
      },
      {
        path: 'create_shipment',
        canActivate: [AuthGuard],
        component: AppShipmentCreateComponent,
      },
      {
        path: 'list_package',
        canActivate: [AuthGuard],
        component: AppPackageListComponent,
      },
      {
        path: 'list_employee',
        canActivate: [AuthGuard],
        component: AppEmployeeListComponent,
      },
      {
        path: 'list_carrier',
        canActivate: [AuthGuard],
        component: AppCarrierComponent,
      },
    ],
  },
];
