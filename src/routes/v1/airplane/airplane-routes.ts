import { RequestHandler, Router } from 'express';
import { controllers } from "../../../controllers";
import { validateAirplaneRequestValidation } from '../../../middlewares';
import { CreateAirplaneRequest } from '../../../types';
import { UpdateAirplaneRequest } from '../../../types/airplane-types';
export const airplaneRouter = Router();

const { airplaneController } = controllers;

airplaneRouter.post('/',
    validateAirplaneRequestValidation as RequestHandler,
    async (req, res) => {
        await airplaneController.createAirplane(req as CreateAirplaneRequest, res);
    });

airplaneRouter.get('/:id', async (req, res) => {
    await airplaneController.getAirplane(req, res);
});

airplaneRouter.get('/', async (req, res) => {
    await airplaneController.getAllAirplanes(req, res);
});

airplaneRouter.put('/:id',
    validateAirplaneRequestValidation as RequestHandler,
    async (req, res) => {
        await airplaneController.updateAirplane(req as UpdateAirplaneRequest, res);
    });

airplaneRouter.delete('/:id', async (req, res) => {
    await airplaneController.deleteAirplane(req, res);
});