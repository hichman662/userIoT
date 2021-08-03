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
  public nutritionDetail: any;
  public careActivityName: '';
  public careActivityDescrip: '';
  segmentModel = 'nutrition';
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
      this.callNutritionDetail();

    }
    }, (err) => {
      console.log(err);
    });
  }
  callNutritionDetail(){
    this.carePlanService.getNutritionyByIdCareActivity(this.idPassedByURL)
    .subscribe((res: any ) => {
      console.log(res);
    if(res != null){
       this.nutritionName = res[0].Name;
       this.nutritionDescrip = res[0].Description;
       this.nutritionDetail = res[0];

    }
    }, (err) => {
      console.log(err);
    });

  }

}
