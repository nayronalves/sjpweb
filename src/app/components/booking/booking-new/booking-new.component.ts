import { CalendarService } from './../../../services/calendar.service';
import { AssociadoService } from '../../../services/associado.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDateRangeInput } from '@angular/material/datepicker';
import * as _moment from 'moment';
import { BookingService } from 'src/app/services/booking.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, pipe, Subject } from 'rxjs';
import { map, startWith, reduce, switchMap } from 'rxjs/operators';

const moment = _moment;

interface Status {
  tipo: string;
}

@Component({
  selector: 'app-booking-new',
  templateUrl: './booking-new.component.html',
  styleUrls: ['./booking-new.component.scss']
})
export class BookingNewComponent implements OnInit {

  @ViewChild(MatDateRangeInput) private rangeInput: MatDateRangeInput<Date>;

  public loading: Subject<boolean> = this.calServ.isLoading;
  filteredOptions: Observable<string[]>;
  form: FormGroup;
  form2: FormGroup = this.fb.group({
    associado: new FormControl('')
  });

  status: Status[] = [
    { tipo: 'em análise' },
    { tipo: 'confirmada' },
    { tipo: 'cancelada' }
  ];

  isRange: boolean;
  assoc_id: any;
  options: string[] = [];
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private bookingService: BookingService,
    private associadoService: AssociadoService,
    private calServ: CalendarService,
    private router: Router,
    private route: ActivatedRoute
  ) { };

  ngOnInit(): void {
    this.form = this.fb.group({
      id: new FormControl(''),
      checkin: new FormControl(''),
      checkout: new FormControl(''),
      status: new FormControl('', Validators.required)
      // associado: new FormControl('')
    });
    console.log(this.status)

    this.getAssoc().subscribe(
      // res => {let x = res.map(res => res.name); console.log(x)}
      res => {
        res.map(
          res =>
            this.options.push(`${res.name}`)
        );
      }
    )

    this.filteredOptions = this.form2.get('associado').valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      )

    this.form.valueChanges.subscribe(res => {
      if (this.rangeInput.value.start && this.rangeInput.value.end) { this.isRange = true; }
    });
  }

  getAssoc(): Observable<any[]> {
    return this.associadoService.getAssociados()
  };

  getAssN(data) {
    return this.associadoService.findByName(data)
  }

  private _filter(value: any): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  newBooking(): void {
    // let start = this.form.get('checkin').value;
    // let end = this.form.get('checkout').value;
    // let dtstart: any = moment(start).format("DD/MM/YYYY HH:mm");
    // let dtend: any = moment(end).format("DD/MM/YYYY HH:mm");
    // this.form.value.checkin = dtstart;
    // this.form.value.checkout = dtend;

    this.submitted
    this.getAssN(this.form2.value.associado)
      .subscribe(
        res => res.map(
          res => {

            const data = {
              id: this.form.value.id,
              checkin: this.form.value.checkin,
              checkout: this.form.value.checkout,
              status: this.form.value.status,
              associado_id: res.id
            }

            this.bookingService.createBooking(data)
              .subscribe(
                res => {
                  console.log(data)
                  this.submitted = true;
                  if (this.submitted) {
                    this.form.reset();
                    this.form2.value.associado = '';
                    this.isRange = false;
                  }
                },
                error => {
                  console.log(error);
                }
              );
          },
          console.log(this.submitted)
        )
      )

  }

}
