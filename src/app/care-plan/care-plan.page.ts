import { CarePlanService } from './../services/careplan.service';
import { CarePlan } from './../models/carePlan.model';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-care-plan',
  templateUrl: './care-plan.page.html',
  styleUrls: ['./care-plan.page.scss'],
})
export class CarePlanPage implements OnInit {

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
