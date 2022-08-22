import { Nutrition } from './../../models/nutrition.model';
import { Medication } from './../../models/medication.model';
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/naming-convention */
import { CarePlanService } from './../../services/careplan.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { CareActivity } from 'src/app/models/careActivity.model';

@Component({
  selector: 'app-add-nutrition',
  templateUrl: './add-nutrition.page.html',
  styleUrls: ['./add-nutrition.page.scss'],
})
export class AddNutritionPage implements OnInit {
  addNutritionForm: FormGroup;
  name = '';
  careActivity: CareActivity;
  public idScenario: number;
  idNewNutrition: number;

  constructor(
    public navCtrl: NavController,
    private carePlanService: CarePlanService,
    public alertController: AlertController,
    private router: Router,
    private storage: Storage
  ) {

    this.addNutritionForm = new FormGroup({
    Name: new FormControl('', [
      Validators.required
    ]),
    Description: new FormControl('', [
      Validators.required
    ]),
    Scenario_oid: new FormControl(Number, [
      Validators.required
    ]),
    TimeAct: new FormControl(Date, [
      Validators.required
    ])
  });
}

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.storage.get('idScenario').then((val) => {
      this.addNutritionForm.get('Scenario_oid').setValue(val);
    });
  }

  onSubmit(){
    this.carePlanService.createNutritionOrder(this.addNutritionForm.value)
    .subscribe( (res: Nutrition) => {
      this.name = res.Name;
      this.idNewNutrition = res.Id;
      console.log(this.idNewNutrition);
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
          //this.router.navigateByUrl('/tabs/tab2');
        }
      }
      ]
    });

    await alert.present();
  }


}
