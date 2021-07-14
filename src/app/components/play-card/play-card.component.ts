import {Component, EventEmitter, Input, Output} from '@angular/core';
import { ICard } from 'src/app/interfaces/card';

@Component({
  selector: 'app-play-card',
  templateUrl: './play-card.component.html',
  styleUrls: ['./play-card.component.scss']
})
export class PlayCardComponent {

  @Input()
  isSuccess = false;

  @Input()
  cardData: ICard | null = null;

  @Output()
  cardClick = new EventEmitter<PlayCardComponent>();
}
