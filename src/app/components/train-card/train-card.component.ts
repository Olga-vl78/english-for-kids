import { Component, Input, OnInit } from '@angular/core';
import { ICard } from 'src/app/interfaces/card';
import { BackendService } from 'src/app/services/backend/backend.service';

@Component({
  selector: 'app-train-card',
  templateUrl: './train-card.component.html',
  styleUrls: ['./train-card.component.scss']
})
export class TrainCardComponent implements OnInit {

  isFlipped: boolean = false;

  visibility: boolean = true;


  @Input()
  cardData: ICard | null = null;
  constructor(
    private readonly backendService: BackendService,

  ) { }

  ngOnInit(): void {
  }


  flipCardToBack() {
    this.isFlipped = true;
    this.visibility = !this.visibility;
  }

  flipCardToFront() {
    this.isFlipped = false;
    this.visibility = this.visibility;
  }

  onButtonClick(event: any) {
    event?.stopPropagation();
    this.flipCardToBack();
  }

  onTrainCardClick() {
    this.playAudio();
    this.updateClicksNum();
  }

  playAudio() {

    let audio = new Audio(`${this.cardData?.audioSrc}`);
    audio.play();
    console.log('audio', audio)
  }


  updateClicksNum = () => {
    if (this.cardData) {
      this.cardData.clicks += 1;
      this.backendService.updateCard(
        this.cardData.categoryId,
        this.cardData,
        this.cardData.id
      )
    };
  }

}
