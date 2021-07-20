import { RelatedPerson } from './../models/relatedPerson.model';
import { Router } from '@angular/router';
import { PatientService } from './../services/patient.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rel-person',
  templateUrl: './rel-person.page.html',
  styleUrls: ['./rel-person.page.scss'],
})
export class RelPersonPage implements OnInit {

  public relatedPersons: RelatedPerson[] = [];
  constructor(
    private patientService: PatientService,
    public router: Router
  ) { }

  ngOnInit() {
    this.patientService.getAllRelatedPerson()
    .subscribe( (res: any) => {
        this.relatedPersons = res;
    }, ( err) => {
        console.log(err);
    });
  }
}
