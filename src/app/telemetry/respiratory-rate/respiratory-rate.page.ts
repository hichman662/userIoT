/* eslint-disable max-len */
import { ActivatedRoute, Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-respiratory-rate',
  templateUrl: './respiratory-rate.page.html',
  styleUrls: ['./respiratory-rate.page.scss'],
})
export class RespiratoryRatePage implements OnInit {

  @ViewChild('barCanvas') private barCanvas: ElementRef;
  public respiratoryRate: any;
  barChart: any;

  constructor(  public router: Router,
    private route: ActivatedRoute,
    private storage: Storage
    ) { Chart.register(...registerables);}

  ngOnInit() {

  }

  ionViewWillEnter() {
    this.barChartMethod();
    this.respiratoryRate = this.route.snapshot.params.respiratoryRate;
  }
   //chart test
   barChartMethod() {
    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: ['29/08/2021', '30/08/2021', '31/08/2021', '01/09/2021', '02/09/2021', '02/09/2021', '03/09/2021', '04/09/2021', '04/09/2021'],
        datasets: [{
          label: '# %',
          data: [95, 98, 95, 99, 96, 97, 89,94,15],
          backgroundColor: [
            'rgba(86, 196, 69, 1)',

          ],
          borderColor: [
            'rgba(86, 196, 69, 1)',
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
