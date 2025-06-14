import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'canFly'
})

export class canFlyPipe implements PipeTransform {
  transform(value: boolean): 'Puede volar' | 'No puede volar' {

    return value ? 'Puede volar' : 'No puede volar';
  }
}
