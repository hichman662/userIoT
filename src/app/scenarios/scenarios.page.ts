import { ScenarioService } from './../services/scenario.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Scenario } from '../models/scenario.model';
import { IonItemSliding, AlertController, LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-scenarios',
  templateUrl: './scenarios.page.html',
  styleUrls: ['./scenarios.page.scss'],
})
export class ScenariosPage implements OnInit {

  public listScenario: Scenario[] = [];
  constructor(
    private scenarioService: ScenarioService,
    public alertController: AlertController,
    public loadingController: LoadingController,
    public router: Router,
    private storage: Storage
  ) { }


  ngOnInit(): void {}

  ionViewWillEnter() {
    this.scenarioService.getAllScenario()
    .subscribe( (res: any) => {
        this.listScenario = res;
    }, ( err) => {
        console.log(err);
    });
  }

  async start(id: any) {
    this.storage.set('idScenario', id);
    this.router.navigateByUrl('/tabs', { replaceUrl:true });
  }

  closeSliding(slidingItem: IonItemSliding){
    slidingItem.close();
  }

 async deleteScenario(slidingItem: IonItemSliding, id: number, name: string){
    slidingItem.close();
    console.log(id);
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Remove Scenario',
      message: `Are you sure you want remove ${name}?`,
      buttons: [  {
        text: 'Cancel',
        handler: () => {
          console.log('Disagree clicked');
        }
      },
      {
        text: 'Agree',
        handler: () => {
          console.log('Agree clicked');
          this.scenarioService.deleteScenario(id)
          // tslint:disable-next-line: deprecation
          .subscribe( (res: any) => {
            this.ionViewWillEnter();
          }, ( err) => {
              console.log(err);
          });
        }
      }]
    });

    await alert.present();

  }

}
