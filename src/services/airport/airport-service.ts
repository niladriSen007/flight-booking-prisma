import { StatusCodes } from "http-status-codes";
import { AirportRepository } from "../../repository/airport/airport-repository";
import { CreateAirportTypes } from "../../types/airport-types";
import { GlobalErrorResponse } from "../../utils";

export class AirportService {
  constructor(private readonly airportRepository: AirportRepository) { }

  async createAirport(airport: CreateAirportTypes) {
    try {
      return await this.airportRepository.createAirport(airport);
    } catch (error: any) {
      if (error?.statusCode === StatusCodes.NOT_FOUND) {
        throw new GlobalErrorResponse('City not found', StatusCodes.NOT_FOUND);
      }
      if (error?.statusCode === StatusCodes.CONFLICT) {
        throw new GlobalErrorResponse('Airport already exists', StatusCodes.CONFLICT);
      }
      throw new GlobalErrorResponse(error.message, StatusCodes.INTERNAL_SERVER_ERROR);
    }
  }
}