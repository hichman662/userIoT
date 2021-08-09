
/* eslint-disable @typescript-eslint/ban-types */

import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {of, Observable} from 'rxjs';
import { Device } from '../models/device.model';




@Injectable({
  providedIn: 'root'
})
export class DeviceService {


constructor(private http: HttpClient) {

}

// Device
public getAllDevice(): Observable<object>{
  return this.http.get(`${environment.base_url}/Device/ReadAll`);
}

public getDeviceById( uid: number): Observable<object>{
  if (!uid) { uid = null; }
  return this.http.get <Device>(`${environment.base_url}/Device/${uid}` );
}

public getDeviceByIdScenario( uid: number): Observable<object>{
  if (!uid) { uid = null; }
  return this.http.get <Device>(`${environment.base_url}/Device/DevicesScenario?idIoTScenario=${uid}` );
}

public createDevice( data: Device ): Observable<object> {
  return this.http.post(`${environment.base_url}/Device/New_`, data);
}


}
