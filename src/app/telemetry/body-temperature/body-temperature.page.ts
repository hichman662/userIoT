/* eslint-disable max-len */
import { ActivatedRoute, Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-body-temperature',
  templateUrl: './body-temperature.page.html',
  styleUrls: ['./body-temperature.page.scss'],
})
export class BodyTemperaturePage implements OnInit {

  @ViewChild('barCanvas') private barCanvas: ElementRef;
  public bodyTemperature: any;
  barChart: any;

  constructor(  public router: Router,
    private route: ActivatedRoute,
    private storage: Storage
    ) { Chart.register(...registerables);}

  ngOnInit() {

  }

  ionViewWillEnter() {
    this.barChartMethod();
    this.bodyTemperature = this.route.snapshot.params.bodyTemperature;
  }
   //chart test
   barChartMethod() {
    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: ['29/08/2021', '30/08/2021', '31/08/2021', '01/09/2021', '02/09/2021', '02/09/2021', '03/09/2021', '04/09/2021', '04/09/2021'],
        datasets: [{
          label: '# Temperature',
          data: [37, 35, 36.5, 48, 37, 76, 57,56,98],
          backgroundColor: [
            'rgba(81, 119, 223, 1)',

          ],
          borderColor: [
            'rgba(81, 119, 223, 1)',
          ],
          borderWidth: 1
        }]
      },
     /*  options: {
        scaleShowValues: true,
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }],
          xAxes: [{
            ticks: {
              autoSkip: false
            }
          }]
        }
      } */
    });
  }
}
