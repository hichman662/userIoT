import { Property } from './../../models/property.model';
import { Command } from './../../models/command.model';
import { DeviceService } from './../../services/device.service';
import { Component, OnInit } from '@angular/core';
import { Device } from 'src/app/models/device.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-device',
  templateUrl: './detail-device.page.html',
  styleUrls: ['./detail-device.page.scss'],
})
export class DetailDevicePage implements OnInit {

  public deviceName: '';
  public deviceDescrip: '';
  public deviceData: Device;
  public deviceTemplate: any;
  public allCommands: Command;
  public allProperties: Property;
  segmentModel = 'details';
  private idPassedByURL: number = null;
  constructor(
    private deviceService: DeviceService,
    private route: ActivatedRoute

  ) { }


  ngOnInit() {
    this.idPassedByURL = this.route.snapshot.params.Id;
    this.deviceService.getDeviceById(this.idPassedByURL)
    .subscribe((res: any ) => {

    if(res != null){
      this.callCommand();
      this.callProperty();
       this.deviceName = res.Name;
       this.deviceDescrip = res.Description;
       this.deviceData = res;
       this.deviceTemplate = res.DeviceTemplate;

    }
    }, (err) => {
      console.log(err);
    });
  }

  callCommand(){
    this.deviceService.getCommandByIdDevice(this.idPassedByURL)
    .subscribe((res: any ) => {

    if(res != null){
      this.allCommands = res;

    }
    }, (err) => {
      console.log(err);
    });
  }

  callProperty(){
    this.deviceService.getPropertiesByIdDevice(this.idPassedByURL)
    .subscribe((res: any ) => {

    if(res != null){
      this.allProperties = res;
    }
    }, (err) => {
      console.log(err);
    });
  }

}
