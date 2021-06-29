import { Router } from '@angular/router';
import { PatientService } from './../services/patient.service';
import { Component, OnInit } from '@angular/core';
import { Patient } from '../models/patient.model';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.page.html',
  styleUrls: ['./patient.page.scss'],
})
export class PatientPage implements OnInit {

  public patients: Patient[] = [];
  constructor(
    private patientService: PatientService,
    public router: Router
  ) { }

  ngOnInit() {
    this.patientService.getAllPatient()
    .subscribe( (res: any) => {
        this.patients = res;
    }, ( err) => {
        console.log(err);
    });
  }

}
