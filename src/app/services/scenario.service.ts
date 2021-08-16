/* eslint-disable @typescript-eslint/ban-types */
import { Scenario } from './../models/scenario.model';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {of, Observable} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ScenarioService {

    scenario: Scenario;

constructor(private http: HttpClient) {

}
public getAllScenario(): Observable<object>{
  return this.http.get(`${environment.base_url}/IoTScenario/ReadAll`);
}
public getScenarioById( uid: number): Observable<object>{
  if (!uid) { uid = null; }
  return this.http.get <Scenario>(`${environment.base_url}/IoTScenario/${uid}` );
}

public createScenario( data: Scenario ): Observable<object> {
  return this.http.post(`${environment.base_url}/IoTScenario/New_`, data);
}

public deleteScenario(uid) {
  return this.http.delete(`${environment.base_url}/IoTScenario/Destroy?p_iotscenario_oid=${uid}`);
}
}
