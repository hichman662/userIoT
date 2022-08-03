import { UserData } from './../models/userData.model';
import { Disability } from './../models/disability.model';
import { PatientProfile } from './../models/patientProfile.model';
import { UserService } from './../services/user.service';
import { ScenarioService } from './../services/scenario.service';
import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Scenario } from '../models/scenario.model';
import { Disease } from '../models/disease.model';

@Component({
  selector: 'app-tab0',
  templateUrl: './tab0.page.html',
  styleUrls: ['./tab0.page.scss'],
})
export class Tab0Page implements OnInit {
  public patientProfile: PatientProfile;
  public diseases: Disease [] = [];
  public disabilities: Disability [] = [];
  public patientProfileNull = false;
  public patientName = '';
  public patientSurnames = '';
  patientDescription = '';
  load = false;
  public scenario: Scenario;
  public idSecanrio: number;
  public scenarioName: string;
  segmentModel = 'diseases';
  constructor(private storage: Storage,
    private scenarioService: ScenarioService,
    private userService: UserService
)
   { }

  async ngOnInit() {

    this.idSecanrio = await this.storage.get('idScenario');
    console.log('I´m carrying Scenario Id', this.idSecanrio);
    if( this.idSecanrio !== null || this.idSecanrio !== undefined ){
      this.getEscenarioById (this.idSecanrio);
      this.callingPatientByIdScenario(this.idSecanrio);
    }



  }

  async getEscenarioById( id: number){
    console.log();
    await this.scenarioService.getScenarioById(id)
    .subscribe( (res: Scenario) => {
        this.scenario = res;
        this.load = true;
        console.log(this.scenario);
       // this.router.navigateByUrl('/scenarios', { replaceUrl:true });
    }, ( err) => {
        console.log(err);
    });
  }

  async callingPatientByIdScenario(id: number){
    await this.userService.getPatientByIdScenario(id)
    .subscribe((res: UserData[] ) => {
      if(res[0] != null){
        this.patientName = res[0].Name;
        this.patientSurnames = res[0].Surnames;
        this.patientDescription = res[0].Description;
      }
    if(res[0].Patient.PatientProfile != null){
      this.patientProfileNull = false;
       this.patientProfile = res[0].Patient.PatientProfile;
      this.diseases = res[0].Patient.PatientProfile.Diseases;
      this.disabilities = res[0].Patient.PatientProfile.Disabilities;
      this.load= true;

    }else{
      this.patientProfileNull = true;
    }
    }, (err) => {
      console.log(err);
    });

  }
}



