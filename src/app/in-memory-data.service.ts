import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      {id: 11, name: 'Superman', edad: 30, poder: 'Volar', identidad: 'Clarck', universo: 'DC'},
      {id: 12, name: "Batman", edad: 30, poder: 'Habil', identidad: 'Bruce Wayne', universo: 'DC'}, 
      {id: 13, name: "Hulk", edad: 40, poder: 'Fuerza', identidad: 'Banner', universo: 'Marvel'},
      {id: 14, name: "Ironman", edad: 38, poder: 'Armadura', identidad: 'Tonny Stark', universo: 'Marvel'},
      {id: 15, name: "Thor", edad: 39, poder: 'Volar', identidad: 'Dios', universo: 'Marvel'},
      {id: 16, name: "Spider-man", edad: 20, poder: 'Telaraña', identidad: 'Peter Parker', universo: 'Marvel'},
      {id: 17, name: "BlackWidow", edad: 35, poder: 'Espia', identidad: 'Natasha', universo: 'Marvel'},
      {id: 18, name: "Flash", edad: 28, poder: 'Rapidez', identidad: 'Gordon', universo: 'DC'},
      {id: 19, name: "BrujaEscarlata", edad: 30, poder: 'Mental', identidad: 'Wanda', universo: 'Marvel'},
      {id: 20, name: "WonderWoman", edad: 32, poder: 'Increible', identidad: 'Diana Prince', universo: 'DC'}
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
