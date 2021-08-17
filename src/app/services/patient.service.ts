import { PatientAccess } from './../models/patientAccess.model';
/* eslint-disable @typescript-eslint/ban-types */
import { Patient } from './../models/patient.model';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {of, Observable} from 'rxjs';
import { Practitioner } from '../models/practitioner.model';
import { RelatedPerson } from '../models/relatedPerson.model';



@Injectable({
  providedIn: 'root'
})
export class PatientService {

    patient: Patient;

constructor(private http: HttpClient) {

}

// Patient
public getAllPatient(): Observable<object>{
  return this.http.get(`${environment.base_url}/Patient/ReadAll`);
}

public getPatientById( uid: number): Observable<object>{
  if (!uid) { uid = null; }
  return this.http.get <Patient>(`${environment.base_url}/Patient/${uid}` );
}

public getPatientByIdScenario( uid: number): Observable<object>{
  if (!uid) { uid = null; }
  return this.http.get <Patient>(`${environment.base_url}/Patient/PatientScenario?idIoTScenario=${uid}` );
}

public createPatient( data: Patient ): Observable<object> {
  return this.http.post(`${environment.base_url}/Patient/New_`, data);
}



// Practitioner
public getAllPractitioner(): Observable<object>{
  return this.http.get(`${environment.base_url}/Practitioner/ReadAll`);
}
public getPractitionerById( uid: number): Observable<object>{
  if (!uid) { uid = null; }
  return this.http.get <Practitioner>(`${environment.base_url}/Practitioner/${uid}` );
}
public getPractitionerByIdScenario( uid: number): Observable<object>{
  if (!uid) { uid = null; }
  return this.http.get <Practitioner>(`${environment.base_url}/Practitioner/Practitioners?idIoTScenario=${uid}` );
}
public createPractitioner( data: Practitioner ): Observable<object> {
  return this.http.post(`${environment.base_url}/Practitioner/New_`, data);
}
public deletePractitioner(uid) {
  return this.http.delete(`${environment.base_url}/Practitioner/Destroy?p_practitioner_oid=${uid}`);
}

// Related Person
public getAllRelatedPerson(): Observable<object>{
  return this.http.get(`${environment.base_url}/RelatedPerson/ReadAll`);
}
public getRelatedPersonById( uid: number): Observable<object>{
  if (!uid) { uid = null; }
  return this.http.get <RelatedPerson>(`${environment.base_url}/RelatedPerson/${uid}` );
}
public getRelatedPersonByIdScenario( uid: number): Observable<object>{
  if (!uid) { uid = null; }
  return this.http.get <RelatedPerson>(`${environment.base_url}/RelatedPerson/RelatedPeople?idIoTScenario=${uid}` );
}
public createRelatedPerson( data: RelatedPerson ): Observable<object> {
  return this.http.post(`${environment.base_url}/RelatedPerson/New_`, data);
}

public deleteRelatedPerson(uid) {
  return this.http.delete(`${environment.base_url}/RelatedPerson/Destroy?p_relatedperson_oid=${uid}`);
}


// Patient Access
public getAllPatientAccess(): Observable<object>{
  return this.http.get(`${environment.base_url}/PatientAccess/ReadAll`);
}
public getPatientAccessById( uid: number): Observable<object>{
  if (!uid) { uid = null; }
  return this.http.get <PatientAccess>(`${environment.base_url}/PatientAccess/${uid}` );
}
public getPatientAccessByIdScenario( uid: number): Observable<object>{
  if (!uid) { uid = null; }
  return this.http.get <PatientAccess>(`${environment.base_url}/PatientAccess/PatientAccessScenario?idIoTScenario=${uid}` );
}
public createPatientAccess( data: RelatedPerson ): Observable<object> {
  return this.http.post(`${environment.base_url}/PatientAccess/New_`, data);
}

public deletePatientAccess(uid) {
  return this.http.delete(`${environment.base_url}/PatientAccess/Destroy?p_patientaccess_oid=${uid}`);
}


}
