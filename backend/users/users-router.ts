import {Router} from 'express';
import {DbStore} from '../service/db-store';
import {UsersRepository} from './users-repository';

export const usersRouter = Router();
const dbStore = new DbStore();
const usersRepo = new UsersRepository(dbStore);

usersRouter.route('/users')
  .get(async (request, response) => {
    const hash = request.headers.authorization;
    if (hash) {
    const status = await usersRepo.getUser(hash);
    console.log(status);
    response.json(status);
    }

  })



