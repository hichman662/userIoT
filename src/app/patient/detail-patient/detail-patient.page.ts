import { PatientProfile } from './../../models/patientProfile.model';
/* eslint-disable @typescript-eslint/naming-convention */
import { PatientService } from './../../services/patient.service';
import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/models/patient.model';
import { ActivatedRoute } from '@angular/router';
import { UserData } from 'src/app/models/userData.model';

@Component({
  selector: 'app-detail-patient',
  templateUrl: './detail-patient.page.html',
  styleUrls: ['./detail-patient.page.scss'],
})
export class DetailPatientPage implements OnInit {

  public patientName: '';
  public patientDescrip: '';
  public patientData: UserData;
  segmentModel = 'details';
  private idPassedByURL: number = null;
  constructor(
    private patientService: PatientService,
    private route: ActivatedRoute

  ) { }


  ngOnInit() {
    this.idPassedByURL = this.route.snapshot.params.Id;
    this.patientService.getPatientById(this.idPassedByURL)
    .subscribe((res: any ) => {
      console.log(res);
    if(res != null){
       this.patientName = res.Name;
       this.patientDescrip = res.Description;
       this.patientData = res.UserData;

    }
    }, (err) => {
      console.log(err);
    });
  }

}
