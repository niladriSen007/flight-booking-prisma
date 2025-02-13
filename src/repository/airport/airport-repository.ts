import { StatusCodes } from "http-status-codes";
import { Prisma } from "../../database/connection";
import { CreateAirportTypes, UpdateAirportTypes } from "../../types/airport-types";
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
    return await Prisma.airport.create({
      data: airport
    });
  }

  async getAllAirports() {
    return await Prisma.airport.findMany();
  }

  async getAirport(id: number) {
    const airport = await Prisma.airport.findUnique({ where: { id } });
    if (!airport) {
      throw new GlobalErrorResponse('Airport not found', StatusCodes.NOT_FOUND);
    }
    return airport;
  }

  async deleteAirport(id: number) {
    await Prisma.airport.delete({ where: { id } });
  }

  async updateAirport(id: number, data: UpdateAirportTypes) {
    const airport = await Prisma.airport.findUnique({ where: { id } });
    if (!airport) {
      throw new GlobalErrorResponse('Airport not found', StatusCodes.NOT_FOUND);
    }
    return await Prisma.airport.update({ where: { id }, data });
  }
}