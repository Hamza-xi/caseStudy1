import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { TrInterface } from '../tr-interface';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TrserviceService {
  private baseUrl = "http://localhost:5255/api/Trainings";

  constructor(private httpClient: HttpClient) { }

  getTr(): Observable<TrInterface[]> {
    return this.httpClient.get<TrInterface[]>(this.baseUrl).pipe(
      catchError(error => {
        console.error('Error fetching training data:', error);
        return throwError(() => error);
      })
    );
  }
  
  addNew(training: TrInterface): Observable<TrInterface> {
    return this.httpClient.post<TrInterface>(this.baseUrl, training).pipe(
      catchError(error => {
        console.error('Error adding training:', error);
        return throwError(() => error);
      })
    );
  }

}
