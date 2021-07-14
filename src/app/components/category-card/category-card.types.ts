import {IGameCard} from "../../interfaces/game-card.types";

export interface ICategoryCard {
  id: string;
  category: string;
  pictureSrc: string;
  iconSrc?: string;
  cards: IGameCard[];
}
