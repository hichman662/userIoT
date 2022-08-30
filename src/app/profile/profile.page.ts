import { PatientService } from './../services/patient.service';
import { Practitioner } from 'src/app/models/practitioner.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserData } from 'src/app/models/userData.model';
import { Storage } from '@ionic/storage';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  load = false;
  public patientName = '';
  public patientDescrip = '';
  public patientData: UserData;
  public idPaciente: number;
  public profileEmail = '';
  public profileNull = false;

  segmentModel = 'details';

  constructor(
    private patientService: PatientService,
    private userService: UserService,
    private route: ActivatedRoute,
    private storage: Storage

  ) { }


  ngOnInit() {
    this.storage.get('idPatient').then((val) => {
      this.idPaciente = val;
      if(this.idPaciente !== 0){
        this.callingPatient();
      }
    });
  }

  callingPatient(){
    this.patientService.getPatientById(this.idPaciente)
    .subscribe((res: Practitioner ) => {
      console.log(res);
    if(res != null){
      this.storage.set('idPatient',res[0].Patient.Id);
       this.patientName = res[0].Name;
       this.patientDescrip = res[0].Description;
      // this.patientEmail = res[0].Patient.Email;
       this.patientData = res[0];
       this.load= true;

    }else{
      //this.patientNull = true;
      this.load= false;
    }
    }, (err) => {
      console.log(err);
    });
  }

}
