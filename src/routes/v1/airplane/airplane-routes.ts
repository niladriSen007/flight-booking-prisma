import { Router } from 'express';
import { airplaneControllers } from "../../../controllers"
import { CreateAirplaneRequest } from '../../../types';
import { UpdateAirplaneRequest } from '../../../types/airplane-types';
export const airplaneRouter = Router();

const { airplaneController } = airplaneControllers;

airplaneRouter.post('/', async (req, res) => {
    await airplaneController.createAirplane(req as CreateAirplaneRequest, res);
});

airplaneRouter.get('/:id', async (req, res) => {
    await airplaneController.getAirplane(req, res);
});

airplaneRouter.get('/', async (req, res) => {
    await airplaneController.getAllAirplanes(req, res);
});

airplaneRouter.put('/:id', async (req, res) => {
    await airplaneController.updateAirplane(req as UpdateAirplaneRequest, res);
});

airplaneRouter.delete('/:id', async (req, res) => {
    await airplaneController.deleteAirplane(req, res);
});