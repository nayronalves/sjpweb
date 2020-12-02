import { AssociadoDetailsComponent } from './../associado/associado-details/associado-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomesysComponent } from './homesys.component';
import { AssociadoListComponent } from '../associado/associado-list/associado-list.component';
import { BookingListComponent } from '../booking/booking-list/booking-list.component';
import { AssociadoNewComponent } from '../associado/associado-new/associado-new.component';

import { AuthGuard } from '../../helpers/auth.guard';
import { BookingNewComponent } from '../booking/booking-new/booking-new.component';


const routes: Routes = [
  {
    path: 'homesys',
    component: HomesysComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'bookings', component: BookingListComponent },
      { path: 'associados', component: AssociadoListComponent },
      { path: 'associados/associado-new', component: AssociadoNewComponent },
      { path: 'associados/associado-details/:id', component: AssociadoDetailsComponent },
      { path: 'bookings/booking-new', component: BookingNewComponent }
    ]
  },
  { path: '', redirectTo: 'homesys', pathMatch: 'full' }

  // { path: '', redirectTo: 'home', pathMatch: 'full' }
  // { path: 'homesys', loadChildren: () => import ('./components/homesys/homesys.module').then(m => m.HomesysModule) canLoad: [AuthGuard]}
  // { path: 'login', component: LoginComponent }
  // { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class HomesysRoutingModule { }