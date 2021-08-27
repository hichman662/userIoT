import { CarePlanService } from './../services/careplan.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { CareActivity } from '../models/careActivity.model';
@Component({
  selector: 'app-care-activity',
  templateUrl: './care-activity.page.html',
  styleUrls: ['./care-activity.page.scss'],
})
export class CareActivityPage implements OnInit {

  public careActivities: any[] = [];
  public idScenario: number;
  public valueCareActivity: number;
  public careActivityNull = false;
  public nameCareActivity='';
  constructor(
    private carePlanService: CarePlanService,
    public router: Router,
    private storage: Storage

  ) { }

  ngOnInit() {
    this.storage.get('idScenario').then((val) => {
      this.idScenario = val;
      if(this.idScenario != null){
        this.callCareActivity();
      }
    });
  }
  callCareActivity(){
    this.carePlanService.getCareActivityByIdScenario(this.idScenario)
    .subscribe( (res: any) => {
      if(res != null){
        this.careActivities = res;
        this.nameCareActivity = res.Name;
        this.careActivityNull= false;
      }else{
        this.careActivityNull= true;
        this.careActivities = null;
      }
      console.log(res);

    }, ( err) => {
        console.log(err);
    });
  }
}
