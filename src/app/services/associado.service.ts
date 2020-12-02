import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

const associadosUrl = `http://localhost:8080/associados`;

@Injectable({
  providedIn: 'root'
})
export class AssociadoService {

  constructor(private http: HttpClient) { }

  getAssociados(): Observable<any> {
    return this.http.get(associadosUrl)
      .pipe(
        tap()
      );
  }

  getAssociado(id): Observable<any> {
    return this.http.get(`${associadosUrl}/${id}`);
  }

  createAssociado(data): Observable<any> {
    return this.http.post(associadosUrl, data);
  }

  findByName(name): Observable<any> {
    return this.http.get(`${associadosUrl}?name=${name}`);
  }

  update(data): Observable<any> {
    return this.http.put(`${associadosUrl}/${data.id}`, data);
  }

  destroy(id): Observable<any> {
    return this.http.delete(`${associadosUrl}/${id}`);
  }


}
