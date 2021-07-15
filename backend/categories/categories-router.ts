import {Router} from 'express';
import {ICategory} from './category';
import {CATEGORIES_REPOSITORY} from './categories-repository';
import {USERS_REPOSITORY} from "../users/users-repository";

export const categoriesRouter = Router();

categoriesRouter.route('/categories')
  .get(async (request, response) => {

    const categories = await CATEGORIES_REPOSITORY.getCategories();
    return response.json(categories);
  })
  .post(async (request, response) => {
    if (!USERS_REPOSITORY.isAdmin(request.headers.authorization || '')) {
      return response.sendStatus(401);
    }

    const categoryData = request.body as ICategory;
    if (!categoryData.category) return response.sendStatus(400);
    try {
      const newCategory = await CATEGORIES_REPOSITORY.createCategory(categoryData);
      return response.json(newCategory);
    } catch (error) {
      return response.status(400).send(error);
    }
  })

categoriesRouter.route('/categories/:id')
  .put(async (request, response) => {

    if (!USERS_REPOSITORY.isAdmin(request.headers.authorization || '')) {
      return response.sendStatus(401);
    }

    const catId = request.params.id;
    if (!catId) {
      return response.sendStatus(404);
    }
    const categoryData = request.body as ICategory;
    try {
      const newCategoryData = await CATEGORIES_REPOSITORY.updateCategory(+catId, categoryData);
      return response.json(newCategoryData);
    } catch (error) {
      return response.status(400).send(error);
    }
  })
  .delete(async (request, response) => {

    if (!USERS_REPOSITORY.isAdmin(request.headers.authorization || '')) {
      return response.sendStatus(401);
    }

    const catId = request.params.id;
    if (!catId) {
      return response.sendStatus(404);
    }
    try {
      await CATEGORIES_REPOSITORY.deleteCategory(+catId);
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
    const category = await CATEGORIES_REPOSITORY.getCategory(+catId);
    if (!category) {
      return response.sendStatus(404);
    }
    return response.json(category);
  })

