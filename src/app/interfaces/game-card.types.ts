export interface IGameCard {
  word: string,
  translation: string,
  audioSrc: string,
  image: string,
  category?: string,
  clicks: number,
  correct: number,
  wrong: number,
  errors: number
}
