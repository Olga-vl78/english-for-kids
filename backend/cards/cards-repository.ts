import {DB_STORE, DbStore} from "../service/db-store";
import { ICard } from "./card";
import { getNextId } from "../service/counter";

export class CardsRepository {

  constructor(
    private readonly dbStore: DbStore
  ) {
  }


  getCategoryCards(categoryId: number): Promise<ICard[]> {
    const cards = this.dbStore.cardsStore.filter((card) => card.categoryId === categoryId);
    return Promise.resolve(cards);
  }

  createCard(categoryId: number, cardData: ICard): Promise<ICard> {
    const selectedCategoryCards = this.dbStore.cardsStore.filter((card) => card.categoryId === categoryId);
    const isExist = selectedCategoryCards.findIndex((card) => card.word === cardData.word) >= 0;
    if (isExist) {
      return Promise.reject(new Error(`Word ${cardData.word} already exists`));
    }
    const newCard: ICard = { ...cardData, id: getNextId() };
    this.dbStore.cardsStore.push(newCard);
    return Promise.resolve(newCard);
  }


  updateCard(categoryId: number, cardData: ICard, cardId: number): Promise<ICard> {
    const selectedCategoryCards = this.dbStore.cardsStore.filter((card) => card.categoryId === categoryId);
    if (selectedCategoryCards) {
      const cardIdx = selectedCategoryCards.findIndex((card) => card.id === cardId);
      if (cardIdx < 0) {
        return Promise.reject(new Error('Word is not found'));
      } else {
        const selectedCard = selectedCategoryCards[cardIdx];

        if (cardData.word != null) {
          selectedCard.word = cardData.word;
        }

        if (cardData.translation != null) {
          selectedCard.translation = cardData.translation;
        }

        if (cardData.audioSrc != null) {
          selectedCard.audioSrc = cardData.audioSrc;
        }

        if (cardData.image != null) {
          selectedCard.image = cardData.image;
        }

        if (cardData.correct != null) {
          selectedCard.correct = cardData.correct;
        }

        if (cardData.wrong != null) {
          selectedCard.wrong = cardData.wrong;
        }

        if (cardData.clicks != null) {
          selectedCard.clicks = cardData.clicks;
        }

        if (cardData.errors != null) {
          selectedCard.errors = cardData.errors;
        }
        return Promise.resolve(selectedCard);
      }
    }
    else throw new Error('Category is not found');
  }

  deleteCard(categoryId: number, cardId: number): Promise<void> {
    const selectedCategoryCards = this.dbStore.cardsStore.filter((card) => card.categoryId === categoryId);
    if (selectedCategoryCards.length > 0) {
      const cardIdx = selectedCategoryCards.findIndex((card) => card.id === cardId);

      if (cardIdx < 0) {
        return Promise.reject(new Error('Word is not found'));
      }
      else {
        selectedCategoryCards.splice(cardIdx, 1);
        return Promise.resolve();
      }
    }
    else throw new Error('Category is not found');
  }

}

export const CARDS_REPOSITORY = new CardsRepository(DB_STORE);
