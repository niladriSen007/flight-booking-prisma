import { CreateAirportRequest } from '../../../types/airport-types';
import { controllers } from './../../../controllers/index';
import { Router } from "express";
export const airportRouter = Router();

const { airportController } = controllers;

airportRouter.post('/', async (req, res) => {
  await airportController.createAirport(req as CreateAirportRequest, res);
});

airportRouter.get('/', async (req, res) => {
  await airportController.getAllAirports(res);
});

airportRouter.get('/:id', async (req, res) => {
  await airportController.getAirport(req, res);
});

airportRouter.delete('/:id', async (req, res) => {
  await airportController.deleteAirport(req, res);
});

airportRouter.put('/:id', async (req, res) => {
  await airportController.updateAirport(req, res);
});


