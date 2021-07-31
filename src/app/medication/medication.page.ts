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
  public medicationDetail: any;
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
       this.medicationName = res.ValueCareActivity.Name;
       this.medicationDescrip = res.ValueCareActivity.Description;
       this.valueCareActivity = res.ValueCareActivity;
       this.medicationDetail = res.ValueCareActivity.Medications;

    }
    }, (err) => {
      console.log(err);
    });
  }
}
