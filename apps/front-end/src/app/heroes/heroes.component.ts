import { Component } from '@angular/core';
import { Hero } from './heroes.types';
import { HeroService } from './hero.service';
import { MessagesService } from '../messages/messages.service';

@Component({
  selector: 'tour-of-heroes-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent {

  constructor(private heroService: HeroService, private messageService:MessagesService ) {}

  ngOnInit(): void {
    this.getHeroes()
  }

  heroes: Hero[] = []
  selectedHero?: Hero

  onSelect(hero: Hero){
    this.selectedHero = hero
    this.messageService.addMessage('Heroi Selecionado: ' + hero.id)
  }

  getHeroes(): void{
    this.heroService.getHeroes().subscribe((value) => {
      this.heroes = value
    })
    this.messageService.addMessage('Lista De Herois Carregando')
  }

}
