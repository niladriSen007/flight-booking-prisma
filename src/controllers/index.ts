import { AirplaneController } from "./airplane/airplane-controller";
import { services } from "../services";
import { CityController } from "./city/city-controller";
import { AirportController } from "./airport/airport-controller";

const { airplaneService,cityService,airportService } = services;

export const controllers = {
  airplaneController: new AirplaneController(airplaneService),
  cityController: new CityController(cityService),
  airportController: new AirportController(airportService)
};