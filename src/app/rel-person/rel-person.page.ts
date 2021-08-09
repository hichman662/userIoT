import { RelatedPerson } from './../models/relatedPerson.model';
import { Router } from '@angular/router';
import { PatientService } from './../services/patient.service';
import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-rel-person',
  templateUrl: './rel-person.page.html',
  styleUrls: ['./rel-person.page.scss'],
})
export class RelPersonPage implements OnInit {

  public relatedPersons: RelatedPerson[] = [];
  public idScenario: number;
  relPersonNull= false;
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
      this.callRelatedPerson();
    }
  });
}
callRelatedPerson(){
  this.patientService.getRelatedPersonByIdScenario(this.idScenario)
  .subscribe( (res: any) => {
    if(res != null){
    this.relatedPersons = res;
    }else
    {
      this.relPersonNull= true;
    }

    console.log(res);
  }, ( err) => {
      console.log(err);
  });
}
}
