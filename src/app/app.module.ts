import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


/*Rutas*/
import { APP_ROUTES } from './app.routes';
//Modulos
import { PagesModule } from './pages/pages.module';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { BreadcrumbdsComponent } from './shared/breadcrumbds/breadcrumbds.component';
import { PagesComponent } from './pages/pages.component';
import { RegistroComponent } from './registro/registro.component';



@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    LoginComponent
    // DashboardComponent,
    // ProgressComponent,
    // PagesComponent,
    // Graficas1Component,
    // HeaderComponent,
    // NopagefoundComponent,
    // SidebarComponent,
    // BreadcrumbdsComponent,
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
