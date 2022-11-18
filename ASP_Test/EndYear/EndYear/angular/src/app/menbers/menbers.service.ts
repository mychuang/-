import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, retry, throwError} from 'rxjs';
import { MENBERONE, MENBERS } from './menbers';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MenbersService {
  public actionUrl!: string;
  public serverUrl: string;

  constructor(private http: HttpClient) {
    this.serverUrl = 'http://localhost:60623/api';
  };

  //query
  getMenbers(): Observable<MENBERS> {
    this.actionUrl = '/Menbers/getAll';
    const url = this.serverUrl + this.actionUrl;
    console.log(url);
    return this.http.get<MENBERS>(url);
  }

  getMenberOne(): Observable<MENBERONE> {
    this.actionUrl = '/Menbers/getOne';
    const url = this.serverUrl + this.actionUrl;
    return this.http.get<MENBERONE>(url);
  }

  //update | 修改
  putOne(menberOne: MENBERONE): Observable<MENBERONE> {
    this.actionUrl = '/Menbers/putOne';
    const url = this.serverUrl + this.actionUrl;
    return this.http.put<MENBERONE>(url, menberOne);
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
