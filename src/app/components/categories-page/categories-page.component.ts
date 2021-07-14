import {Component, OnDestroy, OnInit} from '@angular/core';
import {PagesDataService} from 'src/app/services/pages-data/pages-data.service';
import {PlayCardComponent} from "../play-card/play-card.component";
import {ActivatedRoute, Router} from "@angular/router";
import { Subscription } from 'rxjs';
import { ICard } from 'src/app/interfaces/card';
import { BackendService } from 'src/app/services/backend/backend.service';

@Component({
  selector: 'app-categories-page',
  templateUrl: './categories-page.component.html',
  styleUrls: ['./categories-page.component.scss']
})
export class CategoriesPageComponent implements OnInit, OnDestroy {

  isGame: boolean = false;

  answers: boolean[] = [];

  isFinished = false;

  subscribtions: Subscription[] = [];

  currentCards: ICard[]  = [];
  currentCategoryName: string | null = null;
  catId: number = 0;


  constructor(
    private readonly pagesDataService: PagesDataService,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
    private readonly backendService: BackendService
  ) {
  }


  ngOnInit(): void {
    this.subscribtions.push(this.pagesDataService.$isPlayMode.subscribe(() => this.clearGameData()));

    this.subscribtions.push(this.activatedRoute.paramMap.subscribe((params) => {

      this.clearGameData();

      this.catId = Number(params.get('id'));

    this.backendService.getCards(this.catId)
    .then((data) => {
      this.currentCards = data})
      .then(() => this.onGetCategoryName());
    }));
    this.initSelectedCategoryAudio();
  }

  ngOnDestroy(): void {
   this.subscribtions.forEach((subscription) => subscription.unsubscribe());
  }

  async onGetCategoryName() {
    const categories = await this.backendService.getCategories();
    const cat = categories.find((category) =>
        category.id === this.catId);
        if(cat) {
          this.currentCategoryName = cat.category;
        }
  }

  get errorsCounter() {
    return this.pagesDataService.errorsCounter;
  }


  get $isPlayMode() {
    return this.pagesDataService.$isPlayMode;
  }

  onStartGame() {

    if (!this.isGame) {
      this.isGame = true;
      this.initSelectedCategoryAudio();
    }
    setTimeout(() => this.playAudio(this.pagesDataService.audioArray[this.pagesDataService.counter]), 300);
  }


  initSelectedCategoryAudio() {

    let audioFiles: string[] = [];
    if (this.currentCards) {
      this.currentCards.forEach((card) => audioFiles.push(card.audioSrc));
    }

    this.pagesDataService.audioArray = this.getRandomValues(audioFiles);
    console.log('this.pagesDataService.audioArray ', this.pagesDataService.audioArray)
  }


  getRandomValues(array: string[]) {

    let r: number, temp: string;
    for (let i = array.length - 1; i > 0; i--) {
      r = Math.floor(Math.random() * array.length);
      temp = array[r];
      array[r] = array[i];
      array[i] = temp;
    }
    return array;
  }

  clearGameData() {

    this.pagesDataService.errorsCounter = 0;
    this.pagesDataService.counter = 0;
    this.pagesDataService.audioArray = [];
    this.answers = [];
    this.isFinished = false;
    this.isGame = false;
  }


  async onCardClick(cardComponent: PlayCardComponent) {
    const source = this.pagesDataService.audioArray[this.pagesDataService.counter];
    if (cardComponent.cardData) {
      if (cardComponent.cardData.audioSrc === source) {
        cardComponent.isSuccess = true;
        this.answers.push(true);
        await this.playAudio('assets/audio/right_answer.mp3');
        //this.onSuccess(cardComponent.cardData.audioSrc);
        this.onSuccess(cardComponent.cardData);
        await this.onNext();
      }
      else {
        cardComponent.isSuccess = false;
        this.answers.push(false);
        await this.playAudio('assets/audio/error.mp3');
        this.onError(source);
        await this.onNext(false);
      }
      this.countErrors();
    }
  }


  async onNext(success = true) {

    if (success) {
      this.pagesDataService.counter += 1;
    } else {
      this.pagesDataService.errorsCounter += 1;
    }

    if (!(this.pagesDataService.counter < this.currentCards.length)) {
      this.isGame = false;
      this.pagesDataService.audioArray = [];
      this.isFinished = true;
    } else if (success) {
      await this.playAudio(this.pagesDataService.audioArray[this.pagesDataService.counter])
    }
  }


  playAudio(audioFile: string) {
    return new Promise<void>((resolve, reject) => {
      const audio = new Audio(`${audioFile}`);
      audio.addEventListener('ended', () => resolve());
      audio.addEventListener('error', () => reject());
      audio.play();
    })
  }

  onSuccess(card: ICard) {
    console.log("card before", card)
    card.correct += 1;
    this.backendService.updateCard(this.catId, card, card.id);
  }

  onError(audioSrc: string) {
    const cardIndex = this.currentCards.findIndex((card) => card.audioSrc === audioSrc);
    let cardData: ICard;
    if(cardIndex > -1) {
      cardData = this.currentCards[cardIndex];
      cardData.wrong += 1;
      this.backendService.updateCard(this.catId, cardData, cardData.id);
    }
  }
  async countErrors() {
    const cards = await this.backendService.getCards(this.catId);
    cards.forEach((card) => {
      if (card.correct !== 0 || card.wrong !== 0) {
        card.errors = Math.ceil(card.wrong * 100 / (card.correct + card.wrong));
        this.backendService.updateCard(this.catId, card, card.id);
      } else card.errors = 0;
    });
  }

  onResultsClose() {
    this.clearGameData();
    return this.router.navigate(['/main']);
  }

}
