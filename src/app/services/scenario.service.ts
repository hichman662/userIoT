/* eslint-disable quote-props */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/ban-types */
import { Scenario } from './../models/scenario.model';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {of, Observable} from 'rxjs';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class ScenarioService {

    scenario: Scenario;
    private token = '';
    private idEscenario: number ;
    private headers = new HttpHeaders();
constructor(private http: HttpClient,
  private storage: Storage) {

}

getToken(): string {
  this.storage.get('token').then((val) => {
    this.token = val;
    console.log(this.token);
  });
  return this.token;
}

public getAllScenario(token: string): Observable<object>{
  this.headers = new HttpHeaders ({'Authorization': token});
  return this.http.get(`${environment.base_url}/IoTScenario/ReadAll`,{headers:this.headers});
}
public getScenarioById( uid: number): Observable<object>{
  if (!uid) { uid = null; }
  return this.http.get <Scenario>(`${environment.base_url}/IoTScenario/${uid}`);
}

public createScenario( data: Scenario ): Observable<object> {
  return this.http.post(`${environment.base_url}/IoTScenario/New_`, data);
}

public deleteScenario(uid) {
  return this.http.delete(`${environment.base_url}/IoTScenario/Destroy?p_iotscenario_oid=${uid}`);
}
}
