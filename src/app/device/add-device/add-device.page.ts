/* eslint-disable @typescript-eslint/naming-convention */

import { DeviceService } from './../../services/device.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { CarePlan } from 'src/app/models/carePlan.model';

@Component({
  selector: 'app-add-device',
  templateUrl: './add-device.page.html',
  styleUrls: ['./add-device.page.scss'],
})
export class AddDevicePage implements OnInit {

  deviceForm: FormGroup;
  name = '';
  carePlan: CarePlan;
  public idScenario: number;

  constructor(
    public navCtrl: NavController,
    private deviceService: DeviceService,
    public alertController: AlertController,
    private router: Router,
    private storage: Storage
  ) {

    this.deviceForm = new FormGroup({
    Name: new FormControl('', [
      Validators.required
    ]),
    Description: new FormControl('', [
      Validators.required
    ]),
    Tag: new FormControl('', [
      Validators.required
    ]),
    SerialNumber: new FormControl('', [
      Validators.required
    ]),
    FirmVersion: new FormControl('', [
      Validators.required
    ]),
    Trademark: new FormControl('', [
      Validators.required
    ]),
    IsSimulated: new FormControl(Boolean, [
      Validators.required
    ]),
    DeviceSwitch: new FormControl(Boolean, [
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
      this.deviceForm.get('Scenario_oid').setValue(val);
    });
  }
  onSubmit(){

    this.deviceService.createDevice(this.deviceForm.value)
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
          this.router.navigateByUrl('tabs/tab3/device');
        }
      }
      ]
    });

    await alert.present();
  }

}
