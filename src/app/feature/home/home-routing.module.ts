import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home.component";
import {IndexComponent} from "./componets/index/index.component";
import {EventsComponent} from "./componets/events/events.component";
import {OrgandclansComponent} from "./componets/organdclans/organdclans.component";
import {EventPageComponent} from "./componets/event-page/event-page.component";
const routes: Routes = [
  {path:'', component:HomeComponent,children:[
      { path: '', component: IndexComponent},
      { path: 'events', component: EventsComponent},
      { path: 'events/:id', component: EventPageComponent},
      { path: 'organization-and-clans', component: OrgandclansComponent},
      //{ path: 'challenges', component:ChatComponent  ,canActivate: [AuthGuard]},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
