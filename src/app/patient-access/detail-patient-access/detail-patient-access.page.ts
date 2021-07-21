import { AccessMode } from './../../models/accessMode.model';
import { PatientService } from './../../services/patient.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-patient-access',
  templateUrl: './detail-patient-access.page.html',
  styleUrls: ['./detail-patient-access.page.scss'],
})
export class DetailPatientAccessPage implements OnInit {


  public patientAccessName: '';
  public patientAccessDescrip: '';
  public accessMode: AccessMode;
  segmentModel = 'details';
  private idPassedByURL: number = null;
  constructor(
    private patientService: PatientService,
    private route: ActivatedRoute

  ) { }


  ngOnInit() {
    this.idPassedByURL = this.route.snapshot.params.Id;
    this.patientService.getPatientAccessById(this.idPassedByURL)
    .subscribe((res: any ) => {
      console.log(res);
    if(res != null){
       this.patientAccessName = res.Name;
       this.patientAccessDescrip = res.Description;
       this.accessMode = res.AccessMode;

    }
    }, (err) => {
      console.log(err);
    });
  }

}
