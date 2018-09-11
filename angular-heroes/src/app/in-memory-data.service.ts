import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const heroes = [
      new Hero(11, 'Antman'),
      new Hero(12, 'Batman'),
      new Hero(13, 'Hulk'),
      new Hero(14, 'Ironman'),
      new Hero(15, 'Spiderman'),
      new Hero(16, 'Superman'),
      new Hero(17, 'Wonderwoman'),
      new Hero(18, 'Greenlantern')
    ];

    return {heroes};
  }
}
