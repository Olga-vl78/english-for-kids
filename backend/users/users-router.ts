import {Router} from 'express';
import {USERS_REPOSITORY} from "./users-repository";

export const usersRouter = Router();

usersRouter.route('/users')
  .get(async (request, response) => {
    const hash = request.headers.authorization || '';
    const user = await USERS_REPOSITORY.getUser(hash);
    return response.json(user);
  })



