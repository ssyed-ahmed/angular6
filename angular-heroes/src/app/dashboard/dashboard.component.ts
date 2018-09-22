import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { HeroesComponent } from 'src/app/heroes/heroes.component';
import { MessageService } from '../message.service';
import { Message, Severity } from '../message';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];
  title: string = 'Dashboard';

  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => {
        this.heroes = heroes.slice(0, 8);
      })
    var message = new Message('Fetched heroes in dashboard.', Severity.INFO, new Date(), null);
    this.messageService.add(message);
  }
}
