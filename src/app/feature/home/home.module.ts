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
import { EventPageComponent } from './componets/event-page/event-page.component';
import { DashboardComponent } from './componets/dashboard/dashboard.component';
import { AccountComponent } from './componets/dashboard/components/account/account.component';
import { RegistrationComponent } from './componets/dashboard/components/registration/registration.component';
import { UserDashboardComponent } from './componets/dashboard/components/user-dashboard/user-dashboard.component';
import { RegistrationCardComponent } from './componets/dashboard/components/user-dashboard/components/registration-card/registration-card.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    HomeComponent,
    SliderComponent,
    IndexComponent,
    EventsComponent,
    OrgandclansComponent,
    EventPageComponent,
    DashboardComponent,
    AccountComponent,
    RegistrationComponent,
    UserDashboardComponent,
    RegistrationCardComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CoreModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class HomeModule { }
