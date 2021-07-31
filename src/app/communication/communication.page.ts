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
  public communication: Communication;
  segmentModel = 'details';
  private idPassedByURL: number = null;
  constructor(
    private carePlanService: CarePlanService,
    private route: ActivatedRoute

  ) { }


  ngOnInit() {
    this.idPassedByURL = this.route.snapshot.params.Id;
    this.carePlanService.getCareActivitynById(this.idPassedByURL)
    .subscribe((res: any ) => {
      console.log(res);
    if(res != null){
       this.communicationName = res.Name;
       this.communicationDescrip = res.Description;
       this.valueCareActivity = res.ValueCareActivity;

    }
    }, (err) => {
      console.log(err);
    });
  }
}
