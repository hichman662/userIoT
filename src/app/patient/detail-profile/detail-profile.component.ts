import { Disability } from './../../models/disability.model';
import { Condition } from './../../models/condition.model';
import { PatientService } from './../../services/patient.service';
import { PatientProfile } from './../../models/patientProfile.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';

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
  private idScenario: number;
  constructor(
    private patientService: PatientService,
    private route: ActivatedRoute,
    private storage: Storage

  ) { }


  ngOnInit() {
    this.storage.get('idScenario').then((val) => {
      this.idScenario = val;
      if(this.idScenario !== 0){
        this.callingPatient();
      }
    });
  }
  callingPatient(){
    this.patientService.getPatientByIdScenario(this.idScenario)
    .subscribe((res: any ) => {
    if(res != null){
       this.patientProfile = res[0].PatientProfile;
      this.diseases = res[0].PatientProfile.Diseases;
      this.disabilities = res[0].PatientProfile.Disabilities;
    }
    }, (err) => {
      console.log(err);
    });

  }
}
