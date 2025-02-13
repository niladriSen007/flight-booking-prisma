import { CreateAirportRequest } from '../../../types/airport-types';
import { controllers } from './../../../controllers/index';
import { Router } from "express";
export const airportRouter = Router();

const { airportController } = controllers;

airportRouter.get('/', async (req, res) => {
  await airportController.createAirport(req as CreateAirportRequest, res);
});