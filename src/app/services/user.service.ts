/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/ban-types */
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {of, Observable} from 'rxjs';
import { loginForm  } from '../interfaces/loginForm.interface';
import { Router } from '@angular/router';
import { tap, map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

constructor(private http: HttpClient,
               private router: Router) {

}

login( formData: loginForm) {
  return this.http.post(`${environment.base_url}/UserAnonimous/Login`, formData)
          .pipe(
            tap( (res: any) => {
              const { Name ,Surnames,Photo, Email} = res;
              /* localStorage.setItem('Name', Name);
              localStorage.setItem('Photo',Photo);
              localStorage.setItem('Email', Email);
              localStorage.setItem('Surenames', Surenames); */

              })
          );
}

}
