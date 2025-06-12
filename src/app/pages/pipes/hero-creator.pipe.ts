import { Pipe, PipeTransform } from '@angular/core';
import { Creator } from '../../interfaces/hero.interface';

@Pipe({
  name: 'heroCreator',
})

// export class heroCreatorPipe implements PipeTransform {
//   transform(value: number): 'DC'| 'Marvel' {
//     return value ? 'DC' : 'Marvel'
//   }
// }
export class heroCreatorPipe implements PipeTransform {
  transform(value: Creator): string {
    // return Creator[value]
    return value === Creator.DC ? 'DC' : 'Marvel';
  }
}
