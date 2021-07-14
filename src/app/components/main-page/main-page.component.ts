import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/interfaces/category';
import { BackendService } from 'src/app/services/backend/backend.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  categoriesData: ICategory[] = [];

  constructor(
    private readonly backendService: BackendService
  ) { }

  ngOnInit(): void {
    this.getCategoriesData();
  }

  async getCategoriesData() {

    const catsData = await this.backendService.getCategories();
    this.categoriesData = catsData;
    return this.categoriesData;
  }

}
