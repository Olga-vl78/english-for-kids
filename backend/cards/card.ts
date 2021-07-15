export interface ICard {
  id: number;

  word: string | null;
  translation: string | null;
  audioSrc: string | null;
  image: string | null;
  categoryId: number | null;

  clicks: number | null;
  correct: number | null;
  wrong: number | null;
  errors: number | null;
}
