import { CarePlanTemplate } from './../../models/carePlanTemplate.model';
import { CarePlanService } from './../../services/careplan.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarePlan } from 'src/app/models/carePlan.model';

@Component({
  selector: 'app-detail-care-plan',
  templateUrl: './detail-care-plan.page.html',
  styleUrls: ['./detail-care-plan.page.scss'],
})
export class DetailCarePlanPage implements OnInit {

  public carePlantemplate: CarePlanTemplate;
  public carePlan: CarePlan;
  public carePlanName: '';
  public carePlanDescription: '';
  public patientData: string []=[];
    segmentModel = 'CarePlanTemplate';
  private idPassedByURL: number = null;
  constructor(
    private carePlanService: CarePlanService,
    private route: ActivatedRoute

  ) { }


  ngOnInit() {
    this.idPassedByURL = this.route.snapshot.params.Id;
    this.carePlanService.getCarePlanById(this.idPassedByURL)
    .subscribe((res: any ) => {
    if(res != null){
      console.log(res);
      this.carePlanName = res.Name;
      this.carePlanDescription = res.Description;
       this.carePlantemplate = res.CarePlanTemplate;
    }
    }, (err) => {
      console.log(err);
    });
  }

}
