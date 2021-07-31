import { CarePlanService } from './../../services/careplan.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-vital-sign',
  templateUrl: './detail-vital-sign.page.html',
  styleUrls: ['./detail-vital-sign.page.scss'],
})
export class DetailVitalSignPage implements OnInit {

  public vitalSignName: '';
  public vitalSignDescrip: '';
  public measureVitalSign: any;
  segmentModel = 'details';
  private idPassedByURL: number = null;
  constructor(
    private carePlanService: CarePlanService,
    private route: ActivatedRoute

  ) { }


  ngOnInit() {
    this.idPassedByURL = this.route.snapshot.params.Id;
    this.carePlanService.getVitalSignById(this.idPassedByURL)
    .subscribe((res: any ) => {
      console.log(res);
    if(res != null){
       this.vitalSignName = res.Name;
       this.vitalSignDescrip = res.Description;
       this.measureVitalSign = res.MeasureVitalSign;

    }
    }, (err) => {
      console.log(err);
    });
  }
}
