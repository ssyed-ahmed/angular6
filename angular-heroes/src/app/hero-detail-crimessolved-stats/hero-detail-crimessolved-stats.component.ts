import { Component, AfterViewInit } from '@angular/core';
import { Hero } from '../hero';
import { Router, ActivatedRoute } from '@angular/router';
import { HeroService } from 'src/app/hero.service';
import { ParamMap } from '@angular/router/src/shared';
import { CommunicationService } from '../communication.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-hero-detail-crimessolved-stats',
  templateUrl: './hero-detail-crimessolved-stats.component.html',
  styleUrls: ['./hero-detail-crimessolved-stats.component.css']
})
export class HeroDetailCrimessolvedStatsComponent implements AfterViewInit {

  hero: Hero;
  months: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  chartData = [];
  lineChart = [];
  pieChart = [];
  pieLabels = ['Red', 'Blue', 'Green', 'Yellow', 'Orange', 'Purple', 'Black', 'Cyan', 'Pink', 'gold', 'crimson'];
  canvas: any;
  ctx: any;
  
  constructor(private route: ActivatedRoute,
    private heroService: HeroService,
    private communicationService: CommunicationService) {
    this.route.parent.params.subscribe(params => {
      let id = parseInt(params.id);
      this.heroService.getHero(id)
      .subscribe(hero => { 
        this.hero = hero;
        this.drawLineChart();
        this.drawPieChart();
      });
    })
  }

  ngAfterViewInit() {
    // this.drawLineChart();
    // console.log(this.hero);
  }

  goBack(): void {
    this.communicationService.sendMessage('go back');
  }

  drawLineChart(): void {
    this.chartData = this.hero.stats.crimesSolvedStats.lineData;
    console.log(this.chartData);
    this.lineChart = new Chart('lineCanvas', {
      type: 'line',
      data: {
        labels: this.months,
        datasets: [
          {
            data: this.chartData,
            borderColor: '#3cba9f',
            fill: false
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: 'Crimes solved'
        },
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
  }

  drawPieChart(): void {
    this.pieChart = new Chart('pieCanvas', {
      type: 'doughnut',
      data: {
        datasets: [
          {
            data: this.chartData
          }
        ],
        labels: this.pieLabels
      },
      options: {
        title: {
          display: true,
          text: 'Crimes solved'
        },
        legend: {
          display: false
        }
      }
    })
  }

}
