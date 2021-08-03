import { Communication } from './../models/communication.model';
import { CarePlanService } from './../services/careplan.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-communication',
  templateUrl: './communication.page.html',
  styleUrls: ['./communication.page.scss'],
})
export class CommunicationPage implements OnInit {

  public communicationName: '';
  public communicationDescrip: '';
  public valueCareActivity: any;
  public communicationDetail: any;
  public careActivityName: '';
  public careActivityDescrip: '';
  segmentModel = 'communication';
  private idPassedByURL: number = null;
  constructor(
    private carePlanService: CarePlanService,
    private route: ActivatedRoute

  ) { }


  ngOnInit() {
    this.idPassedByURL = this.route.snapshot.params.Id;
    this.carePlanService.getCareActivityById(this.idPassedByURL)
    .subscribe((res: any ) => {
      console.log(res);
    if(res != null){
       this.careActivityName = res.ValueCareActivity.Name;
       this.careActivityDescrip = res.ValueCareActivity.Description;
       this.valueCareActivity = res.ValueCareActivity;
      this.callCommunicationDetail();
    }
    }, (err) => {
      console.log(err);
    });
  }
  callCommunicationDetail(){
    this.carePlanService.getCommunicationByIdCareActivity(this.idPassedByURL)
    .subscribe((res: any ) => {
      console.log(res);
    if(res != null){
       this.communicationName = res[0].Name;
       this.communicationDescrip = res[0].Description;
       this.communicationDetail = res[0].ValueCommunication;

    }
    }, (err) => {
      console.log(err);
    });

  }
}
