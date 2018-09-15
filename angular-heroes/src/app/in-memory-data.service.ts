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
      new Hero(11, 'Ant man', 'antman', 'This is ant man.'),
      new Hero(12, 'Bat man', 'batman', 'This is bat man.'),
      new Hero(13, 'Hulk', 'hulk', 'This is hulk.'),
      new Hero(14, 'Iron man', 'ironman', 'This is iron man.'),
      new Hero(15, 'Spider man', 'spiderman', 'This is spider man.'),
      new Hero(16, 'Super man', 'superman', 'This is super man.'),
      new Hero(17, 'Wonder woman', 'wonderwoman', 'This is wonder woman.'),
      new Hero(18, 'Green lantern', 'greenlantern', 'This is green lantern.')
    ];

    return {heroes};
  }
}
