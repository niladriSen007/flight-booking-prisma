import {airplaneRouter} from './airplane/airplane-routes';
import {Router} from 'express';

export const v1Router = Router();

v1Router.use('/airplane', airplaneRouter);
