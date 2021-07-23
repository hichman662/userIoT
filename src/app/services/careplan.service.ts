
/* eslint-disable @typescript-eslint/ban-types */

import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {of, Observable} from 'rxjs';
import { CarePlan } from '../models/carePlan.model';




@Injectable({
  providedIn: 'root'
})
export class CarePlanService {

    carePlan: CarePlan;

constructor(private http: HttpClient) {

}

// Care Plan
public getAllCarePlan(): Observable<object>{
  return this.http.get(`${environment.base_url}/CarePlan/ReadAll`);
}

public getCarePlanById( uid: number): Observable<object>{
  if (!uid) { uid = null; }
  return this.http.get <CarePlan>(`${environment.base_url}/CarePlan/${uid}` );
}

public getCarePlanByIdScenario( uid: number): Observable<object>{
  if (!uid) { uid = null; }
  return this.http.get <CarePlan>(`${environment.base_url}/CarePlan/CarePlanScenario?idIoTScenario=${uid}` );
}


}
