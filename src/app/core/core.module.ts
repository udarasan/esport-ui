import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './top-bar/top-bar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {RouterLink} from "@angular/router";



@NgModule({
  declarations: [
    TopBarComponent,
    HeaderComponent,
    FooterComponent
  ],
  exports: [
    TopBarComponent,
    HeaderComponent,
    FooterComponent
  ],
    imports: [
        CommonModule,
        RouterLink
    ]
})
export class CoreModule { }
