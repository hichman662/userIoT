import { Router } from '@angular/router';
import { PatientAccess } from './../models/patientAccess.model';
import { PatientService } from './../services/patient.service';
import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-patient-access',
  templateUrl: './patient-access.page.html',
  styleUrls: ['./patient-access.page.scss'],
})
export class PatientAccessPage implements OnInit {
  public idScenario: number;
  public patientAccess: PatientAccess[] = [];
  constructor(
    private patientService: PatientService,
    public router: Router,
    private storage: Storage
  ) { }

  ngOnInit() {
    this.storage.get('idScenario').then((val) => {
      this.idScenario = val;
      if(this.idScenario != null){
        this.callPatientAccess();
      }
    });
  }
  callPatientAccess(){
    this.patientService.getPatientAccessByIdScenario(this.idScenario)
    .subscribe( (res: any) => {
        this.patientAccess = res;
    }, ( err) => {
        console.log(err);
    });
  }

}
