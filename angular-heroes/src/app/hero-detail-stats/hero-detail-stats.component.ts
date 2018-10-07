import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { Router, ActivatedRoute } from '@angular/router';
import { HeroService } from 'src/app/hero.service';
import { ParamMap } from '@angular/router/src/shared';
import { CommunicationService } from '../communication.service';

@Component({
  selector: 'app-hero-detail-stats',
  templateUrl: './hero-detail-stats.component.html',
  styleUrls: ['./hero-detail-stats.component.css']
})
export class HeroDetailStatsComponent implements OnInit {

  hero: Hero;
  
  constructor(private route: ActivatedRoute,
    private heroService: HeroService,
    private communicationService: CommunicationService) {
    this.route.parent.params.subscribe(params => {
      let id = parseInt(params.id);
      this.heroService.getHero(id)
      .subscribe(hero => { 
        this.hero = hero
      });
    })
  }

  ngOnInit() {
  }

  goBack(): void {
    this.communicationService.sendMessage('go back');
  }

}
