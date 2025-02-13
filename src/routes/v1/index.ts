import {airplaneRouter} from './airplane/airplane-routes';
import {Router} from 'express';
import { cityRouter } from './city/city-routes';
import { airportRouter } from './airport/airport-routes';

export const v1Router = Router();

v1Router.use('/airplane', airplaneRouter);
v1Router.use('/city', cityRouter);
v1Router.use('/airport', airportRouter);
