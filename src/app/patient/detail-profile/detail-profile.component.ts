import { Router } from '@angular/router';
/* eslint-disable @typescript-eslint/naming-convention */
import { Disability } from './../../models/disability.model';
import { Condition } from './../../models/condition.model';
import { PatientService } from './../../services/patient.service';
import { PatientProfile } from './../../models/patientProfile.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AlertController, NavController } from '@ionic/angular';
@Component({
  selector: 'app-detail-profile',
  templateUrl: './detail-profile.component.html',
  styleUrls: ['./detail-profile.component.scss'],
})
export class DetailProfileComponent implements OnInit {
  name = '';
  patientProfileForm: FormGroup;
  public patientProfile: PatientProfile;
  public diseases: Condition [] = [];
  public disabilities: Disability [] = [];
  public patientProfileNull = false;
  public allPatientProfile: any [] = [];
  patientprofileId: number;
    segmentModel = 'details';
  public patientId: any;
  private idScenario: number;
  constructor(
    private patientService: PatientService,
    private route: ActivatedRoute,
    private storage: Storage,
    public navCtrl: NavController,
    public alertController: AlertController,
    private router: Router

  ) {
    this.patientProfileForm = new FormGroup({
      p_patientprofile_oid: new FormControl(Number, [
        Validators.required
      ])
    });
   }


  ngOnInit() {
    this.storage.get('idScenario').then((val) => {
      this.idScenario = val;
      if(this.idScenario !== 0){
        this.callingPatient();
      }
    });

    this.storage.get('idPatient').then((val) => {
      if(val != null){
        this.patientId= val;
      }
    });
  }
  ionViewWillEnter(){

  }
  callingPatient(){
    this.patientService.getPatientByIdScenario(this.idScenario)
    .subscribe((res: any ) => {
    if(res[0].PatientProfile != null){
      this.patientProfileNull = false;
       this.patientProfile = res[0].PatientProfile;
      this.diseases = res[0].PatientProfile.Diseases;
      this.disabilities = res[0].PatientProfile.Disabilities;
    }else{
      this.callingPatientProfile();
      this.patientProfileNull = true;

    }
    }, (err) => {
      console.log(err);
    });

  }
  callingPatientProfile(){
     this.patientService.getAllPatientProfile()
    .subscribe( (res2: any) => {
      this.allPatientProfile = res2;
        }, ( err ) => {
    });
  }

  onSubmit(){

    this.patientprofileId = this.patientProfileForm.get('p_patientprofile_oid').value;
    this.patientService.assignPatientProfile(this.patientId, this.patientprofileId)
    .subscribe( (res: any) => {
      this.storage.set('idPatientProfile', this.patientprofileId);
      this.presentAlert();
        }, ( err ) => {
    });
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'SUCCESS!',
      message: `The ${this.name} has been assigned successfully`,
      buttons: [  {
        text: 'Ok',
        handler: () => {
          this.callingPatient();
          this.router.navigateByUrl('tabs/tab1/patient');
        }
      }
      ]
    });

    await alert.present();
  }
}
