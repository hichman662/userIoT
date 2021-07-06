import { Disability } from './../../models/disability.model';
import { Condition } from './../../models/condition.model';
import { PatientService } from './../../services/patient.service';
import { PatientProfile } from './../../models/patientProfile.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-profile',
  templateUrl: './detail-profile.component.html',
  styleUrls: ['./detail-profile.component.scss'],
})
export class DetailProfileComponent implements OnInit {

  public patientProfile: PatientProfile;
  public diseases: Condition [] = [];
  public disabilities: Disability [] = [];
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
    if(res != null){

       this.patientProfile = res.PatientProfile;
      this.diseases = res.PatientProfile.Diseases;
      this.disabilities = res.PatientProfile.Disabilities;
    }
    }, (err) => {
      console.log(err);
    });
  }
}
