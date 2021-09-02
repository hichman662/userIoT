/* eslint-disable max-len */
import { ActivatedRoute, Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-blood-pressure',
  templateUrl: './blood-pressure.page.html',
  styleUrls: ['./blood-pressure.page.scss'],
})
export class BloodPressurePage implements OnInit {

  @ViewChild('lineCanvas') private lineCanvas: ElementRef;
  public systolic: any;
  public diastolic: any;
  lineChart: any;

  constructor(  public router: Router,
    private route: ActivatedRoute,
    private storage: Storage) { Chart.register(...registerables);}

  ngOnInit() {

  }

  ionViewWillEnter() {
    this.lineChartMethod();
    this.systolic = this.route.snapshot.params.systolic;
    this.diastolic = this.route.snapshot.params.diastolic;
  }
   //chart test
   lineChartMethod() {
    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
      type: 'line',
      data: {
        labels: ['29/08/2021', '30/08/2021', '31/08/2021', '01/09/2021', '02/09/2021', '02/09/2021', '03/09/2021', '04/09/2021', '04/09/2021'],
        datasets: [
          {
            label: 'Systolic',
            fill: false,
            backgroundColor: 'rgb(255,0,0)',
            borderColor: 'rgb(255,0,0)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(255,0,0,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(255,0,0,1)',
            pointHoverBorderColor: 'rgba(255,0,0,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [115, 118, 121, 119, 125, 111, 118, 117, 35],
            spanGaps: false,
          },
          {
            label: 'Diastolic',
            fill: false,
            backgroundColor: 'rgb(0,128,128)',
            borderColor: 'rgb(0,128,128)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(0,128,128,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(0,128,128,1)',
            pointHoverBorderColor: 'rgba(0,128,128,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 78, 68, 75, 78, 69, 72, 70, 63],
            spanGaps: false,
          }
        ]
      }
    });
  }
}
