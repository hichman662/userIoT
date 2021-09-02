/* eslint-disable max-len */
import { ActivatedRoute, Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-heart-rate',
  templateUrl: './heart-rate.page.html',
  styleUrls: ['./heart-rate.page.scss'],
})
export class HeartRatePage implements OnInit {

  @ViewChild('barCanvas') private barCanvas: ElementRef;
  public heartRate: any;
  barChart: any;

  constructor(  public router: Router,
    private route: ActivatedRoute,
    private storage: Storage
    ) { Chart.register(...registerables);}

  ngOnInit() {

  }

  ionViewWillEnter() {
    this.barChartMethod();
    this.heartRate = this.route.snapshot.params.heartRate;
  }
   //chart test
   barChartMethod() {
    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: ['29/08/2021', '30/08/2021', '31/08/2021', '01/09/2021', '02/09/2021', '02/09/2021', '03/09/2021', '04/09/2021', '04/09/2021'],
        datasets: [{
          label: '# Beats',
          data: [80, 85, 95, 111, 96, 97, 89,94,110],
          backgroundColor: [
            'rgba(245, 225, 52, 1)',

          ],
          borderColor: [
            'rgba(245, 225, 52, 1)',
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
