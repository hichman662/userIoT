/* eslint-disable @typescript-eslint/quotes */
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
  idPatientProfile: number;
  idcarePlanTemplate: number;
  constructor(
    private carePlanService: CarePlanService,
    public router: Router,
    private storage: Storage

  ) { }

  ngOnInit() {
    this.storage.get('idScenario').then((val) => {
      this.idScenario = val;
    });
    this.storage.get('idcarePlanTemplate').then((val) => {
      this.idcarePlanTemplate = val;
      if(this.idcarePlanTemplate != null){
        this.callCareActivityByIdCarePlanTemplate();
      }
    });
    this.storage.get('idPatientProfile').then((val) => {
      this.idPatientProfile = val;
      if(this.idPatientProfile != null){
        //this.callCarePlanTemplatesByIdPatientProfile();
      }
    });
  }



  callCarePlanTemplatesByIdPatientProfile(){
    this.carePlanService.getCarePlanTemplateByIdPatientProfile(this.idPatientProfile)
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



  callCareActivityByIdCarePlanTemplate(){
    this.carePlanService.getCareActivityByIdCarePlanTemplate(this.idcarePlanTemplate)
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

  goToInicio(){
    this.router.navigateByUrl("tabs", { skipLocationChange: false });
  }
}
