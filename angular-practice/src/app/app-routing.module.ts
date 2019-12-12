import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './modules/userComponent/home/home.component';
import { DashboardComponent } from './modules/userComponent/dashboard/dashboard.component';

// ALL USERS LAYOUT
import { UserLayoutComponent } from "./components/_layout/user-layout/user-layout.component";

const routes: Routes = [

  {
    path: 'user',
    component: UserLayoutComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'dashboard', component: DashboardComponent },
    ]
  },
  { path: '', redirectTo: 'user/home', pathMatch: 'full' },
  { path: 'user/home', component: UserLayoutComponent },
  { path: '**', redirectTo: 'user/home' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
