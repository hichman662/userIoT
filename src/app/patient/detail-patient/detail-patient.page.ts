import { PatientService } from './../../services/patient.service';
import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/models/patient.model';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-detail-patient',
  templateUrl: './detail-patient.page.html',
  styleUrls: ['./detail-patient.page.scss'],
})
export class DetailPatientPage implements OnInit {

  segmentModel = 'details';
  public patient: Patient;
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
      this.patient = res;
    }, (err) => {
      console.log(err);
    });
  }

}
