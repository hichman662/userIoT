import { Router } from '@angular/router';
import { CarePlanService } from './../services/careplan.service';
import { Component, OnInit } from '@angular/core';
import { CarePlan } from '../models/carePlan.model';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-vital-sign',
  templateUrl: './vital-sign.page.html',
  styleUrls: ['./vital-sign.page.scss'],
})
export class VitalSignPage implements OnInit {

  public carePlans: CarePlan[] = [];
  public idScenario: number;
  constructor(
    private carePlanService: CarePlanService,
    public router: Router,
    private storage: Storage

  ) { }

  ngOnInit() {
    this.storage.get('idScenario').then((val) => {
      this.idScenario = val;
      if(this.idScenario != null){
        this.callCarePlans();
      }
    });
  }
  callCarePlans(){
    this.carePlanService.getCarePlanByIdScenario(this.idScenario)
    .subscribe( (res: any) => {
        this.carePlans = res;
    }, ( err) => {
        console.log(err);
    });
  }

}
