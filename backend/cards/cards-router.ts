import {Router} from 'express';
import {ICard} from './card';
import {DbStore} from '../service/db-store';
import {CardsRepository} from './cards-repository';

export const cardsRouter = Router({ mergeParams: true });
const dbStore = new DbStore();
const cardsRepo = new CardsRepository(dbStore);


cardsRouter.route('/categories/:catId/cards')
  .get(async (request, response) => {
    const catId = request.params.catId;
    if (!catId) {
      return response.sendStatus(404);
    }
    const cards = await cardsRepo.getCategoryCards(+catId);
    if (!cards) {
      return response.sendStatus(404);
    }
    return response.json(cards);
  })
  .post(async (request, response) => {
    const catId = request.params.catId;
    const cardData = request.body as ICard;
    if (!cardData.word) {
      return response.sendStatus(400);
    }

    try {
      const newCard = await cardsRepo.createCard(+catId, cardData);
      return response.json(newCard);
    } catch (error) {
      return response.status(400).send(error);
    }
  });


cardsRouter.route('/categories/:id/cards/:cardId')
  .delete(async (request, response) => {
    const catId = request.params.id;
    const selectedCardId = request.params.cardId;

    /*const hash = request.header('Authorisation');
    if (!hashArray.includes(hash)) {
          return response.status(401).send(error);
    }*/

    if (!selectedCardId) {
      return response.sendStatus(404);
    }
    try {
      await cardsRepo.deleteCard(+catId, +selectedCardId);
      return response.sendStatus(200);
    } catch (error) {
      return response.status(404).send(error);
    }
  })
  .put(async (request, response) => {
    const catId = request.params.id;
    const selectedCardId = request.params.cardId;
    const cardData = request.body as ICard;

    if (!selectedCardId) {
      return response.sendStatus(404);
    }
    try {
      const card = await cardsRepo.updateCard(+catId, cardData, +selectedCardId);
      return response.json(card);
    } catch (error) {
      return response.status(404).send(error);
    }
  })

