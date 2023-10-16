import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material.module';

// icons
import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';

import { UiComponentsRoutes } from './ui-components.routing';

// ui components
import { AppShipmentListComponent } from './listShipment/listShipment.component';

import { MatNativeDateModule } from '@angular/material/core';
import { AppShipmentCreateComponent } from './createShipment/createShipment.component';
import { AppEmployeeListComponent } from './listEmployee/listEmployee.component';
import { AppPackageListComponent } from './listPackage/listPackage.component';
import { AppCarrierComponent } from './listCarrier/listCarrier.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(UiComponentsRoutes),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    TablerIconsModule.pick(TablerIcons),
    MatNativeDateModule,
  ],
  declarations: [
    AppShipmentListComponent,
    AppShipmentCreateComponent,
    AppPackageListComponent,
    AppEmployeeListComponent,
    AppCarrierComponent,
  ],
})
export class UicomponentsModule {}
