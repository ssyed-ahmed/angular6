import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from 'src/app/hero.service';
import { Location } from '@angular/common';
import { ParamMap } from '@angular/router/src/shared';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  hero: Hero;
  title: string = 'Hero Details';

  constructor(
    private route: ActivatedRoute, 
    private heroService: HeroService, 
    private location: Location) { }

  ngOnInit() {
    this.getHero();
  }

  getHero(): void {
    // const id = +this.route.snapshot.paramMap.get('id');
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
    })    
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }  

}
