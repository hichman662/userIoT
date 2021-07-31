import { CarePlanService } from './../services/careplan.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nutrition',
  templateUrl: './nutrition.page.html',
  styleUrls: ['./nutrition.page.scss'],
})
export class NutritionPage implements OnInit {

  public nutritionName: '';
  public nutritionDescrip: '';
  public valueCareActivity: any;
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
       this.nutritionName = res.Name;
       this.nutritionDescrip = res.Description;
       this.valueCareActivity = res.ValueCareActivity;

    }
    }, (err) => {
      console.log(err);
    });
  }

}
