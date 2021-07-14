export interface ICard {
    word: string;
    translation: string;
    audioSrc: string;
    image: string;
    clicks: number;
    correct: number;
    wrong: number;
    errors: number;
    categoryId: number;
    id: number;
}