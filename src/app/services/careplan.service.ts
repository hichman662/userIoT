import { VitalSign } from './../models/vitalSign.model';

/* eslint-disable @typescript-eslint/ban-types */

import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {of, Observable} from 'rxjs';
import { CarePlan } from '../models/carePlan.model';
import { CareActivity } from '../models/careActivity.model';




@Injectable({
  providedIn: 'root'
})
export class CarePlanService {

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

// Vital Signs

public getAllVitalSign(): Observable<object>{
  return this.http.get(`${environment.base_url}/VitalSign/ReadAll`);
}

public getVitalSignById( uid: number): Observable<object>{
  if (!uid) { uid = null; }
  return this.http.get <VitalSign>(`${environment.base_url}/VitalSign/${uid}` );
}

public getVitalSignByIdScenario( uid: number): Observable<object>{
  if (!uid) { uid = null; }
  return this.http.get <VitalSign>(`${environment.base_url}/VitalSign/VitalSignsScenario?idIoTScenario=${uid}` );
}

// Care Activities

public getAllCareActivities(): Observable<object>{
  return this.http.get(`${environment.base_url}/IMCareActivity/ReadAll`);
}

public getCareActivitynById( uid: number): Observable<object>{
  if (!uid) { uid = null; }
  return this.http.get <CareActivity>(`${environment.base_url}/IMCareActivity/${uid}` );
}

public getCareActivityByIdScenario( uid: number): Observable<object>{
  if (!uid) { uid = null; }
  return this.http.get <CareActivity>(`${environment.base_url}/IMCareActivity/CareActivitiesScenario?idIoTScenario=${uid}` );
}


}
