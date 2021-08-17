/* eslint-disable @typescript-eslint/naming-convention */
import { PatientAccess } from './../../models/patientAccess.model';
import { Router } from '@angular/router';
import { PatientService } from './../../services/patient.service';
import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-add-patient-access',
  templateUrl: './add-patient-access.page.html',
  styleUrls: ['./add-patient-access.page.scss'],
})
export class AddPatientAccessPage implements OnInit {

  patientAccessForm: FormGroup;
  name = '';
  patientAccess: PatientAccess;
  public idScenario: number;

  constructor(
    public navCtrl: NavController,
    private patientService: PatientService,
    public alertController: AlertController,
    private router: Router,
    private storage: Storage
  ) {

    this.patientAccessForm = new FormGroup({
    Name: new FormControl('', [
      Validators.required
    ]),
    Description: new FormControl('', [
      Validators.required
    ]),
    Scenario_oid: new FormControl(Number, [
      Validators.required
    ])
  });
}

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.storage.get('idScenario').then((val) => {
      this.patientAccessForm.get('Scenario_oid').setValue(val);
    });
  }
  onSubmit(){

    this.patientService.createPatientAccess(this.patientAccessForm.value)
    .subscribe( (res: any) => {
      this.name = res.Name;
      this.presentAlert();
    }, ( err ) => {

    });

  }
  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'SUCCESS!',
      message: `The ${this.name} has been added successfully`,
      buttons: [  {
        text: 'Ok',
        handler: () => {
          this.router.navigateByUrl('tabs/tab1/patientAccess');
        }
      }
      ]
    });

    await alert.present();
  }


}
