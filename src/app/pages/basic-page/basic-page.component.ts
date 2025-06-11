import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, effect, inject, LOCALE_ID, signal } from '@angular/core';
import { tick } from '@angular/core/testing';
import { AvailableLocale, LocalService } from '../../services/local.service';

@Component({
  selector: 'app-basic-page',
  imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe, DatePipe],
  templateUrl: './basic-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class BasicPageComponent {

  localService = inject(LocalService);
  currentLocale = signal(inject(LOCALE_ID));


  nameLower = signal('hermes castro');
  nameUpper = signal('HERMES CASTRO');
  fullName = signal('hErMeS cAstRo');


  customDate = signal( new Date());

  tickingDateEffect = effect((onCleanup) => {
    const interval = setInterval(() => {
      this.customDate.set(new Date());
      console.log('tick')
    }
    , 1000);
    onCleanup(() => {
      clearInterval(interval);
      console.log('cleanup');
    });
})


/// método para cambiar el locale (Idioma)
changeLocale(locale: AvailableLocale) {
  console.log(locale);
  this.localService.changeLocale(locale);

}
 }
