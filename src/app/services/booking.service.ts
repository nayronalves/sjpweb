import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

const bookingsUrl = `http://localhost:8080/bookings`;

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http: HttpClient) { }

  getBookings(): Observable<any> {
    return this.http.get(bookingsUrl)
      .pipe(
        // tap(console.log)
      );
  }

  getbooking(id: number): Observable<any> {
    return this.http.get(`${bookingsUrl}/${id}`);
  }

  createBooking(data): Observable<any> {
    return this.http.post(bookingsUrl, data)
      .pipe(
        tap(console.log)
      );
  }

  // getAssocByBooking(associado_id): Observable<any> {
  //   return this.http.get(`${bookingsUrl}/${associado_id}`)
  // }

  findByStatus(status): Observable<any> {
    return this.http.get(`${bookingsUrl}?status=${status}`);
  }

}
