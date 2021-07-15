import { Icu } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, Input, OnInit } from '@angular/core';
import { ICard } from 'src/app/interfaces/card';
import { BackendService } from 'src/app/services/backend/backend.service';

const CARDS_PER_PAGE = 8;

@Component({
  selector: 'app-train-words',
  templateUrl: './train-words.component.html',
  styleUrls: ['./train-words.component.scss']
})
export class TrainWordsComponent implements OnInit {

  pageText: string = '';
  difficultCardsArray: ICard[] = [];

  @Input()
  cardData: ICard | null = null;

  constructor(
    private readonly backendService: BackendService

  ) { }

  ngOnInit(): void {

    this.getDifficultCardsArray()
     .then(() => this.updatePageText());

  }

  async getDifficultCardsArray() {
    const errorsArray: ICard[] = [];
    const categories = await this.backendService.getCategories();
    categories.forEach((category) => {
      this.getCategoryCards(category.id).then((cards) => cards.forEach((card) => {
        if (card.errors > 0) {
          errorsArray.push(card);
        }
      }));
    });
    this.difficultCardsArray = errorsArray;
  }

  async getCategoryCards(catId: number) {
    const cards = await this.backendService.getCards(catId);
    return cards;
  }

  get sortedArray() {
    if (this.difficultCardsArray) {
      let sortedArray = this.difficultCardsArray.sort((a, b) => b.errors - a.errors);
      let resultArray: ICard[];
      resultArray = sortedArray.slice(0, CARDS_PER_PAGE);
      return resultArray;
    } else return [];
  }

  updatePageText() {
    if (this.difficultCardsArray) {
      this.pageText = ''
    } else {
      this.pageText = 'There are no difficult words to train';
    }
  }

}
