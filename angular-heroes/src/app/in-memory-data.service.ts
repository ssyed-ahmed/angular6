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
      new Hero(11, 'Antman', 'antman', 'This is ant man.', 'Male'),
      new Hero(12, 'Batman', 'batman', 'This is bat man.', 'Male'),
      new Hero(13, 'Hulk', 'hulk', 'This is hulk.', 'Male'),
      new Hero(14, 'Ironman', 'ironman', 'This is iron man.', 'Male'),
      new Hero(15, 'Spiderman', 'spiderman', 'This is spider man.', 'Male'),
      new Hero(16, 'Superman', 'superman', 'This is super man.', 'Male'),
      new Hero(17, 'Wonderwoman', 'wonderwoman', 'This is wonder woman.', 'Female'),
      new Hero(18, 'Green lantern', 'greenlantern', 'This is green lantern.', 'Male'),
      new Hero(19, 'Mocking bird', 'mockingbird', 'This is mocking bird.', 'Female'),
      new Hero(20, 'Black widow', 'blackwidow', 'This is black widow.', 'Female'),
      new Hero(21, 'New hero', 'default', 'This is default hero.', 'Male')
    ];

    return {heroes};
  }
}
