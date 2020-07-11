import {Component, Input, OnInit} from '@angular/core';
import {Card} from '../../../models/card.model';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css']
})
export class ColumnComponent implements OnInit {
  @Input()
  title: string;
  @Input()
  name: string;

  @Input()
  cards: Card[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  addCard(): void {
    this.cards.push(new Card());
  }

}
