import { Component, signal } from '@angular/core';
import { toggleCasePipe } from '../pipes/toggle-case.pipe';
import { heroes } from '../../data/heroes.data';
import { canFlyPipe } from '../pipes/can-fly.pipe';
import { heroColorPipe } from '../pipes/hero-color.pipe';
import { ColorMap, Hero } from '../../interfaces/hero.interface';
import { heroTextColorPipe } from '../pipes/hero-color-text.pipe';
import { TitleCasePipe } from '@angular/common';
import { heroCreatorPipe } from '../pipes/hero-creator.pipe';
import { heroSortByPipe } from '../pipes/hero-sort-by.pipe';

@Component({
  selector: 'app-custom-page',
  imports: [
    toggleCasePipe,
    canFlyPipe,
    heroColorPipe,
    heroTextColorPipe,
    TitleCasePipe,
    heroCreatorPipe,
    TitleCasePipe,
    heroSortByPipe
  ],
  templateUrl: './custom-page.component.html',
})
export default class CustomPageComponent {
  name = signal('Hermes Castro');
  upperCase = signal(true);

  heroes = signal(heroes);

  sortBy = signal<keyof Hero | null>(null);

  //funcion para uppercase de true a false, false a true
}
