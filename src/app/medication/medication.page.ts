import { Medication } from './../models/medication.model';
import { CarePlanService } from './../services/careplan.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-medication',
  templateUrl: './medication.page.html',
  styleUrls: ['./medication.page.scss'],
})
export class MedicationPage implements OnInit {

  public medicationName: '';
  public medicationDescrip: '';
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
       this.medicationName = res.Name;
       this.medicationDescrip = res.Description;
       this.valueCareActivity = res.ValueCareActivity;

    }
    }, (err) => {
      console.log(err);
    });
  }
}
