import { StatusCodes } from "http-status-codes";
import { Prisma } from "../../database/connection";
import { CreateAirportTypes } from "../../types/airport-types";
import { GlobalErrorResponse } from "../../utils";

export class AirportRepository {

  async createAirport(airport: CreateAirportTypes) {
    const isCityExist = await Prisma.city.findUnique({
      where: {
        id: airport.cityId
      }
    });
    if (!isCityExist) {
      throw new GlobalErrorResponse('City not found', StatusCodes.NOT_FOUND);
    }
    const isAirportExists = await Prisma.airport.findFirst({
      where: {
        name: airport.name,
        cityId: airport.cityId
      }
    });
    if (isAirportExists) {
      throw new GlobalErrorResponse('Airport already exists', StatusCodes.CONFLICT);
    }
    await Prisma.airport.create({
      data: airport
    });
  }
}