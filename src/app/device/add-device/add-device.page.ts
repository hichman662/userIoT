import { DeviceTemplate } from './../../models/deviceTemplate.model';
import { AccessMode } from './../../models/accessMode.model';
import { PatientService } from './../../services/patient.service';
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
  accessModeForm: FormGroup;
  deviceTemplateForm: FormGroup;
  name = '';
  carePlan: CarePlan;
  patientProfileId: number;
  public idScenario: number;
  public allProfileAccessMods: AccessMode[];
  public allDeviceTemplates: DeviceTemplate[];
  assignDeviceTemplateDone = false;
  deviceAddDone = false;
  assignAccessModeDone = false;
  allOkey = false;
  idAccessModeChoosen: number;
  constructor(
    public navCtrl: NavController,
    private deviceService: DeviceService,
    public alertController: AlertController,
    private router: Router,
    private storage: Storage,
    private patientService: PatientService
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

  this.accessModeForm = new FormGroup({
    idAccessMode: new FormControl(Number, [
      Validators.required
    ])
  });

  this.deviceTemplateForm = new FormGroup({
    p_devicetemplate_oid: new FormControl(Number, [
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

    this.storage.get('idPatientProfile').then((val) => {
        this.patientProfileId = val;
        if(this.patientProfileId !== null){
          this.callAllProfileAccessMode();
        }
    });

  }
  onSubmit(){

    this.deviceService.createDevice(this.deviceForm.value)
    .subscribe( (res: any) => {
      this.name = res.Name;
      this.deviceAddDone = true;
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
         // this.router.navigateByUrl('tabs/tab3/device');
        }
      }
      ]
    });

    await alert.present();
  }


 callAllProfileAccessMode(){
  this.patientService.getAccessModeByIdPatientprofile(this.patientProfileId)
  .subscribe( (res: AccessMode[]) => {
    this.allProfileAccessMods = res;
    console.log(this.allProfileAccessMods);
  }, ( err ) => {

  });
 }

 callAccessMode(){
  this.patientService.getAccessModeByIdPatientprofile(this.patientProfileId)
  .subscribe( (res: AccessMode[]) => {
    this.allProfileAccessMods = res;
    console.log(this.allProfileAccessMods);
  }, ( err ) => {

  });
 }

 callDeviceTemplate(){
  this.idAccessModeChoosen = this.accessModeForm.get('idAccessMode').value;
  this.deviceService.getDeviceTemplateByIdAccessMode(this.idAccessModeChoosen)
  .subscribe( (res: DeviceTemplate[]) => {
    this.allDeviceTemplates = res;
    console.log(this.allDeviceTemplates);
  }, ( err ) => {

  });

 }

}
