import {Component, Input, OnInit} from '@angular/core';
import { ICategory } from 'src/app/interfaces/category';
import { BackendService } from 'src/app/services/backend/backend.service';
import {PagesDataService} from "../../services/pages-data/pages-data.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {

  isActive = false;

  categoriesData: ICategory[] = [];

  @Input()
  categoryData: ICategory | null = null;

  constructor(
    public readonly pagesDataService: PagesDataService,
    public readonly backendService: BackendService,
    public readonly activatedRoute: ActivatedRoute
  ) {
  }


  ngOnInit(): void {
    this.onGetCategoriesData();
  }

  get $isPlay() {
    return this.pagesDataService.$isPlayMode;
  }

   async onGetCategoriesData() {
    const categories = await this.backendService.getCategories();
    this.categoriesData = categories;
    return this.categoriesData;
  }

  onToggleChangeMode(value: boolean) {
    this.pagesDataService.$isPlayMode.next(value);
  }

  onBurgerClick() {
    this.isActive = true;
    this.onGetCategoriesData();
  }

  onMenuOrCoverClick() {
    this.isActive = false;
  }

}
