import { NgModule ,ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../../modules/userComponent/home/home.component';
import { UserLayoutComponent } from '../../components/_layout/user-layout/user-layout.component';
import { DashboardComponent } from '../../modules/userComponent/dashboard/dashboard.component';

export const routes: Routes = [

  {path: '', component: UserLayoutComponent},
  {path: 'user/home',component: HomeComponent},
  {path: 'user/dashboard',component: DashboardComponent},

  
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);

