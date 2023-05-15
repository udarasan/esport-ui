import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home.component";
import {IndexComponent} from "./componets/index/index.component";
import {EventsComponent} from "./componets/events/events.component";
import {OrgandclansComponent} from "./componets/organdclans/organdclans.component";
import {EventPageComponent} from "./componets/event-page/event-page.component";
import {DashboardComponent} from "./componets/dashboard/dashboard.component";
import {AccountComponent} from "./componets/dashboard/components/account/account.component";
import {RegistrationComponent} from "./componets/dashboard/components/registration/registration.component";
import {UserDashboardComponent} from "./componets/dashboard/components/user-dashboard/user-dashboard.component";
import {TeamsComponent} from "./componets/teams/teams.component";
import {ProfileComponent} from "./componets/profile/profile.component";
import {RegEventsComponent} from "./componets/profile/reg-events/reg-events.component";



const routes: Routes = [
  {path:'', component:HomeComponent,children:[
      { path: '', component: IndexComponent},
      { path: 'events', component: EventsComponent},
      { path: 'profile', component: ProfileComponent},
      { path: 'events/:id', component: EventPageComponent},
      { path: 'team', component: TeamsComponent},
      { path: 'reg', component: RegEventsComponent},
      { path: 'organization-and-clans', component: OrgandclansComponent},
      { path: 'user-dashboard', component: DashboardComponent,children:[
          {path:'account', component:AccountComponent},
          {path:'registration', component:RegistrationComponent},
          {path:'dashboard', component:UserDashboardComponent}
        ]},
      //{ path: 'challenges', component:ChatComponent  ,canActivate: [AuthGuard]},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
