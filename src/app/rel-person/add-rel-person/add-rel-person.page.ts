/* eslint-disable @typescript-eslint/naming-convention */
import { UserService } from './../../services/user.service';
import { Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { PatientService } from './../../services/patient.service';
import { Component, OnInit } from '@angular/core';

import { RelatedPerson } from 'src/app/models/relatedPerson.model';
import { Storage } from '@ionic/storage';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-rel-person',
  templateUrl: './add-rel-person.page.html',
  styleUrls: ['./add-rel-person.page.scss'],
})
export class AddRelPersonPage implements OnInit {

  relPersonForm: FormGroup;
  name = '';
  relatedPerson: RelatedPerson;
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

    this.relPersonForm = new FormGroup({
    Name: new FormControl('', [
      Validators.required
    ]),
    Description: new FormControl('', [
      Validators.required
    ]),
    Scenario_oid: new FormControl(Number, [
      Validators.required
    ]),
    UserRelatedPerson_oid: new FormControl(Number, [
      Validators.required
    ])
  });
}

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.storage.get('idScenario').then((val) => {
      this.relPersonForm.get('Scenario_oid').setValue(val);
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

    this.patientService.createRelatedPerson(this.relPersonForm.value)
    .subscribe( (res: any) => {
      this.name = res.Name;
      this.userService.removeUserId();
      this.userService.removeUserName();

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
          this.router.navigateByUrl('tabs/tab1/relatedPerson');
        }
      }
      ]
    });

    await alert.present();
  }


}
