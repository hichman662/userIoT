import { UserService } from 'src/app/services/user.service';
import { Component } from '@angular/core';
import { UserData } from '../models/userData.model';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  practitionerCounter = 0;
  relatedPersonCounter = 0;
  patientAccessCounter = 0;
  relPersonNull= false;
  public idScenario: number;

  constructor(private storage: Storage,
    private userService: UserService,
    ) {}

  ionViewWillEnter(){
    this.storage.get('idScenario').then((val) => {
      this.idScenario = val;
      if(this.idScenario != null){
        this.callRelatedPerson();
      }
    });

  }

  callRelatedPerson(){
    this.userService.getRelatedPersonByIdScenario(this.idScenario)
    .subscribe( (res: UserData[]) => {
      console.log(res);
      if(res !== null){
        this.practitionerCounter = res.length;
      }else
      {
        this.relPersonNull= true;
      }
      console.log(res);
    }, ( err) => {
        console.log(err);
    });
  }
}
