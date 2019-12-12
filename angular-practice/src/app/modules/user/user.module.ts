import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './user.rounting';
import { HomeComponent } from '../../modules/userComponent/home/home.component';
import { UserLayoutComponent } from '../../components/_layout/user-layout/user-layout.component';
import { DashboardComponent } from '../../modules/userComponent/dashboard/dashboard.component';

@NgModule({
  declarations: [
    HomeComponent,
    UserLayoutComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    routing
  ],
  exports:[
    HomeComponent,
    UserLayoutComponent,
    DashboardComponent
  ]
})
export class UserModule { }
