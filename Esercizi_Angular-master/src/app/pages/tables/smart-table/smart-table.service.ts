import { Injectable } from '@angular/core';
import { Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/Rx';
import { map } from "rxjs/operators";
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
//import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class Table{
  private server = 'http://127.0.0.1:3001/test';

  constructor(private http: HttpClient) { }

  report(): Observable <string | object>{
    return this.http.get(this.server).pipe(map((res) =>{
      return res;
    })).catch(err => this.handleError(err));
  }

  // private extractData(res: any) {
  //     let body = res.json();
  //     return body || {};
  // }

  private handleError(error: any | any) {
    console.log(error)
      let errMsg: string;
      if (error instanceof Response) {
          const body = error.json() || '';
          const err = body.error || JSON.stringify(body);
          errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
      } else {
          errMsg = error.message ? error.message : error.toString();
      }
      return errMsg;
  }

}
