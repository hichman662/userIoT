/* eslint-disable @typescript-eslint/naming-convention */
import { AlertController } from '@ionic/angular';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';
import { UserData } from 'src/app/models/userData.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.page.html',
  styleUrls: ['./add-user.page.scss'],
})
export class AddUserPage implements OnInit {

  userForm: FormGroup;
  surenames = '';
  user: UserData;

  constructor(
    private userService: UserService,
    public alertController: AlertController,
    private router: Router,
    private location: Location
  ) {

    this.userForm = new FormGroup({
    Name: new FormControl('', [
      Validators.required
    ]),
    Surnames: new FormControl('', [
      Validators.required
    ]),
    Description: new FormControl('', [
      Validators.required
    ]),
    Pass: new FormControl('', [
      Validators.required
    ]),
    Type: new FormControl(Number, [
      Validators.required
    ]),
    IsDiseased: new FormControl(Boolean, [
      Validators.required
    ]),
    IsActive: new FormControl(Boolean, [
      Validators.required
    ]),
    Email: new FormControl('', [
      Validators.required, Validators.email
    ]),
  });
}

  ngOnInit() {

  }

  onSubmit(){
    this.userService.createUser(this.userForm.value)
    .subscribe( (res: any) => {
      this.surenames = res.Surnames;

      this.presentAlert();
    }, ( err ) => {

    });

  }
  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'SUCCESS!',
      message: `The ${this.surenames} has been added successfully`,
      buttons: [  {
        text: 'Ok',
        handler: () => {
          this.location.back();
        }
      }
      ]
    });

    await alert.present();
  }

}
