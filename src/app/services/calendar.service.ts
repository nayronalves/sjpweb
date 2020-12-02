import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalendarService{

public isLoading = new Subject<boolean>();
public load = false;

  // constructor() { }

  show() {
    this.load = true;
    this.isLoading.next(true);
  }

  hide() {
    this.load = false;
    this.isLoading.next(false);
  }

}
