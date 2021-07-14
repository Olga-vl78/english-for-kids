import { ICard } from "../cards/card";

export interface ICategoryData {
    id: string;
    category: string;
    pictureSrc: string;
    iconSrc: string;
    cards: ICard[];
}