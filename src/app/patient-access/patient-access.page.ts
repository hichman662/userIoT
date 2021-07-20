import { Router } from '@angular/router';
import { PatientAccess } from './../models/patientAccess.model';
import { PatientService } from './../services/patient.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-access',
  templateUrl: './patient-access.page.html',
  styleUrls: ['./patient-access.page.scss'],
})
export class PatientAccessPage implements OnInit {

  public patientAccess: PatientAccess[] = [];
  constructor(
    private patientService: PatientService,
    public router: Router
  ) { }

  ngOnInit() {
    this.patientService.getAllPatientAccess()
    .subscribe( (res: any) => {
        this.patientAccess = res;
    }, ( err) => {
        console.log(err);
    });
  }

}
