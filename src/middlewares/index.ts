import { validateAirportRequestValidation } from './airport/airport-middleware';
import {validateAirplaneRequestValidation} from "./airplane/auth-middleware"
import {validateCityRequestValidation} from "./city/city-middleware"

export {
  validateAirplaneRequestValidation,
  validateCityRequestValidation,
  validateAirportRequestValidation
}