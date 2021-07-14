import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {ICategoryCard} from "../../components/category-card/category-card.types";

@Injectable({
  providedIn: 'root'
})
export class PagesDataService {

  $isPlayMode = new BehaviorSubject<boolean>(false);

  audioArray: string[] = [];

  errorsCounter: number = 0;

  counter: number = 0;

  userHashedInfo: string = '';

}
