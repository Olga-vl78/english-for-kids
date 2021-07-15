import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PagesDataService {

  $isPlayMode = new BehaviorSubject<boolean>(false);

  audioArray: string[] = [];

  errorsCounter: number = 0;

  counter: number = 0;

}
