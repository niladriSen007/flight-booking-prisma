import { AirplaneService } from "./airplane/airplane-service"
import { repositories } from "../repository"
import { CityService } from "./city/city-service";

const { airplaneRepository,cityRepository } = repositories;
export const services = {
  airplaneService: new AirplaneService(airplaneRepository),
  cityService: new CityService(cityRepository)
};