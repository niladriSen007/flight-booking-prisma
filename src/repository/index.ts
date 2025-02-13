import { AirplaneRepository } from './airplane/airplane-repository';
import { AirportRepository } from './airport/airport-repository';
import { CityRepository } from './city/city-repository';

export const repositories =  {
  airplaneRepository : new AirplaneRepository(),
  cityRepository: new CityRepository(),
  airportRepository: new AirportRepository()
}