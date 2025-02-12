import { StatusCodes } from "http-status-codes";
import { Prisma } from "../../database/connection";
import { GlobalErrorResponse } from "../../utils";
import { CreateCityTypes } from "../../types";

export class CityRepository {
  public async getAllCities() {
    return await Prisma?.city.findMany();
  }

  public async createCity(city: CreateCityTypes) {
    return await Prisma?.city.create({
      data: city
    });
  }

  public async getCityById(id: number) {
    return await Prisma?.city.findUnique({
      where: {
        id
      }
    });
  }


  public async updateCity(id: number, city: any) {
    return await Prisma?.city.update({
      where: {
        id
      },
      data: city
    });
  }


  public async deleteCity(id: number) {
    const city = await Prisma?.city.findUnique({
      where: {
        id
      }
    });
    if (!city) {
     throw new GlobalErrorResponse('City not found',StatusCodes.NOT_FOUND);
    }
    return await Prisma?.city.delete({
      where: {
        id
      }
    });
  }
}