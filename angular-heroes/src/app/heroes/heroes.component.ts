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
    this.router.navigate(['detail', id]);
  }

  addHero(): void {
    console.log('add hero clicked');
  }

  editHero(hero: Hero): void {
    console.log('Edit hero clicked');
    console.log(hero);
  }

  deleteHero(hero: Hero): void {
    this.displayDeleteDialog = 'block';
    // let val = confirm('Are you sure you want to delete this hero?');
    // if (val) {
    //   console.log('Delete hero clicked');
    //   console.log(hero);
    // }
  }
}
