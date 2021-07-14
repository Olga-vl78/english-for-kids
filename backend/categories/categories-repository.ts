import {DbStore} from "../service/db-store";
import {ICategory} from "./category";
import {getNextId} from "../service/counter";

export class CategoriesRepository {

  constructor(
    private readonly dbStore: DbStore
  ) {
  }

  getCategories(): Promise<ICategory[]> {
    const categories: ICategory[] = [];
    this.dbStore.categoriesStore.forEach((category) => categories.push({
      id: category.id,
      category: category.category,
      pictureSrc: category.pictureSrc,
      iconSrc: category.iconSrc,
    }));
    return Promise.resolve(categories);
  }

  getCategory(id: number): Promise<ICategory | undefined> {
    const category = this.dbStore.categoriesStore.find((category) => category.id === id);
    console.log(category)
    return Promise.resolve(category);
  }

  createCategory(categoryData: ICategory): Promise<ICategory> {
    const isExist = this.dbStore.categoriesStore.findIndex((category) => category.category === categoryData.category) >= 0;
    if (isExist) {
      return Promise.reject(new Error(`Category with name ${categoryData.category} already exists`));
    }
    const newCategory: ICategory = {
      ...categoryData,
      id: getNextId()
    }
    this.dbStore.categoriesStore.push(newCategory);
    console.log(newCategory)
    return Promise.resolve(newCategory);
  }

  updateCategory(id: number, categoryData: ICategory): Promise<ICategory> {
    const selectedCategory = this.dbStore.categoriesStore.find((category) => category.id === categoryData.id);
    if (selectedCategory === undefined) {
      return Promise.reject(new Error(`Category with id ${categoryData.id} doesn't exist`));
    }
    else {
      selectedCategory.category = categoryData.category;
      selectedCategory.pictureSrc = categoryData.pictureSrc;
      selectedCategory.iconSrc = categoryData.iconSrc;
      return Promise.resolve(selectedCategory);
    }
  }

  deleteCategory(id: number): Promise<void> {
    const categoryIndex = this.dbStore.categoriesStore.findIndex((category) => category.id === id);
    if (categoryIndex < 0) {
      return Promise.reject(new Error('Category is not found'));
    }
    else {
      this.dbStore.categoriesStore.splice(categoryIndex, 1);
      this.deleteCategoryCards(id);
      return Promise.resolve();
    }
  }

  deleteCategoryCards(categoryId: number) {
    this.dbStore.cardsStore.forEach((card) => {
      const cardIndex = this.dbStore.cardsStore.findIndex((card) => card.categoryId === categoryId);
      if (cardIndex >= 0) {
        this.dbStore.cardsStore.splice(cardIndex, 1);
      }
    });
  }
}
