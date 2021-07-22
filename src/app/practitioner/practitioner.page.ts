import { Router } from '@angular/router';
import { PatientService } from './../services/patient.service';
import { Practitioner } from './../models/practitioner.model';
import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-practitioner',
  templateUrl: './practitioner.page.html',
  styleUrls: ['./practitioner.page.scss'],
})
export class PractitionerPage implements OnInit {

  public practitioners: Practitioner[] = [];
  public idScenario: number;
  constructor(
    private patientService: PatientService,
    public router: Router,
    private storage: Storage
  ) { }

  ngOnInit() {
    this.storage.get('idScenario').then((val) => {
      this.idScenario = val;
      console.log('inja id escenario: ' ,this.idScenario);
      if(this.idScenario != null){
        this.callPractitioner();
      }
    });
  }
  callPractitioner(){
    this.patientService.getPractitionerByIdScenario(this.idScenario)
    .subscribe( (res: any) => {
        this.practitioners = res;
    }, ( err) => {
        console.log(err);
    });
  }

}
