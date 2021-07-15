import {Router} from 'express';
import {ICard} from './card';
import {CARDS_REPOSITORY} from "./cards-repository";
import {USERS_REPOSITORY} from "../users/users-repository";

export const cardsRouter = Router({ mergeParams: true });


cardsRouter.route('/categories/:catId/cards')
  .get(async (request, response) => {
    const catId = request.params.catId;
    if (!catId) {
      return response.sendStatus(404);
    }
    const cards = await CARDS_REPOSITORY.getCategoryCards(+catId);
    if (!cards) {
      return response.sendStatus(404);
    }
    return response.json(cards);
  })
  .post(async (request, response) => {

    if (!USERS_REPOSITORY.isAdmin(request.headers.authorization || '')) {
      return response.sendStatus(401);
    }

    const catId = request.params.catId;
    const cardData = request.body as ICard;
    if (!cardData.word) {
      return response.sendStatus(400);
    }

    try {
      const newCard = await CARDS_REPOSITORY.createCard(+catId, cardData);
      return response.json(newCard);
    } catch (error) {
      return response.status(400).send(error);
    }
  });


cardsRouter.route('/categories/:id/cards/:cardId')
  .delete(async (request, response) => {

    if (!USERS_REPOSITORY.isAdmin(request.headers.authorization || '')) {
      return response.sendStatus(401);
    }


    const catId = request.params.id;
    const selectedCardId = request.params.cardId;

    request.header('Authorization')

    if (!selectedCardId) {
      return response.sendStatus(404);
    }
    try {
      await CARDS_REPOSITORY.deleteCard(+catId, +selectedCardId);
      return response.sendStatus(200);
    } catch (error) {
      return response.status(404).send(error);
    }
  })
  .put(async (request, response) => {

    const catId = request.params.id;
    const selectedCardId = request.params.cardId;
    const cardData = request.body as ICard;

    if (!USERS_REPOSITORY.isAdmin(request.headers.authorization || '')) {
      cardData.word = null;
      cardData.translation = null;
      cardData.audioSrc = null;
      cardData.categoryId = null;
      cardData.image = null;
    }

    if (!selectedCardId) {
      return response.sendStatus(404);
    }
    try {
      const card = await CARDS_REPOSITORY.updateCard(+catId, cardData, +selectedCardId);
      return response.json(card);
    } catch (error) {
      return response.status(404).send(error);
    }
  })

