import { UserService } from './../services/user.service';
import { PatientService } from './../services/patient.service';
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
  private idScenario: number;
  private token: any;
  constructor(
    private scenarioService: ScenarioService,
    private userService: UserService,
    public alertController: AlertController,
    public loadingController: LoadingController,
    public router: Router,
    private storage: Storage
  ) { }


  ngOnInit(): void {}

  ionViewWillEnter() {
    this.storage.get('token').then((val) => {
      this.token = val;
      console.log(val);
      if(this.token != null){
        this.getEscenario(this.token);
      }
    });

  }

  getEscenario(token: string){
    console.log(token);
    this.scenarioService.getAllScenario(token)
    .subscribe( (res: any) => {
        this.listScenario = res;
        console.log(this.listScenario);
        this.router.navigateByUrl('/scenarios', { replaceUrl:true });
    }, ( err) => {
        console.log(err);
    });
  }



  async start(id: any) {
    this.idScenario = id;
    this.storage.set('idScenario', id);
    this.router.navigateByUrl('/tabs', { replaceUrl:true });
    this.callPatient();
  }

  callPatient(){
    this.userService.getPatientByIdScenario(this.idScenario)
    .subscribe( (res: any) => {
      console.log(res);
      if(res != null && res[0].PatientProfile != null){
      this.storage.set('idPatientProfile',  res[0].PatientProfile.Id);
    }
    else{
      this.storage.set('idPatientProfile',null);
    }
    }, ( err) => {
        console.log(err);
    });
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
