/* eslint-disable max-len */
import { Appointment } from './../models/appointment.model';
import { Medication } from './../models/medication.model';
import { DeviceService } from './../services/device.service';
import { PatientService } from './../services/patient.service';
import { UserData } from './../models/userData.model';
import { Disability } from './../models/disability.model';
import { PatientProfile } from './../models/patientProfile.model';
import { UserService } from './../services/user.service';
import { ScenarioService } from './../services/scenario.service';
import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Scenario } from '../models/scenario.model';
import { Disease } from '../models/disease.model';
import { CarePlanService } from './../services/careplan.service';
import { CarePlan } from './../models/carePlan.model';
import { PatientAccess } from '../models/patientAccess.model';
import { Device } from '../models/device.model';
import { Nutrition } from '../models/nutrition.model';
import { Communication } from '../models/communication.model';
import { ConsoleLogger } from '@microsoft/signalr/dist/esm/Utils';
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
  public patientNull = false;
  public patientName = '';
  public patientSurnames = '';
  patientDescription = '';
  load = false;
  public scenario: Scenario;
  public idScenario: number;
  public scenarioName: string;
  public carePlans: CarePlan[] = [];
  public carePlanNull = false;
  token: '';
  segmentModel = 'diseases';
  public patientAccess: PatientAccess[] = [];
  public patientAccessNull = false;
  public devices: Device[] = [];
  devicesNull= false;
  public nutritions: Nutrition[] = [];
  public nutritionNull = false;
  public medications: Medication[] = [];
  public medicationNull = false;
  public appointments: Appointment[] = [];
  public appointmentNull = false;
  public communications: Communication[] = [];
  public communicationNull = false;

  constructor(private storage: Storage,
    private scenarioService: ScenarioService,
    private userService: UserService,
    private carePlanService: CarePlanService,
    private patientService: PatientService,
    private deviceService: DeviceService
)
   { }

 ngOnInit() {

  }

  async ionViewWillEnter(){
    this.idScenario = await this.storage.get('idScenario');
    console.log('I´m carrying Scenario Id', this.idScenario);
    this.storage.get('token').then((val) => {
      this.token = val;
      console.log(val);
      if(this.token !== null && this.idScenario !== null && this.idScenario !== undefined){
        this.getEscenarioById (this.idScenario, this.token);
        this.callingPatientByIdScenario(this.idScenario);
        this.callCarePlans(this.idScenario);
        this.callPatientAccess();
        this.callDevice();
        this.callNutritions();
        this.callAppointments();
        this.callCommunications();
        this.callMedications();
      }
    });
  }



  async getEscenarioById( id: number, token: any){
    console.log();
    await this.scenarioService.getScenarioById(id, token)
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
      if(res !== null){
        this.patientName = res[0].Name;
        this.patientSurnames = res[0].Surnames;
        this.patientDescription = res[0].Description;
        this.patientNull = false;
      }else{
        this.patientNull = true;
        this.storage.set('idPatient',null);
      }
    if(res[0].Patient.PatientProfile !== null){
      this.patientProfileNull = false;
       this.patientProfile = res[0].Patient.PatientProfile;
      this.diseases = res[0].Patient.PatientProfile.Diseases;
      this.disabilities = res[0].Patient.PatientProfile.Disabilities;
      this.load= true;
    }else{
      this.patientProfileNull = true;
      this.storage.set('idPatientProfile',null);
    }
    }, (err) => {
      console.log(err);
    });

  }


  callCarePlans(id: number){
    this.carePlanService.getCarePlanByIdScenario(id)
    .subscribe( (res: any) => {
      if(res !== null){
        this.carePlans = res;
        this.carePlanNull = false;
      }else{
        this.carePlans = null;
        this.carePlanNull = true;
      }
    }, ( err) => {
        console.log(err);
    });
  }

  callPatientAccess(){
    this.patientService.getPatientAccessByIdScenario(this.idScenario)
    .subscribe( (res: any) => {
      if(res !== null){
        this.patientAccess = res;
        this.patientAccessNull = false;
      }else{
        this.patientAccess = null;
        this.patientAccessNull = true;
      }
    }, ( err) => {
        console.log(err);
    });
  }

  callNutritions(){
    this.carePlanService.getnutritionsByIdScenario(this.idScenario)
    .subscribe( (res: Nutrition[]) => {
      if(res !== null){
        this.nutritions = res;
        this.nutritionNull = false;
      }else{
        this.nutritions = null;
        this.nutritionNull = true;
      }
    }, ( err) => {
        console.log(err);
    });
  }

  callMedications(){
    this.carePlanService.getMedicationsByIdScenario(this.idScenario)
    .subscribe( (res: Medication[]) => {
      if(res !== null){
        this.medications = res;
        this.medicationNull = false;
      }else{
        console.log(res);
        this.medications = null;
        this.medicationNull = true;
      }
    }, ( err) => {
        console.log(err);
    });
  }

  callAppointments(){
    this.carePlanService.getAppointmentsByIdScenario(this.idScenario)
    .subscribe( (res: Appointment[]) => {
      if(res !== null){
        this.appointments = res;
        this.appointmentNull = false;
      }else{
        this.appointments = null;
        this.appointmentNull = true;
      }
    }, ( err) => {
        console.log(err);
    });
  }

  callCommunications(){
    this.carePlanService.getCommunicationByIdScenario(this.idScenario)
    .subscribe( (res: Communication[]) => {
      if(res !== null){
        this.communications = res;
        this.communicationNull = false;
      }else{
        this.communications = null;
        this.communicationNull = true;
      }
    }, ( err) => {
        console.log(err);
    });
  }
  callDevice(){
    this.deviceService.getDeviceByIdScenario(this.idScenario)
    .subscribe( (res: Device[]) => {
        if(res !== null){
          this.devices = res;
        }else{
          this.devicesNull = true;
        }
    }, ( err) => {
        console.log(err);
    });
  }

}

