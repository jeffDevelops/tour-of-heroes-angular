import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes'

@Injectable()

export class HeroService {
	getHeroes(): Promise<Hero[]> { //returns an array of heroes
		return Promise.resolve(HEROES); //the array of heros in mock-heroes.ts
	}
}