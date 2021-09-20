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
    label: any [] =[ '02/09/2021', '02/09/2021', '03/09/2021', '04/09/2021', '04/09/2021'];
  data: any[]=[ 78, 90, 89,94,98];
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
   this.heartRate= this.randomNumber(80,98);
   this.data.push(this.heartRate);
   this.label.push(this.date.getFullYear()+'/'+this.date.getUTCMonth()+'/'+this.date.getDate());
   this.barChart.update();
   console.log('Async operation has ended');
   event.target.complete();
 }, 4000);
}

randomNumber(min, max) {
 return Math.floor(Math.random() * (max - min )) + min;
}

  ionViewWillEnter() {
    this.heartRate = this.route.snapshot.params.heartRate;
    this.data.push(this.heartRate);
    this.label.push(this.date.getFullYear()+'/'+this.date.getUTCMonth()+'/'+this.date.getDate());
    this.barChartMethod();

  }
   //chart test
   barChartMethod() {
    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: this.label,
        datasets: [{
          label: '#  Beats/Minute',
          data: this.data,
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
