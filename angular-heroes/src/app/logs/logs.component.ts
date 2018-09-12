import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { HEROES } from '../mock-heroes';
import { Hero } from '../hero';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {

  heroes: Hero[];

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    // this.loadMessages();
    this.loadHeroes();
  }

  loadHeroes(): void {
    this.heroes = HEROES;
  }

  loadMessages(): string[] {
    return this.messageService.messages;
  }

}
