import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../material.module';

// icons
import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';

// routes
import { ControlPanelComponentsRoutes } from './control-panel.routing';

// control-panel components
import { AppShipmentListComponent } from './listShipment/listShipment.component';

import { AppShipmentCreateComponent } from './createShipment/createShipment.component';
import { AppEmployeeListComponent } from './listEmployee/listEmployee.component';
import { AppPackageListComponent } from './listPackage/listPackage.component';
import { AppCarrierComponent } from './listCarrier/listCarrier.component';

@NgModule({
  imports: [
  
    CommonModule,
    RouterModule.forChild(ControlPanelComponentsRoutes),
    MaterialModule,
    FormsModule,
    TablerIconsModule.pick(TablerIcons),
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
