import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {CoreModule} from "../../core/core.module";
import { SliderComponent } from './componets/index/componets/slider/slider.component';
import { IndexComponent } from './componets/index/index.component';
import {SharedModule} from "../../shared/shared.module";
import { EventsComponent } from './componets/events/events.component';
import { OrgandclansComponent } from './componets/organdclans/organdclans.component';


@NgModule({
  declarations: [
    HomeComponent,
    SliderComponent,
    IndexComponent,
    EventsComponent,
    OrgandclansComponent
  ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        CoreModule,
        SharedModule
    ]
})
export class HomeModule { }
