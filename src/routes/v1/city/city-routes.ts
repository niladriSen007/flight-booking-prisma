import { RequestHandler, Router } from 'express';
import { controllers } from '../../../controllers';
import { CreateCityRequest, UpdateCityRequest } from '../../../types';
import { validateCityRequestValidation } from '../../../middlewares';

export const cityRouter = Router();

const { cityController } = controllers

cityRouter.post('/',
  validateCityRequestValidation as RequestHandler,
  async (req, res) => {
    await cityController.createCity(req as CreateCityRequest, res);
  });

cityRouter.get('/', async (req, res) => {
  await cityController.getAllCities(req, res);
});

cityRouter.get('/:id', async (req, res) => {
  await cityController.getCityById(req, res);
});

cityRouter.put('/:id',
  validateCityRequestValidation as RequestHandler,
  async (req, res) => {
    await cityController.updateCity(req as UpdateCityRequest, res);
  });

cityRouter.delete('/:id', async (req, res) => {
  await cityController.deleteCity(req, res);
});

