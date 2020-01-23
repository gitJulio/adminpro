import { NgModule } from "@angular/core";
import { HeaderComponent } from './header/header.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbdsComponent } from './breadcrumbds/breadcrumbds.component';


@NgModule({
    declarations:[
        HeaderComponent,
        NopagefoundComponent,
        SidebarComponent,
        BreadcrumbdsComponent
    ],
    exports:[
        HeaderComponent,
        NopagefoundComponent,
        SidebarComponent,
        BreadcrumbdsComponent
    ]
})

export class SharedModule {}