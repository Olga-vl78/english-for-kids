import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {ICard} from 'src/app/interfaces/card';
import {BackendService} from 'src/app/services/backend/backend.service';

const LIMITS_CARDS = 4;
const CARDS_STEP = 2;

@Component({
  selector: 'app-admin-cards-page',
  templateUrl: './admin-cards-page.component.html',
  styleUrls: ['./admin-cards-page.component.scss']
})
export class AdminCardsPageComponent implements OnInit {

  subscriptions: Subscription[] = [];
  cardsData: ICard[] = [];
  renderedCards: ICard[] = [];
  catId: number = 0;
  currentIndex: number = 0;

  cardInfoMap = new WeakMap<ICard, IExtraCardInfo>();

  scrollElement: HTMLElement | null = null;

  currentCategoryName: string | null = null;

  newCardWord: string = '';
  newCardTranslation: string = '';
  newCardPic: string = '../../assets/images/smile.jpg';
  newCardAudio: string = '';

  isValid: boolean = false;


  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly backendService: BackendService
    ) {}


  ngOnInit(): void {

    this.subscriptions.push(this.activatedRoute.paramMap.subscribe((params) => {

      const catId = params.get('id');
      this.catId = Number(catId);
      this.onGetCategoryName();
      this.getCategoryCards(this.catId)
      .then((data) => this.cardsData = data)
      .then((cardsData) =>  this.renderedCards = cardsData.slice(0, LIMITS_CARDS));
      this.currentIndex = LIMITS_CARDS;
    }));

  }

  async getCategoryCards(id: number) {
    const categoryCards = await this.backendService.getCards(id);
    return categoryCards;
  }

  async onGetCategoryName() {
    const categories = await this.backendService.getCategories();
    const cat = categories.find((category) =>
        category.id === this.catId);
        if(cat) {
          this.currentCategoryName = cat.category;
        }
  }

  resetRenderedCards() {

    this.renderedCards = this.cardsData.slice(0, LIMITS_CARDS);
    this.currentIndex = LIMITS_CARDS;
    if (this.scrollElement) {
      this.scrollElement.scrollTop = 0;
    }
  }

  async updateCardsData() {
    const newCardsData = await this.backendService.getCards(this.catId);
    this.cardsData = newCardsData;
    return this.cardsData;
  }

  async onAddCard(input: HTMLInputElement) {
    const newCard = {
      word: this.newCardWord,
      translation: this.newCardTranslation,
      audioSrc: this.newCardAudio,
      image: this.newCardPic,
      clicks: 0,
      correct: 0,
      wrong: 0,
      errors: 0,
      categoryId: this.catId,
      id: 0
    }

    this.newCardWord = '';
    this.newCardTranslation = '';
    this.newCardAudio = '';
    this.newCardPic = 'assets/images/smile.jpg';
    const addedCard = await this.backendService.addCard(this.catId, newCard);

    this.cardsData.unshift(addedCard);
    this.resetRenderedCards();
    this.clearInputValue(input);
  }

  onPictureLoad(input: HTMLInputElement) {

    let selectedFile;
    if (input.files) {
      selectedFile = input.files[0];
      let reader = new FileReader();
      reader.readAsDataURL(selectedFile);

      reader.onload = () => {
        console.log(reader.result);
        this.newCardPic = `${reader.result}`;
        console.log('this.newCardPic', this.newCardPic)
        input.value = '';
      }
    }
  }


  onAudioLoad(input: HTMLInputElement) {

    let selectedFile;
    if (input.files) {
      selectedFile = input.files[0];
      let reader = new FileReader();
      reader.readAsDataURL(selectedFile);

      reader.onload = () => {
        console.log(reader.result);
        this.newCardAudio = `${reader.result}`;
        console.log('this.newCardAudio', this.newCardAudio)
        input.value = '';
      }
    }
  }

  onPlayIconClick(audioFile: string) {

    let audio = new Audio(audioFile);
    audio.play();
    console.log('audioFile', audio)
  }

  onWatchCard(cardData: ICard) {
    const oldValue = this.cardInfoMap.get(cardData) || { editMode: false, watchMode: true };
    this.cardInfoMap.set(cardData, { ...oldValue, editMode: false, watchMode: true });
  }

  onEditCard(cardData: ICard) {
    const oldValue = this.cardInfoMap.get(cardData) || { editMode: true, watchMode: false };
    this.cardInfoMap.set(cardData, { ...oldValue, editMode: true, watchMode: false });
  }

  onSaveCard(cardData: ICard) {
    const oldValue = this.cardInfoMap.get(cardData) || { editMode: false, watchMode: false };
    this.cardInfoMap.set(cardData, { ...oldValue, editMode: false, watchMode: false });
    this.backendService.updateCard(this.catId, cardData, cardData.id);
  }

  onDeleteCard(cardData: ICard) {
    const index = this.cardsData.indexOf(cardData);
    if (index > -1) {
      this.cardsData.splice(index, 1);
      this.backendService.deleteCard(this.catId, cardData.id)
      this.resetRenderedCards();
    }
  }

  onAddFile(cardData: ICard) {
    cardData.image = this.newCardPic;
    console.log(this.cardsData);
  }

  onScrollMove(event: Event) {
    this.scrollElement = event.target as HTMLElement;
    let elem = this.scrollElement;
    if (elem.scrollTop + elem.clientHeight >= elem.scrollHeight) {
      console.log("time to add");
      if (this.currentIndex < this.cardsData.length) {
        this.currentIndex += CARDS_STEP;
        this.renderedCards = this.cardsData.slice(0, this.currentIndex);
      }
    }
  }

  identify(index: number, item: ICard) {
    return item.id;
  }

  onInputValidation(input: HTMLInputElement) {
    if (input.value) {
      console.log(input.value);
     this.isValid = true;
    } else this.isValid = false;
  }

  clearInputValue(input: HTMLInputElement) {
    input.value = '';
    this.isValid = false;
  }

}



export interface IExtraCardInfo {
  editMode: boolean;
  watchMode: boolean
}
