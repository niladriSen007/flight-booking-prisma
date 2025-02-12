import { AirplaneRepository } from './airplane/airplane-repository';
import { CityRepository } from './city/city-repository';

export const repositories =  {
  airplaneRepository : new AirplaneRepository(),
  cityRepository: new CityRepository()
}