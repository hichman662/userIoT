import { Router } from '@angular/router';
import { PatientService } from './../services/patient.service';
import { Practitioner } from './../models/practitioner.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practitioner',
  templateUrl: './practitioner.page.html',
  styleUrls: ['./practitioner.page.scss'],
})
export class PractitionerPage implements OnInit {

  public practitioners: Practitioner[] = [];
  constructor(
    private patientService: PatientService,
    public router: Router
  ) { }

  ngOnInit() {
    this.patientService.getAllPractitioner()
    .subscribe( (res: any) => {
        this.practitioners = res;
    }, ( err) => {
        console.log(err);
    });
  }

}
