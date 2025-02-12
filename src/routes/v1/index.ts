import {airplaneRouter} from './airplane/airplane-routes';
import {Router} from 'express';
import { cityRouter } from './city/city-routes';

export const v1Router = Router();

v1Router.use('/airplane', airplaneRouter);
v1Router.use('/city', cityRouter);
