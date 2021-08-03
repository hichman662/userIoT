import { CarePlanService } from './../services/careplan.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.page.html',
  styleUrls: ['./appointment.page.scss'],
})
export class AppointmentPage implements OnInit {
  public activityName: '';
  public activityDescrip: '';
  public appointmentName: '';
  public appointmentDescrip: '';
  public valueCareActivity: any;
  public appointmentDetail: any;
  public appointmentDate: any;
  segmentModel = 'appointment';
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
       this.activityName = res.ValueCareActivity.Name;
       this.activityDescrip = res.ValueCareActivity.Description;
       this.valueCareActivity = res.ValueCareActivity;
       this.appointmentDetail = res.ValueCareActivity.Appointments;
      this.callAppointmentDetail();
    }
    }, (err) => {
      console.log(err);
    });
  }

  callAppointmentDetail(){
    this.carePlanService.getAppointmentByIdCareActivity(this.idPassedByURL)
    .subscribe((res: any ) => {
      console.log(res);
    if(res != null){
       this.appointmentName = res[0].Name;
       this.appointmentDate = res[0].Date;
       this.appointmentDescrip = res[0].Description;
       this.appointmentDetail = res[0].ValueAppointment;

    }
    }, (err) => {
      console.log(err);
    });

  }

}
