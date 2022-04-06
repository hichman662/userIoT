import { Attribute } from './../../models/attribute.model';
/* eslint-disable @typescript-eslint/quotes */
import { CarePlanService } from './../../services/careplan.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Entity } from './../../models/entity.model';
import { IonItemSliding, AlertController } from '@ionic/angular';
@Component({
  selector: 'app-detail-vital-sign',
  templateUrl: './detail-vital-sign.page.html',
  styleUrls: ['./detail-vital-sign.page.scss'],
})
export class DetailVitalSignPage implements OnInit {

  public vitalSignName: '';
  public vitalSignDescrip: '';
  public measureVitalSign: any;
  public vitalSignLOINCode: number;
  segmentModel = 'details';
  public attriubute: Attribute[] = [];
  private idPassedByURL: number = null;
  constructor(
    private carePlanService: CarePlanService,
    private route: ActivatedRoute

  ) { }


  ngOnInit() {

    this.idPassedByURL = this.route.snapshot.params.Id;
    this.carePlanService.getEntitynById(this.idPassedByURL)
    .subscribe((res: Entity ) => {
      this.attriubute = res.Attributes;
    }, (err) => {
      console.log(err);
    });
  }
  closeSliding(slidingItem: IonItemSliding){
    slidingItem.close();
  }

  editAttr(slidingItem: IonItemSliding ,id: number, attr: any){
    slidingItem.close();

  }
}
