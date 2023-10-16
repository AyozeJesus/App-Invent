import { Routes } from '@angular/router';
import { AppDashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from '../guards/auth.guard';

export const PagesRoutes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: AppDashboardComponent,
    data: {
      title: 'Starter Page',
    },
  },
];
