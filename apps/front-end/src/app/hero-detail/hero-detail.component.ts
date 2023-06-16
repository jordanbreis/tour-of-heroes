import { Component, Input } from '@angular/core';
import { Hero } from '../heroes/heroes.types';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../heroes/hero.service';

@Component({
  selector: 'tour-of-heroes-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss'],
})
export class HeroDetailComponent {
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private heroService: HeroService
  ) { }

  ngOnInit() {
    this.getHero()
  }

  getHero() {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.heroService.getHero(id).subscribe(
      (value) => { this.hero = value }
    )
  }

  goBack(){
    this.location.back()
  }


  @Input() hero?: Hero
}
