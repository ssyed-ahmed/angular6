import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { Router, ActivatedRoute } from '@angular/router';
import { HeroService } from 'src/app/hero.service';
import { Location } from '@angular/common';
import { ParamMap } from '@angular/router/src/shared';
import { Subscription } from 'rxjs';
import { CommunicationService } from '../communication.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  hero: Hero;
  title: string = 'Hero Details';
  heroId;
  fromState;
  subscription: Subscription;

  constructor(
    private router: Router,
    private route: ActivatedRoute, 
    private heroService: HeroService, 
    private location: Location,
    private communicationService: CommunicationService) {
      // Subscribe to the hero detail general component message
    this.subscription = this.communicationService.getMessage().subscribe(message => {
      if (message.content === 'go back') {
        this.goBack();
      }
    })
  }

  ngOnInit() {
    this.getHero();    
  }

  getHero(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      let fromState = params.get('fromState');
      this.heroId = id;
      this.fromState = fromState;
      this.heroService.getHero(id)
      .subscribe(hero => { 
        this.hero = hero
      });
    })    
  }

  goBack(): void {
    // this.location.back();
    let selectedId = this.heroId ? this.heroId : null;
    let fromState = this.fromState;
    this.router.navigate([fromState, {id: selectedId}]);
  }

  save(): void {
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }  

  showOverview(): void {
    this.router.navigate(['overview'], {relativeTo: this.route});
  }

  showStatistics(): void {
    this.router.navigate(['statistics'], {relativeTo: this.route});
  }
}
