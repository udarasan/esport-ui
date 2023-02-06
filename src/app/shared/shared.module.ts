import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventCardComponent } from './event-card/event-card.component';
import { GameCardComponent } from './game-card/game-card.component';
import { PageTitleComponent } from './page-title/page-title.component';
import { OrganisationCardComponent } from './organisation-card/organisation-card.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
    declarations: [
        EventCardComponent,
        GameCardComponent,
        PageTitleComponent,
        OrganisationCardComponent
    ],
  exports: [
    EventCardComponent,
    GameCardComponent,
    PageTitleComponent,
    OrganisationCardComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class SharedModule { }
