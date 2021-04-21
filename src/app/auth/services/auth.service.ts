import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl: string = 'localhost:3000/api/'

  constructor(private http: HttpClient) { }

  register(data: any) {
    console.log(data);
    // return this.http.post()
  }

}
