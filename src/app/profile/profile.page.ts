import { PractitionerData } from './../models/practitionerData.model';
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
  public emailMedico ='';
  public practitionerEmail = '';
  public practitioner: Practitioner;
  public practitionerData: PractitionerData;
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
    this.storage.get('email').then((val) => {
      this.emailMedico = val;
      if(this.emailMedico !== 'null'){
        this.callingPatient();
      }
    });
  }

  callingPatient(){
    this.userService.getPractitionerByEmail(this.emailMedico)
    .subscribe((res: Practitioner ) => {
      console.log(res);
    if(res != null){
      this.practitionerEmail = res[0].Email;
       this.practitionerData = res[0].UserPractitioner;
       this.load= true;

    }else{
      this.load= false;
    }
    }, (err) => {
      console.log(err);
    });
  }

}
