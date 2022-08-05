import { Router } from '@angular/router';
/* eslint-disable @typescript-eslint/naming-convention */
import { ScenarioService } from './../../services/scenario.service';
import { AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Scenario } from 'src/app/models/scenario.model';

@Component({
  selector: 'app-add-scenario',
  templateUrl: './add-scenario.page.html',
  styleUrls: ['./add-scenario.page.scss'],
})
export class AddScenarioPage implements OnInit {

  scanearioForm: FormGroup;
  scenario: Scenario;
  scenarioAddDone = false;
  name = '';
  constructor(
    private scenarioService: ScenarioService,
    public alertController: AlertController,
    private router: Router,
  ) {

    this.scanearioForm = new FormGroup({
    Name: new FormControl('', [
      Validators.required
    ]),
    Description: new FormControl('', [
      Validators.required
    ])
  });
}

  ngOnInit() {
  }

  onSubmit(){
    this.scenario = this.scanearioForm.value;
    this.scenarioService.createScenario(this.scenario)
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
          this.scenarioAddDone = true;
          //this.router.navigateByUrl('/scenarios');
        }
      }/* ,
      {
        text: 'Add another Device Template',
        handler: () => {
         this.deviceTemplateForm.reset();
        }
      } */
      ]
    });

    await alert.present();
  }

}
