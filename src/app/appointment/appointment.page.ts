import { CarePlanService } from './../services/careplan.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.page.html',
  styleUrls: ['./appointment.page.scss'],
})
export class AppointmentPage implements OnInit {

  public appointmentName: '';
  public appointmentDescrip: '';
  public valueCareActivity: any;
  public appointmentDetail: any;
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
       this.appointmentName = res.ValueCareActivity.Name;
       this.appointmentDescrip = res.ValueCareActivity.Description;
       this.valueCareActivity = res.ValueCareActivity;
       this.appointmentDetail = res.ValueCareActivity.Appointments;

    }
    }, (err) => {
      console.log(err);
    });
  }
}
