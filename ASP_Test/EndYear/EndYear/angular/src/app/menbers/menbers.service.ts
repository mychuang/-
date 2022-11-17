import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { MENBERS } from './menbers';

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
  getLocation(): Observable<MENBERS> {
    this.actionUrl = '/getAll';
    const url = this.serverUrl + this.actionUrl;
    return this.http.get<MENBERS>(url);
  }
}
