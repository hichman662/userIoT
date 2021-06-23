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

}
