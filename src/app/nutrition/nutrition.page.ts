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
  segmentModel = 'details';
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
       this.nutritionName = res.ValueCareActivity.Name;
       this.nutritionDescrip = res.ValueCareActivity.Description;
       this.valueCareActivity = res.ValueCareActivity;
       this.nutritionDetail = res.ValueCareActivity.NutritionOrders;


    }
    }, (err) => {
      console.log(err);
    });
  }

}
