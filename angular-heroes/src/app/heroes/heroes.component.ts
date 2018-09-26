import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from 'src/app/hero.service';
import { Router } from '@angular/router';

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

  constructor(
    private heroService: HeroService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => {
        this.heroes = heroes;
      });
  }

  selectHero(id: string): void {
    this.router.navigate(['/heroes', id]);
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
}
