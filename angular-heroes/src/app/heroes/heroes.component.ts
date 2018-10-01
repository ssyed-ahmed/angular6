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
  idHasDuplicateError = false;
  idHasRangeError = false;

  heroModel = new Hero(1, '', 'default', '', 'Male');

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

  addHero(): void {
    console.log(this.heroModel);
    let newHero = new Hero(this.heroModel.id, this.heroModel.name, 'default', this.heroModel.description, this.heroModel.sex);
    this.heroService.addHero(newHero)
      .subscribe(hero => {
        this.heroes.push(hero);
        // Reset the heroModel
        this.heroModel = new Hero(1, '', 'default', '', 'Male');
      })
    
    // name = name.trim();
    // if (!name) {
    //   return;
    // }
    
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

  validateIdDuplicate(value: number): void {
    let isPresent = false;
    for (let i = 0; i < this.heroes.length; i++) {
      let hero = this.heroes[i];
      if (hero.id === value) {
        isPresent = true;
        break;
      }
    }

    if (isPresent) {
      this.idHasDuplicateError = true;
    } else {
      this.idHasDuplicateError = false;
    }
  }

  validateIdRange(value: number): void {
    if (value < 1 || value > 100) {
      this.idHasRangeError = true;
    } else {
      this.idHasRangeError = false;
    }
  }
}
