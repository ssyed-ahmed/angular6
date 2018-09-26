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
      new Hero(11, 'Antman', 'antman', 'This is ant man.'),
      new Hero(12, 'Batman', 'batman', 'This is bat man.'),
      new Hero(13, 'Hulk', 'hulk', 'This is hulk.'),
      new Hero(14, 'Ironman', 'ironman', 'This is iron man.'),
      new Hero(15, 'Spiderman', 'spiderman', 'This is spider man.'),
      new Hero(16, 'Superman', 'superman', 'This is super man.'),
      new Hero(17, 'Wonderwoman', 'wonderwoman', 'This is wonder woman.'),
      new Hero(18, 'Green lantern', 'greenlantern', 'This is green lantern.')
    ];

    return {heroes};
  }
}
