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
      console.log(res);
    if(res != null){
       this.deviceName = res.Name;
       this.deviceDescrip = res.Description;
       this.deviceData = res;
       this.deviceTemplate = res.DeviceTemplate;

    }
    }, (err) => {
      console.log(err);
    });
  }

}
