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
  label: any [] =['29/08/2021', '30/08/2021', '31/08/2021', '01/09/2021', '02/09/2021', '02/09/2021', '02/09/2021', '02/09/2021'];
  data: any[]=[15, 24, 18, 22, 17, 16, 12,18];
  date= new Date();
  constructor(  public router: Router,
    private route: ActivatedRoute,
    private storage: Storage
    ) { Chart.register(...registerables);}

  ngOnInit() {

  }
  doRefresh(event) {
       console.log('Begin async operation');

    setTimeout(() => {
      this.respiratoryRate= this.randomNumber(15,30);
      this.data.push(this.respiratoryRate);
      this.label.push(this.date.getFullYear()+'/'+this.date.getUTCMonth()+'/'+this.date.getDate());
      this.barChart.update();
      console.log('Async operation has ended');
      event.target.complete();
    }, 4000);
  }
  ionViewWillEnter() {
    this.respiratoryRate = this.route.snapshot.params.respiratoryRate;
    this.data.push(this.respiratoryRate);
    this.label.push(this.date.getFullYear()+'/'+this.date.getUTCMonth()+'/'+this.date.getDate());
    this.barChartMethod();
    console.log(this.date);
  }

  randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min )) + min;
  }

   //chart test
   barChartMethod() {
    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: this.label,
        datasets: [{
          label: 'Per minute',
          data: this.data,
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
