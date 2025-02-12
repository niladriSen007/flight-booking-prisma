import { AirplaneController } from "./airplane/airplane-controller";
import { services } from "../services";
import { CityController } from "./city/city-controller";

const { airplaneService,cityService } = services;

export const controllers = {
  airplaneController: new AirplaneController(airplaneService),
  cityController: new CityController(cityService)
};