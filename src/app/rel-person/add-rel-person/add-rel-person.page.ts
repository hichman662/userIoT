import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { PatientService } from './../../services/patient.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RelatedPerson } from 'src/app/models/relatedPerson.model';

@Component({
  selector: 'app-add-rel-person',
  templateUrl: './add-rel-person.page.html',
  styleUrls: ['./add-rel-person.page.scss'],
})
export class AddRelPersonPage implements OnInit {

  relPersonForm: FormGroup;
  name = '';
  patient: RelatedPerson;
  public idScenario: number;
  allPatientProfiles: any [] = [];
  constructor(
    private patientService: PatientService,
    public alertController: AlertController,
    private router: Router,
    private storage: Storage
  ) {

   /*  this.relPersonForm = new FormGroup({
    Name: new FormControl('', [
      Validators.required
    ]),
    Description: new FormControl('', [
      Validators.required
    ]),
    Scenario_oid: new FormControl(Number, [
      Validators.required
    ]),
    UserPatient_oid: new FormControl(Number, [
      Validators.required
    ])
  }); */
}

  ngOnInit() {
    this.storage.get('idScenario').then((val) => {
      this.relPersonForm.get('Scenario_oid').setValue(val);
    });
  }

}
