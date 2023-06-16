import { Component } from '@angular/core';
import { Hero } from '../heroes/heroes.types';
import { HeroService } from '../heroes/hero.service';
import { MessagesService } from '../messages/messages.service';

@Component({
  selector: 'tour-of-heroes-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  constructor(private heroService: HeroService, private message: MessagesService) { }

  ngOnInit(){
    this.getHeroes()
  }

  heroes: Hero[] = []
  selectedHero?: Hero

  getHeroes() {
    this.heroService.getHeroes().subscribe(
      (value) => { this.heroes = value.slice(0,5) }
    )
    this.message.addMessage('Dashboard de Herois Carregando')
  }

  onSelected(hero: Hero){
    this.selectedHero =  hero
    this.message.addMessage('Heroi selecionado: ' + hero.name)
  }
}
