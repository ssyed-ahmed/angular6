import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { HeroesComponent } from 'src/app/heroes/heroes.component';
import { MessageService } from '../message.service';
import { Message, Severity } from '../message';
import { Subscription } from 'rxjs';
import { CommunicationService } from '../communication.service';
import { HEROES } from '../mock-heroes';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];
  title: string = 'Dashboard';
  selectedId;

  subscription: Subscription;

  constructor(
    private heroService: HeroService,
    private messageService: MessageService,
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

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => {
        // this.heroes = heroes.slice(0, 9);
        this.heroes = heroes;
      })
    var message = new Message('Fetched heroes in dashboard.', Severity.INFO, new Date(), null);
    this.messageService.add(message);
  }

  restoreHeroes(): void {
    this.heroes = HEROES;
  }

  isSelected(hero): boolean {
    return hero.id === this.selectedId;
  }
}
