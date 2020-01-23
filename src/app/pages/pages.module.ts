import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';
import { FormsModule } from '@angular/forms';
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';

@NgModule({
    declarations:[
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        IncrementadorComponent
    ],
    exports:[
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        IncrementadorComponent
    ],
    imports:[
        SharedModule,
        PAGES_ROUTES,
        FormsModule
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class PagesModule {}