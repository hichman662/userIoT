/* eslint-disable quote-props */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/naming-convention */

/* eslint-disable @typescript-eslint/ban-types */

import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import {of, Observable} from 'rxjs';
import { Device } from '../models/device.model';




@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  headers: HttpHeaders;
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

// Header




get token(): string {
  return  'SharedAccessSignature sr=849f84f9-b7f0-4638-9932-25893f52dea2&sig=0TPcUHrOGg9S4w0tcNgeJC6HEAHoQwmD0QJ2oEEx9HE%3D&skn=ADMINTOKEN&se=1653125144141';
}

// Telemetry
public getTelemetryTimeStamp(): Observable<object>{
  return this.http.get(`${environment.azure_IoT}/devices/1qsi9p8t5l2/telemetry/HeartRate?api-version=1.0`,  {headers: this.headers});
}

public getTelemetryBloodPressure(): Observable<object>{
  this.headers = new HttpHeaders({'Authorization': this.token});
  return this.http.get(`${environment.azure_IoT}/devices/1qsi9p8t5l2/telemetry/BloodPressure?api-version=1.0`, {headers: this.headers});
}

public getTelemetryBodyTemperature(): Observable<object>{
  return this.http.get(`${environment.azure_IoT}/devices/1qsi9p8t5l2/telemetry/BodyTemperature?api-version=1.0`,  {headers: this.headers});
}

public getTelemetryRespiratoryRate(): Observable<object>{
  return this.http.get(`${environment.azure_IoT}/devices/1qsi9p8t5l2/telemetry/RespiratoryRate?api-version=1.0`,  {headers: this.headers});
}




}


