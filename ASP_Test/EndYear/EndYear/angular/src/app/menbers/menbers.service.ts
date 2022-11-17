import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, retry, throwError} from 'rxjs';
import { Employee, MENBERS, USERS } from './menbers';

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
  //getLocation(): Observable<MENBERS> {
  //  this.actionUrl = '/getAll';
  //  const url = this.serverUrl + this.actionUrl;
  //  return this.http.get<MENBERS>(url);
 // }

  // HttpClient API get() method => Fetch employees list
  getEmployees(): Observable<Employee> {
    this.actionUrl = '/employees';
    return this.http
      .get<Employee>(this.serverUrl + this.actionUrl)
      .pipe(retry(1), catchError(this.handleError));
  };

  getUsers(): Observable<USERS> {
    this.actionUrl = '/users';
    return this.http
      .get<USERS>(this.serverUrl + this.actionUrl)
      .pipe(retry(1), catchError(this.handleError));
  };

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
