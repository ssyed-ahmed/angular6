import { Component, OnInit } from '@angular/core';
import { ChartData } from '../chartdata';
import { Chart } from 'chart.js';
import { ChartsService } from '../charts.service';


@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  title: string = 'Statistics';
  data: ChartData[];
  month = [];
  price = [];
  chart = [];

  url: string = './assets/data/charts-data.json';

  constructor(private chartsService: ChartsService) { }

  ngOnInit() {
    this.loadChart();
  }

  loadChart(): void {
    this.chartsService.getChartData()
      .subscribe((data: any) => {
        data.results.forEach(obj => {
          this.month.push(obj.month);
          this.price.push(obj.price);
          this.chart = new Chart('canvas', {
            type: 'line',
            data: {
              labels: this.month,
              datasets: [
                {
                  data: this.price,
                  borderColor: '#3cba9f',
                  fill: false
                }
              ]              
            },
            options: {
              legend: {
                display: false
              },
              scales: {
                xAxes: [
                  {
                    display: true
                  }
                ],
                yAxes: [
                  {
                    display: true
                  }
                ]
              }
            }
          });
        });
      });
  }
}

