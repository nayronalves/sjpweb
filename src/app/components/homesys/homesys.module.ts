import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomesysComponent } from './homesys.component';
import { AssociadoListComponent } from '../associado/associado-list/associado-list.component';
import { AssociadoNewComponent } from '../associado/associado-new/associado-new.component';
import { AssociadoDetailsComponent } from '../associado/associado-details/associado-details.component';
import { BookingListComponent } from '../booking/booking-list/booking-list.component';
import { HomesysRoutingModule } from './homesys-routing.module';
import { NavComponent } from './../template/nav/nav.component';
import { HeaderComponent } from './../template/header/header.component';
import { AssociadoAlertComponent } from '../associado/associado-alert/associado-alert.component';
import { BookingNewComponent } from '../booking/booking-new/booking-new.component';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE, MAT_DATE_FORMATS, DateAdapter, MAT_NATIVE_DATE_FORMATS } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { SJP_DATE_FORMATS } from '.././../helpers/sjpdate-formats';
import { MatMomentDateModule, MAT_MOMENT_DATE_FORMATS, MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { MatSelectModule } from '@angular/material/select';
import { NgxMaskModule, IConfig } from 'ngx-mask';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

@NgModule({
  exports: [AssociadoAlertComponent],
  imports: [
    NgxMaskModule.forRoot(),
    CommonModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatButtonModule,
    MatDatepickerModule,
    MatMomentDateModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatGridListModule,
    MatExpansionModule,
    MatNativeDateModule,
    MatDialogModule,
    MatSelectModule,
    MatAutocompleteModule,
    HomesysRoutingModule
  ],
  declarations: [
    NavComponent,
    HeaderComponent,
    AssociadoDetailsComponent,
    AssociadoNewComponent,
    AssociadoAlertComponent,
    AssociadoListComponent,
    BookingListComponent,
    BookingNewComponent,
    HomesysComponent
  ],
  entryComponents: [AssociadoAlertComponent],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS] }
  ]
})
export class HomesysModule { }