import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


/*Rutas*/
import { APP_ROUTES } from './app.routes';
//Modulos
import { PagesModule } from './pages/pages.module';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import {FormsModule} from '@angular/forms';
import { ServiceModule } from './servicios/service.index';
// import { GraficoDonaComponent } from './components/grafico-dona/grafico-dona.component';




@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    LoginComponent,
    // GraficoDonaComponent,
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModule,
    FormsModule,
    ServiceModule
  ],
  providers: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
