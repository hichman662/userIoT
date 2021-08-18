/* eslint-disable @typescript-eslint/naming-convention */
import { Router } from '@angular/router';
import { CarePlanService } from './../../services/careplan.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from './../../services/user.service';
import { NavController, AlertController } from '@ionic/angular';
import { Practitioner } from 'src/app/models/practitioner.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { CarePlan } from 'src/app/models/carePlan.model';

@Component({
  selector: 'app-add-care-plan',
  templateUrl: './add-care-plan.page.html',
  styleUrls: ['./add-care-plan.page.scss'],
})
export class AddCarePlanPage implements OnInit {

  carePlanForm: FormGroup;
  name = '';
  carePlan: CarePlan;
  public idScenario: number;

  constructor(
    public navCtrl: NavController,
    private carePlanService: CarePlanService,
    private userService: UserService,
    public alertController: AlertController,
    private router: Router,
    private storage: Storage
  ) {

    this.carePlanForm = new FormGroup({
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
      this.carePlanForm.get('Scenario_oid').setValue(val);
    });
  }
  onSubmit(){

    this.carePlanService.createCarePlan(this.carePlanForm.value)
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
          this.router.navigateByUrl('tabs/tab2/carePlan');
        }
      }
      ]
    });

    await alert.present();
  }


}
