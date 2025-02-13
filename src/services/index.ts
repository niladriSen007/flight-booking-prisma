import { AirplaneService } from "./airplane/airplane-service"
import { repositories } from "../repository"
import { CityService } from "./city/city-service";
import { AirportService } from "./airport/airport-service";

const { airplaneRepository,cityRepository,airportRepository } = repositories;
export const services = {
  airplaneService: new AirplaneService(airplaneRepository),
  cityService: new CityService(cityRepository),
  airportService: new AirportService(airportRepository)
};