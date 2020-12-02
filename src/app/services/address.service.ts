import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

const addressUrl = `http://localhost:8080/address`;

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private http: HttpClient) { }

  getAddresses(): Observable<any> {
    return this.http.get(addressUrl)
      .pipe(
        tap()
      );
  }

  getAddress(id): Observable<any> {
    return this.http.get(`${addressUrl}/${id}`);
  }

  createAddress(data): Observable<any> {
    return this.http.post(addressUrl, data);
  }

  findByName(name): Observable<any> {
    return this.http.get(`${addressUrl}?name=${name}`);
  }

  addrUpdate(data): Observable<any> {
    return this.http.put(`${addressUrl}/${data.id}`, data);
  }

  destroy(id): Observable<any> {
    return this.http.delete(`${addressUrl}/${id}`);
  }


}
