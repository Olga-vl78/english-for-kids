import {Component, Input, OnInit} from '@angular/core';
import { ICategory } from 'src/app/interfaces/category';
import {PagesDataService} from "../../services/pages-data/pages-data.service";

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.scss']
})
export class CategoryCardComponent {

  @Input()
  categoryData: ICategory | null = null;

  constructor(
    private readonly pagesDataService: PagesDataService,
  ) { }


  get $isPlay() {
    return this.pagesDataService.$isPlayMode;
  }

}
