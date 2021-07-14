/*import { ICard } from "../cards/card";
import { ICategoryData } from "../interfaces/category-data-interface";
import { ICategory } from "../categories/category";
import { DbStore } from "./db-store";

export class DbService {

    constructor(
        private readonly dbStore: DbStore
    ) { }

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

    getCategoryByName(categoryName: string): Promise<ICategory | undefined> {
        const category = this.dbStore.categoriesStore.find((category) => category.category === categoryName);
        return Promise.resolve(category);
    }

    createCategory(catData: ICategory): Promise<ICategory> {
        const isExist = this.dbStore.categoriesStore.findIndex((category) => category.category === catData.category) >= 0;
        if (isExist) {
            return Promise.reject(new Error(`Category with name ${catData.category} already exists`));
        }
        const newCategoryData: ICategoryData = {
            ...catData,
            cards: [],
        }
        this.dbStore.categoriesStore.push(newCategoryData);
        return Promise.resolve(newCategoryData);
    }

    updateCategory() {
    }

    deleteCategory(categoryName: string): Promise<void> {
        const categoryIdx = this.dbStore.categoriesStore.findIndex((category) => category.category === categoryName);
        if (categoryIdx < 0) {
            return Promise.reject(new Error('Category is not found'));
        } else {
            this.dbStore.categoriesStore.splice(categoryIdx, 1);
            return Promise.resolve();
        }
    }

    getCategoryCards(categoryName: string): Promise<ICard[]> {
        const selectedCategory = this.dbStore.categoriesStore.find((category) => category.category === categoryName);
        if (!selectedCategory) {
            return Promise.reject(new Error('Category is not entered'));
        } else {
            const cards = selectedCategory.cards;
            return Promise.resolve(cards);
        }
    }

    getCategoriesCards(): Promise<ICard[]> {
        const cardsData: ICard[] = [];
        this.dbStore.categoriesStore.forEach((category) => category.cards.forEach((card) => cardsData.push(card)));
        return Promise.resolve(cardsData);
    }

    createCard(categoryName: string, cardData: ICard): Promise<ICard> {
        const categoryData = this.dbStore.categoriesStore.find((category) => category.category === categoryName);
        if (categoryData) {
            const isExist = categoryData.cards.findIndex((card) => card.word === cardData.word) >= 0;
            if (isExist) {
                return Promise.reject(new Error(`Word ${cardData.word} already exists`));
            }
        }
        const newCardData: ICard = cardData;
        if (categoryData) {
            categoryData.cards.push(newCardData);
        }
        return Promise.resolve(newCardData);
    }

    deleteCard(categoryName: string, cardWord: string): Promise<void> {
        const categoryData = this.dbStore.categoriesStore.find((category) => category.category === categoryName);
        if (categoryData) {
            const cardIdx = categoryData.cards.findIndex((card) => card.word === cardWord);
            if (cardIdx < 0) {
                return Promise.reject(new Error('Word is not found'));
            } else {
                categoryData.cards.splice(cardIdx, 1);
                return Promise.resolve();
            }
        } else throw new Error('Category is not found');
    }
    /*
        getCategoryCard(categoryName: string, cardWord: string): Promise<ICard | undefined> {
            const selectedCategory = this.dbStore.categoriesStore.find((category) => category.category === categoryName);
            const card = selectedCategory.cards.find((card) => card.word === cardWord);
            return Promise.resolve(card);
        }*/

//}*/