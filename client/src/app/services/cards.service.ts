import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Card} from '../models/card.model';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  private cardsSubject: BehaviorSubject<Card[]>;
  public cards: Observable<Card[]>;

  constructor() {
    this.cardsSubject = new BehaviorSubject<Card[]>(JSON.parse(localStorage.getItem('cards')));
    this.cards = this.cardsSubject.asObservable();
  }

  addCard(card: Card): void {
    const cards = this.cardsSubject.value.concat();
    cards.push(card);
    localStorage.setItem('cards', JSON.stringify(cards));
    this.cardsSubject.next(cards);
  }
}
