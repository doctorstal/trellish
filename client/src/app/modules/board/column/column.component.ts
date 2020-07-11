import {Component, Input, OnInit} from '@angular/core';
import {Card} from '../../../models/card.model';
import {CardsService} from "../../../services/cards.service";
import {Router} from "@angular/router";

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

  cards: Card[] = [];

  constructor(
    private cardsService: CardsService,
    private router: Router
  ) {
    // cardsService.cards.subscribe(value => this.cards = value);
  }

  ngOnInit(): void {
  }

  addCard(): void {
    const card = new Card();
    card.column = this.name;
    this.cards.push(card);
    // this.cardsService.addCard(card);
  }

}
