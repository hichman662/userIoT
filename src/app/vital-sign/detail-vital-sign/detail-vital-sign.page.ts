/* eslint-disable quote-props */
/* eslint-disable @typescript-eslint/naming-convention */
import { Attribute } from './../../models/attribute.model';
/* eslint-disable @typescript-eslint/quotes */
import { CarePlanService } from './../../services/careplan.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Entity } from './../../models/entity.model';
import { IonItemSliding, AlertController, ToastController, IonButtons } from '@ionic/angular';
import { Button } from 'protractor';
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
    private route: ActivatedRoute,
    public alertController: AlertController,
    public toastController: ToastController

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

  async presentToast(color: string , message: string) {
    const toast = await this.toastController.create({
      color: `${color}`,
      message: `${message}`,
      duration: 2500,
      position: 'bottom'
    });
    await toast.present();
  }

  async editAttr(slidingItem: IonItemSliding ,id: number, attr: string){
    slidingItem.close();
    const alert = await this.alertController.create({
      inputs: [
        {
          name: 'ValueAttr',
          placeholder: `${attr}`,
          value: `${attr}`
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('You Clicked on Cancel');
          }
        },
        {
          text: 'Modify',
          handler: data => {
            if (data.ValueAttr !== '') {
               this.carePlanService.modifyEntityAttribute(id, {"ValueAttr" : data.ValueAttr})
              .subscribe((res: Attribute ) => {
                this.presentToast('success','Your settings have been saved.');
                this.ngOnInit();
                 }, (err) => {
              console.log(err);
              this.presentToast('danger','Your settings have not been saved.');
              });
            } else {
              return false;
            }
          }
        }
      ]
    });
    await alert.present();
}

}
