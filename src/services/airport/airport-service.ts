import { StatusCodes } from "http-status-codes";
import { AirportRepository } from "../../repository/airport/airport-repository";
import { CreateAirportTypes, UpdateAirportTypes } from "../../types/airport-types";
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

  async getAllAirports() {
    try {
      return await this.airportRepository.getAllAirports();
    } catch (error: any) {
      throw new GlobalErrorResponse(error.message, StatusCodes.INTERNAL_SERVER_ERROR);
    }
  }

  async getAirport(id: number) {
    try {
      return await this.airportRepository.getAirport(id);
    } catch (error: any) {
      if (error?.statusCode === StatusCodes.NOT_FOUND) {
        throw new GlobalErrorResponse('Airport not found', StatusCodes.NOT_FOUND);
      }
      throw new GlobalErrorResponse(error.message, StatusCodes.INTERNAL_SERVER_ERROR);
    }
  }

  async deleteAirport(id: number) {
    try {
      return await this.airportRepository.deleteAirport(id);
    } catch (error: any) {
      throw new GlobalErrorResponse(error.message, StatusCodes.INTERNAL_SERVER_ERROR);
    }
  }

  async updateAirport(id: number, data: UpdateAirportTypes) {
    try {
      return await this.airportRepository.updateAirport(id, data);
    } catch (error: any) {
      if (error?.statusCode === StatusCodes.NOT_FOUND) {
        throw new GlobalErrorResponse('Airport not found', StatusCodes.NOT_FOUND);
      }
      throw new GlobalErrorResponse(error.message, StatusCodes.INTERNAL_SERVER_ERROR);
    }
  }
}