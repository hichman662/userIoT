/* eslint-disable @typescript-eslint/ban-types */
import { Patient } from './../models/patient.model';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {of, Observable} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class PatientService {

    patient: Patient;

constructor(private http: HttpClient) {

}

public getAllPatient(): Observable<object>{
  return this.http.get(`${environment.base_url}/Patient/ReadAll`);
}

public getPatientById( uid: number): Observable<object>{
  if (!uid) { uid = null; }
  return this.http.get <Patient>(`${environment.base_url}/Patient/${uid}` );
}

public getAllPractitioner(): Observable<object>{
  return this.http.get(`${environment.base_url}/Practitioner/ReadAll`);
}

public getAllRelatedPerson(): Observable<object>{
  return this.http.get(`${environment.base_url}/RelatedPerson/ReadAll`);
}

public getAllPatientAccess(): Observable<object>{
  return this.http.get(`${environment.base_url}/PatientAccess/ReadAll`);
}
}
