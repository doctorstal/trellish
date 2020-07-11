import {Component, Input, OnInit} from '@angular/core';
import {Card} from '../../../models/card.model';
import {CardsService} from "../../../services/cards.service";

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

  cards: Card[];

  constructor(
    private cardsService: CardsService
  ) {
    cardsService.cards.subscribe(value => this.cards = value);
  }

  ngOnInit(): void {
  }

  addCard(): void {
    const card = new Card();
    card.column = this.name;
    this.cardsService.addCard(card);
  }

}
