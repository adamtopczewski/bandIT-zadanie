import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AirlinesService {
  private url: string = 'https://iata-and-icao-codes.p.rapidapi.com/airlines'

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) { }

  getAirlines(): Observable<any>{
    return this.http.get<any>(this.url, this.httpOptions)
      .pipe(
        catchError(_ => 'error'),
        tap(data => console.log(data))
      );
  }
}
