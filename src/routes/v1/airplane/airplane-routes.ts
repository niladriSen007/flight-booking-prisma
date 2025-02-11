import { Router } from 'express';
import { airplaneControllers } from "../../../controllers"
import { CreateAirplaneRequest } from '../../../types';
export const airplaneRouter = Router();

const { airplaneController } = airplaneControllers;

airplaneRouter.post('/', async (req, res) => {
    await airplaneController.createAirplaneA(req as CreateAirplaneRequest, res);
});