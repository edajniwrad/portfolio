// import { SingleProject } from '../modules/projects.module';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class PortfolioService {
  private modals: any[] = [];
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

  add(modal: any) {
    // add modal to array of active modals
    this.modals.push(modal);
  }

  remove(id: string) {
      // remove modal from array of active modals
      this.modals = this.modals.filter(x => x.id !== id);
  }

  open(id: string) {
      // open modal specified by id
      const modal = this.modals.find(x => x.id === id);
      modal.open(modal.id);
  }

  close(id: string) {
      // close modal specified by id
      const modal = this.modals.find(x => x.id === id);
      modal.close();
  }
}
