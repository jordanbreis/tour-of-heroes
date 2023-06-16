import { Injectable } from '@angular/core';
import { Hero } from './heroes.types';
import { HEROES } from './heroes.mock';
import { Observable, of } from 'rxjs';
import { MessagesService } from '../messages/messages.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService:MessagesService){}

  getHeroes(): Observable<Hero[]> {
    const hero = of(HEROES)
    this.messageService.addMessage('Bucasndo Herois')
    return hero
  }

  getHero(id: number): Observable<Hero> {
    const hero = HEROES.find((h) => h.id === id) ?? HEROES[1]
    this.messageService.addMessage('Bucasndo Herois')
    return of(hero)
  }

}
