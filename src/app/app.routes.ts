import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login';
import { DashboardComponent } from './components/dashboard/dashboard';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '**', redirectTo: '' }
];

console.log('Routes loaded - LoginComponent:', LoginComponent);
console.log('Routes loaded - DashboardComponent:', DashboardComponent);