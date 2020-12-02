import { map } from 'rxjs/operators';
import { Component, ViewChild, OnInit, Injectable } from '@angular/core';
import { BookingService, CalendarService } from 'src/app/services';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CalendarOptions, EventClickArg } from '@fullcalendar/angular';
import { MatDatepicker } from '@angular/material/datepicker';
import * as moment from 'moment';
import { Subject } from 'rxjs';
import { CalendarInterceptor } from './calendar.interceptor';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})

@Injectable()

export class CalendarComponent implements OnInit {

  @ViewChild(MatDatepicker) datepicker: MatDatepicker<Date>;

  form: FormGroup;
  // calendarVisible = true;
  ev = [];
  book: any;
  input = document.querySelector('input');
  log = document.getElementById('values');
  public loading: Subject<boolean> = this.calServ.isLoading;

  bk = this.ci.intercept;

  constructor(
    private fb: FormBuilder,
    private bs: BookingService,
    private calServ: CalendarService,
    private ci: CalendarInterceptor
  ) {
    this.bs.getBookings()
      .subscribe(
        res => {
          res.map(
            res => {
              let s = moment(res.checkin).format("YYYY-MM-DD");
              let e = moment(res.checkout).format("YYYY-MM-DD");
              this.ev.push({
                // title: res.Associado.name,
                title: 'RESERVADO',
                start: s.toString(),
                end: e.toString(),
                // display: 'background',
                color: 'red'
              });
              this.calendarOptions.events = this.ev;
              // console.log(this.loading);
            },
          )
        }
      )

    if (this.calServ.show) {
      // this.getBK();
      console.log(this.loading);
      console.log(this.getBK());
      // document.location.reload();
    } else { }

    // this.load();
    // console.log(this.calendarOptions.events)
    // setInterval(this.func, 1000)
  }

  // load() {
  //   if (this.loading) {
  //     document.location.reload(true);
  //   } else {

  //   }
  // }

  getBK() {
    // document.location.reload()
  }

  ngOnInit() {
    this.form = this.fb.group({
      checkin: '',
      checkout: ''
    });
  }

  mda() {
    this.input.addEventListener('input', this.updateValue);
    // console.log(this.input, this.d);
  }

  // this.bs.getBookings()
  // .subscribe(
  //   res => res.map(
  //     res => {
  //       let s = moment(res.checkin).format("YYYY-MM-DD");
  //       let e = moment(res.checkout).format("YYYY-MM-DD");
  //       this.ev.push({
  //         // title: res.Associado.name,
  //         title: 'RESERVADO',
  //         start: s.toString(),
  //         end: e.toString(),
  //         // display: 'background',
  //         color: 'red'
  //       });
  //       this.calendarOptions.events = this.ev;
  //       console.log(this.calendarOptions.events)
  //     }
  //   )



  updateValue(e) {
    this.log.textContent = e.target.value;
  }

  submit() {
    // console.log(document.getElementById('date'));
    console.log(this.form.value);
  }


  calendarOptions: CalendarOptions = {
    buttonText: {
      today: 'Hoje',
      month: 'Mês',
      week: 'Semana',
      day: 'Dia',
      list: 'Lista'
    },
    weekText: 'S',
    allDayText: '24 horas',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    },
    initialView: 'dayGridMonth',
    // initialEvents: INITIAL_EVENTS, // alternatively, use the `events` setting to fetch from a feed
    // dateClick: this.handleDateClick.bind(this),
    // events: [],
    weekNumbers: true,
    navLinks: true,
    weekends: true,
    editable: false,
    eventOverlap: false,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    // select: this.handleDateSelect.bind(this),
    // eventClick: this.handleEventClick.bind(this),
    // eventsSet: this.handleEvents.bind(this),
    locale: 'pt-br'
    /* you can update a remote database when these fire:
    eventAdd:
    eventChange:
    eventRemove:
    */
  };

  upEvents(data) {
    // let e: EventAddArg;
    // console.log(e.event);
    console.log(data);
  }

  // createEventId() {
  //   return String(eventGuid++);
  // }

  handleEventClick(clickInfo: EventClickArg) {
    if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
      clickInfo.event.remove();
    }
  }

  // handleEvents(events: EventApi[]) {
  //   this.currentEvents = events;
  // }
}