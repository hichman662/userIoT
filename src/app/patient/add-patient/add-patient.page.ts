/* eslint-disable @typescript-eslint/no-unused-expressions */
import { UserService } from './../../services/user.service';
/* eslint-disable @typescript-eslint/naming-convention */
import { Patient } from './../../models/patient.model';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { PatientService } from './../../services/patient.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.page.html',
  styleUrls: ['./add-patient.page.scss'],
})
export class AddPatientPage implements OnInit {

  patientForm: FormGroup;
  email = '';
  patient: Patient;
  public idScenario: number;
  invitedUserName: string;
  invitedUserId: number;
  findNotAlreadyPatient: any [] = [];

  data: any;
  constructor(
    public navCtrl: NavController,
    private patientService: PatientService,
    private userService: UserService,
    public alertController: AlertController,
    private router: Router,
    private storage: Storage
  ) {

    this.patientForm = new FormGroup({
    Email: new FormControl('', [
      Validators.required, Validators.email
    ]),
    Pass: new FormControl('', [
      Validators.required
    ]),
    UserPatient_oid: new FormControl(Number, [
      Validators.required
    ])
  });
}

  ngOnInit() {
  }

  ionViewWillEnter(){
    /* this.storage.get('idScenario').then((val) => {
      this.patientForm.get('Scenario_oid').setValue(val);
    }); */

    this.userService.getAllUsers()
    .subscribe( (res: any) => {
      console.log(res);
      this.findNotAlreadyPatient = res.filter( obj =>  obj.Patient === null);
      console.log(this.findNotAlreadyPatient);
        }, ( err ) => {
    });

    this.invitedUserName = this.userService.nameNewUser;
    this.invitedUserId = this.userService.idNewUser;

  }
  onSubmit(){
    this.patientService.createPatient(this.patientForm.value)
    .subscribe( (res: any) => {
      this.email = res.Email;
      /* this.userService.removeUserId();
      this.userService.removeUserName(); */

      this.presentAlert();
    }, ( err ) => {

    });

  }
  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'SUCCESS!',
      message: `The ${this.email} has been added successfully`,
      buttons: [  {
        text: 'Ok',
        handler: () => {
          this.router.navigateByUrl('/tabs/tab1');
        }
      }
      ]
    });

    await alert.present();
  }


}
