import { Target } from './../../models/target.model';
import { Goal } from './../../models/goal.model';
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

  public carePlanTemplate: CarePlanTemplate;
  public carePlan: CarePlan;
  public carePlanName: '';
  public carePlanDescription: '';
  public goals: Goal[];
  public targets: Target[];
    segmentModel = 'details';
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
      this.carePlanName = res.Name;
      this.carePlanDescription = res.Description;
       this.carePlanTemplate = res.CarePlanTemplate;
       this.goals = res.CarePlanTemplate.Goals;
       this.targets =  res.CarePlanTemplate.Goals[0].Targets;
       console.log(this.targets);
    }
    }, (err) => {
      console.log(err);
    });
  }

}
