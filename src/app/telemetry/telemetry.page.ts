/* eslint-disable @typescript-eslint/dot-notation */
import { TeleValue } from './../models/teleValue.model';
import { ImTelemetry } from './../models/imTelemetry.model';
import { DeviceService } from './../services/device.service';
import { Router } from '@angular/router';
import { PatientService } from './../services/patient.service';
import { Component, OnInit } from '@angular/core';
import { Patient } from '../models/patient.model';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-telemetry',
  templateUrl: './telemetry.page.html',
  styleUrls: ['./telemetry.page.scss'],
})
export class TelemetryPage implements OnInit {

  public imTelemetry: any[] = [];
  public idScenario: number;
  public heartRate: any;
  public bodyTemperature: any;
  public bloodPressure: any;
  public respiratoryRate: number;
  constructor(
    private deviceService: DeviceService,
    public router: Router,
    private storage: Storage

  ) { }

  ngOnInit() {
    this.storage.get('idScenario').then((val) => {
      this.idScenario = val;
      if(this.idScenario != null){
        this.callImTelemetry();
      }
    });
  }
  callImTelemetry(){
    this.deviceService.getImTelemetryByIdScenario(this.idScenario)
    .subscribe( (res: any) => {
        this.imTelemetry = res;
        console.log(this.imTelemetry[0].TeleValues[0].Valu);
        for (let i = 0; i <= res.length;i++){

          if(this.imTelemetry[i]?.['Name'] === 'HeartRate'){
              this.heartRate = this.imTelemetry[i].TeleValues[0].Valu;
              console.log('heartRate: ', this.heartRate);

          }else if(this.imTelemetry[i]?.['Name'] === 'BodyTemperature'){

            this.bodyTemperature = this.imTelemetry[i].TeleValues[0].Valu;
            console.log('bodyTemperature: ', this.bodyTemperature);

          }else if(this.imTelemetry[i]?.['Name'] === 'RespiratoryRate'){

            this.respiratoryRate = this.imTelemetry[i].TeleValues[0].Valu;
            console.log('respiratoryRate: ', this.respiratoryRate);

          }else if(this.imTelemetry[i]?.['Name'] === 'BloodPressure'){

            this.bloodPressure = this.imTelemetry[i].TeleValues[0].Valu;
            console.log('bloodPressure: ', this.bloodPressure);
          }
        }
        console.log(this.imTelemetry);
    }, ( err) => {
        console.log(err);
    });
  }

}
