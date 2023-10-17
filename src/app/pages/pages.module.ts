import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PagesRoutes } from './pages.routing.module';
import { MaterialModule } from '../material.module';

import { AppDashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [AppDashboardComponent],
  imports: [MaterialModule, RouterModule.forChild(PagesRoutes)],
})
export class PagesModule {}
