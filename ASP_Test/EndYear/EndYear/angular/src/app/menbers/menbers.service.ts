import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, retry, throwError} from 'rxjs';
import { MENBERS, USERS } from './menbers';

@Injectable({
  providedIn: 'root'
})
export class MenbersService {
  public actionUrl: string | undefined;
  public serverUrl: string;

  constructor(private http: HttpClient) {
    this.serverUrl = 'http://localhost:3000';
  };

  //query
  getMenbers(): Observable<MENBERS[]> {
    this.actionUrl = '/getAll';
    const url = this.serverUrl + this.actionUrl;
    return this.http.get<MENBERS[]>(url);
  }

 //query
  getUsers(): Observable<USERS[]> {
    this.actionUrl = '/users';
    const url = this.serverUrl + this.actionUrl;
    return this.http.get<USERS[]>(url).pipe(retry(1), catchError(this.handleError));
  }

  // Error handling
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }


}
