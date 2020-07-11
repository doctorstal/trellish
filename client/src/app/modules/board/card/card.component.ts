import {Component, Input, OnInit} from '@angular/core';
import {Card} from '../../../models/card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input()
  card: Card;
  edit: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  doEdit(title: string, description: string): void {
    this.card.title = title;
    this.card.description = description;
    this.edit = false;
  }
}
