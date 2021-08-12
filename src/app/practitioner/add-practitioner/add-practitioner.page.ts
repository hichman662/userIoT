/* eslint-disable @typescript-eslint/naming-convention */
import { Router } from '@angular/router';
import { UserService } from './../../services/user.service';
import { PatientService } from './../../services/patient.service';
import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { Practitioner } from 'src/app/models/practitioner.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-add-practitioner',
  templateUrl: './add-practitioner.page.html',
  styleUrls: ['./add-practitioner.page.scss'],
})
export class AddPractitionerPage implements OnInit {

  practitionerForm: FormGroup;
  name = '';
  practitioner: Practitioner;
  public idScenario: number;
  invitedUserName: string;
  invitedUserId: number;
  allUsers: any [] = [];
  data: any;
  constructor(
    public navCtrl: NavController,
    private patientService: PatientService,
    private userService: UserService,
    public alertController: AlertController,
    private router: Router,
    private storage: Storage
  ) {

    this.practitionerForm = new FormGroup({
    Name: new FormControl('', [
      Validators.required
    ]),
    Description: new FormControl('', [
      Validators.required
    ]),
    Scenario_oid: new FormControl(Number, [
      Validators.required
    ]),
    UserPractitioner_oid: new FormControl(Number, [
      Validators.required
    ])
  });
}

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.storage.get('idScenario').then((val) => {
      this.practitionerForm.get('Scenario_oid').setValue(val);
    });

    this.userService.getAllUsers()
    .subscribe( (res: any) => {
      this.allUsers = res;
        }, ( err ) => {
    });

    this.invitedUserName = this.userService.nameNewUser;
    this.invitedUserId = this.userService.idNewUser;

  }
  onSubmit(){

    this.patientService.createPractitioner(this.practitionerForm.value)
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
          this.router.navigateByUrl('tabs/tab1/practitioner');
        }
      }
      ]
    });

    await alert.present();
  }


}
