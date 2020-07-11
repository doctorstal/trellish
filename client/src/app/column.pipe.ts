import { Pipe, PipeTransform } from '@angular/core';
import {Card} from './models/card.model';

@Pipe({
  name: 'column'
})
export class ColumnPipe implements PipeTransform {

  transform(cards: Card[], column: string): unknown {
    console.log('wow');
    return cards.filter(c => c.column === column);
  }

}
