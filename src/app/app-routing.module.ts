import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CalendarComponent } from './components/calendar/calendar.component';
// import { HomesysComponent } from './components/homesys/homesys.component';
// import { AuthGuard } from './helpers';
// import { BookingListComponent } from './components/booking/booking-list/booking-list.component';
// import { AssociadoListComponent } from './components/associado/associado-list/associado-list.component';

const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  // { path: 'homesys/associado', component: AssociadoListComponent, outlet: 'assoclist'},
  { path: 'calendar', component: CalendarComponent },
  // { path: 'homesys/bookings', component: BookingListComponent },
  { 
    path: '', 
    loadChildren: () => import ('./components/homesys/homesys.module').then(m => m.HomesysModule)
    // canLoad: [AuthGuard] 
  },
  // { path: 'login', component: LoginComponent },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }

];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
