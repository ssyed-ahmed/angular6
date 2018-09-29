import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from 'src/app/hero.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CommunicationService } from '../communication.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];
  title: string = 'Heroes';
  public displayDeleteDialog = 'none';
  heroToDelete;
  selectedId;

  heroModel = new Hero(0, '', 'default', '', 'Male');

  subscription: Subscription;

  constructor(
    private heroService: HeroService,
    private router: Router,
    private communicationService: CommunicationService,
    private route: ActivatedRoute
  ) { 
    // Subscribe to the app component messages
    this.subscription = this.communicationService.getMessage().subscribe(message => {
      if (message.text === 'restore heroes') {
        this.restoreHeroes();
      }
    })
  }

  ngOnInit() {
    this.getHeroes();
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.selectedId = id;
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => {
        this.heroes = heroes;
      });
  }

  selectHero(id: string, fromState: string): void {
    this.router.navigate([id, fromState], {relativeTo: this.route});
  }

  addHero(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.heroService.addHero({name} as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      })
  }

  editHero(hero: Hero): void {
    console.log('Edit hero clicked');
    console.log(hero);
  }

  deleteHero(hero: Hero): void {
    this.heroToDelete = hero;
  }

  deleteHeroConfirmed(): void {
    if (this.heroToDelete) {
      this.heroes = this.heroes.filter(h => h !== this.heroToDelete);
      this.heroService.deleteHero(this.heroToDelete).subscribe();
    }
  }

  restoreHeroes(): void {
    this.heroes = this.heroService.restoreHeroes();
  }

  isSelected(hero): boolean {
    return hero.id === this.selectedId;
  }
}
