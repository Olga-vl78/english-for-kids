import {Router} from 'express';
import {ICategory} from './category';
import {DbStore} from '../service/db-store';
import {CategoriesRepository} from './categories-repository';

export const categoriesRouter = Router();
const dbStore = new DbStore();
const categoriesRepo = new CategoriesRepository(dbStore);

categoriesRouter.route('/categories')
  .get(async (request, response) => {

    const categories = await categoriesRepo.getCategories();
    response.json(categories);
  })
  .post(async (request, response) => {
      const categoryData = request.body as ICategory;
      if (!categoryData.category) return response.sendStatus(400);
      try {
          const newCategory = await categoriesRepo.createCategory(categoryData);
          return response.json(newCategory);
      } catch(error) {
          return response.status(400).send(error);
      }
  })

categoriesRouter.route('/categories/:id')
  .put(async (request, response) => {
    const catId = request.params.id;
    if (!catId) {
      return response.sendStatus(404);
    }
    const categoryData = request.body as ICategory;
    try {
      const newCategoryData = await categoriesRepo.updateCategory(+catId, categoryData);
      return response.json(newCategoryData);
    } catch (error) {
      return response.status(400).send(error);
    }
  })
  .delete(async (request, response) => {
      const catId = request.params.id;
      if (!catId) {
          return response.sendStatus(404);
      }
      try {
          await categoriesRepo.deleteCategory(+catId);
          return response.sendStatus(200);
      } catch (error) {
          return response.status(404).send(error);
      }
  })
  .get(async (request, response) => {
      const catId = request.params.id;
      if (!catId) {
          return response.sendStatus(404);
      }
      const category = await categoriesRepo.getCategory(+catId);
      if (!category) {
          return response.sendStatus(404);
      }
      return response.json(category);
  })

