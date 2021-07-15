import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from 'src/app/services/backend/backend.service';
import { Subscription } from 'rxjs';
import { ICategory } from 'src/app/interfaces/category';
import { ICard } from 'src/app/interfaces/card';
import { PagesDataService } from 'src/app/services/pages-data/pages-data.service';


const LIMITS_CATEGORIES = 16;
const CATEGORIES_STEP = 8;

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {

  categoriesData: ICategory[] = [];
  renderedCategories: ICategory[] = [];
  currentIndex: number = 0;
  categoryInfoMap = new WeakMap<ICategory, IExtraCategoryInfo>();
  newCategoryName: string = '';
  scrollElement: HTMLElement | null = null;
  isValid: boolean = false;

  constructor(
    private readonly router: Router,
    private readonly pagesDataService: PagesDataService,
    private readonly backendService: BackendService
  ) { }

  ngOnInit(): void {

    this.getCategoriesData().then((data) => this.renderedCategories = data.slice(0, LIMITS_CATEGORIES));
    this.currentIndex = LIMITS_CATEGORIES;
  }

  async getCategoriesData() {
    const categoriesData = await this.backendService.getCategories();
    categoriesData.forEach((category) => {
      this.getCategoryCards(category.id).then((cards) => category.length = cards.length);
      });
    this.categoriesData = categoriesData;
    console.log('categoriesData', categoriesData)
    return this.categoriesData;
  }

  async getCategoryCards(catId: number) {
    const categoryCards: ICard[] = await this.backendService.getCards(catId);
    console.log('categoryCards', categoryCards)
    return categoryCards;
  }

  resetRenderedCategories() {

    this.renderedCategories = this.categoriesData.slice(0, LIMITS_CATEGORIES);
    this.currentIndex = LIMITS_CATEGORIES;
    if (this.scrollElement) {
      this.scrollElement.scrollTop = 0;
    }
  }


  async onAddCategory(input: HTMLInputElement) {

    const newCategory = {
      id: 0,
      category: this.newCategoryName,
      pictureSrc: 'assets/images/bird.jpg',
      iconSrc: 'assets/svg/baby-boy.svg',
      length: 0
    };

    this.newCategoryName = '';
    const addedCategory = await this.backendService.addCategory(newCategory);
    this.categoriesData.unshift(addedCategory);
    this.resetRenderedCategories();
    this.clearInputValue(input);
  }

  onEditCategory(categoryData: ICategory) {

    const oldValue = this.categoryInfoMap.get(categoryData) || { editMode: true };
    this.categoryInfoMap.set(categoryData, { ...oldValue, editMode: true });
  }

  onSaveCategory(categoryData: ICategory) {
    const oldValue = this.categoryInfoMap.get(categoryData) || { editMode: false };
    this.categoryInfoMap.set(categoryData, { ...oldValue, editMode: false });
    this.backendService.updateCategory(categoryData.id, categoryData);
  }

  onDeleteCategory(categoryData: ICategory) {
    const index = this.categoriesData.indexOf(categoryData);
    if (index > -1) {
      this.categoriesData.splice(index, 1);
      this.resetRenderedCategories();
      this.backendService.deleteCategory(categoryData.id);
    }
  }

  onGoToCategory(categoryData: ICategory) {
    const index = this.categoriesData.indexOf(categoryData);
    if (index > -1) {
      const category = this.categoriesData[index];
      //category.id = encodeURIComponent(category.category).toLocaleLowerCase();
      console.log(category.id);
      this.router.navigate([`/admin/${category.id}/cards`]);
    }
  }

  onScrollMove(event: Event) {
    this.scrollElement = event.target as HTMLElement;
    let elem = this.scrollElement;
    if (elem.scrollTop + elem.clientHeight >= elem.scrollHeight) {
      console.log("time to add");
      if (this.currentIndex < this.categoriesData.length) {
        this.currentIndex += CATEGORIES_STEP;
        this.renderedCategories = this.categoriesData.slice(0, this.currentIndex);
      }
    }
  }

  identify(index: number, item: ICategory) {
    return item.id;
  }

  onInputValidation(input: HTMLInputElement) {
    if (input.value) {
      console.log(input.value);
     this.isValid = true;
    } else this.isValid = false;
  }

  clearInputValue(input: HTMLInputElement) {
    input.value = '';
    this.isValid = false;
  }

}

export interface IExtraCategoryInfo {
  editMode: boolean
}
