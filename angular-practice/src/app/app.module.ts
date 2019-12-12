import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/_layout/header/header.component';
import { HomeComponent } from './modules/userComponent/home/home.component';
import { UserLayoutComponent } from './components/_layout/user-layout/user-layout.component';
import { SharedService } from './service/shared.service';
import { DashboardComponent } from './modules/userComponent/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    UserLayoutComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
