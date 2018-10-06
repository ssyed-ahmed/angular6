import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { Router, ActivatedRoute } from '@angular/router';
import { HeroService } from 'src/app/hero.service';
import { ParamMap } from '@angular/router/src/shared';

@Component({
  selector: 'app-hero-detail-general',
  templateUrl: './hero-detail-general.component.html',
  styleUrls: ['./hero-detail-general.component.css']
})
export class HeroDetailGeneralComponent implements OnInit {

  hero: Hero;
  
  constructor(private route: ActivatedRoute,
    private heroService: HeroService) {
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

}
