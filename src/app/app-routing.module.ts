import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarriersComponent } from './carriers/components/carriers.component';
import { ShipmentsComponent } from './shipments/components/shipments.component';
import { UsersComponent } from './users/components/users.component';

const routes: Routes = [
  { path: 'carriers', component: CarriersComponent },
  { path: 'shipments', component: ShipmentsComponent },
  { path: 'users', component: UsersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
