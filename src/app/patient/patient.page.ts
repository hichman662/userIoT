import { Router } from '@angular/router';
import { PatientService } from './../services/patient.service';
import { Component, OnInit } from '@angular/core';
import { Patient } from '../models/patient.model';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.page.html',
  styleUrls: ['./patient.page.scss'],
})
export class PatientPage implements OnInit {

  public patients: Patient[] = [];
  public idScenario: number;
  constructor(
    private patientService: PatientService,
    public router: Router,
    private storage: Storage

  ) { }

  ngOnInit() {
    this.storage.get('idScenario').then((val) => {
      this.idScenario = val;
      if(this.idScenario != null){
        this.callPatient();
      }
    });
  }
  callPatient(){
    this.patientService.getPatientByIdScenario(this.idScenario)
    .subscribe( (res: any) => {
        this.patients = res;
    }, ( err) => {
        console.log(err);
    });
  }

}
