import { Component, OnInit } from '@angular/core';
import { ICard } from 'src/app/interfaces/card';
import { BackendService } from 'src/app/services/backend/backend.service';

@Component({
  selector: 'app-statistics-page',
  templateUrl: './statistics-page.component.html',
  styleUrls: ['./statistics-page.component.scss']
})
export class StatisticsPageComponent implements OnInit {

  tableData: ICard[] = [];
  sortState = new Map<string, boolean>();

  constructor(
    private readonly backendService: BackendService
  ) { }

  ngOnInit(): void {

    this.onGetAllCards();
  }

  async onGetAllCards() {
    const table: ICard[] = [];
    const categories = await this.backendService.getCategories();
    categories.forEach((category) => {
      this.getCategoryCards(category.id).then((cards) => cards.forEach((card) => {
        card.category = category.category;
        table.push(card);
      }));
    });
    this.tableData = table;
  }

  async getCategoryCards(catId: number) {
    const cards = await this.backendService.getCards(catId);
    return cards;
  }

  async clearStatisticData() {
    this.tableData.forEach((card) => {
      card.clicks = 0;
      card.correct = 0;
      card.wrong = 0;
      card.errors = 0;
    });
    this.tableData.forEach((card) => this.backendService.updateCard(card.categoryId, card, card.id));
  }

  sortTableByString(column: keyof ICard) {

    const asc = !this.sortState.get(column);
    this.sortState.set(column, asc);

    return this.tableData.sort((a, b) => {
      const ac = a[column];
      const bc = b[column];
      const result = (ac && bc && ac < bc ? -1 : 1 || 0);
      return asc ? result : -result;
    });
  }

  sortTableByNum(column: keyof ICard) {

    const asc = !this.sortState.get(column);
    this.sortState.set(column, asc);

    return this.tableData.sort((a: ICard, b: ICard) => {
      const ac = a[column] as number;
      const bc = b[column] as number;
      return asc ? ac - bc : bc - ac;
    });
  }

}
