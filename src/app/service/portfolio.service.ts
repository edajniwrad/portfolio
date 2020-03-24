// import { SingleProject } from '../modules/projects.module';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class PortfolioService {
  constructor(private http: HttpClient) { }

  // get(url): Observable<SingleProject[]> with module
  get(url): Observable<any> {
    return this.http.get<any>(url).pipe(catchError(this.errorHandler));
  }

  errorHandler(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
      console.error('Client Side Error: ', errorResponse.error.message);
    } else {
      console.error('Server Side Error: ', errorResponse);
    }

    return throwError('There is a problem with the service. We are notified & working on it. Please try again later.');
  }
}
