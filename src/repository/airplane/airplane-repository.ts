import { StatusCodes } from "http-status-codes";
import { Prisma } from "../../database/connection";
import { CreateAirplaneTypes } from "../../types";
import { UpdateAirplaneRequest } from "../../types/airplane-types";
import { GlobalErrorResponse } from "../../utils";

export class AirplaneRepository {
  async createAirplane(data: CreateAirplaneTypes) {
    return await Prisma.airplane.create({ data })
  }

  async getAirplane(id: number) {
    const airplane = await Prisma.airplane.findUnique({ where: { id } })
    if (!airplane) {
      throw new GlobalErrorResponse('Airplane not found', StatusCodes.NOT_FOUND)
    }
    return await Prisma.airplane.findUnique({ where: { id } })
  }

  async updateAirplane(id: number, data: UpdateAirplaneRequest) {
    const airplane = await Prisma.airplane.findUnique({ where: { id } })
    if (!airplane) {
      throw new GlobalErrorResponse('Airplane not found', StatusCodes.NOT_FOUND)
    }
    return await Prisma.airplane.update({ where: { id }, data })
  }

  async deleteAirplane(id: number) {
    const airplane = await Prisma.airplane.findUnique({ where: { id } })
    if (!airplane) {
      throw new GlobalErrorResponse('Airplane not found', StatusCodes.NOT_FOUND)
    }
    return await Prisma.airplane.delete({ where: { id } })
  }

  async getAllAirplanes() {
    return await Prisma.airplane.findMany()
  }
}