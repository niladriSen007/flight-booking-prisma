import { Prisma } from "../database/connection";
import { CreateAirplaneTypes } from "../types";

export class AirplaneRepository {
  async createAirplane(data: CreateAirplaneTypes) {
    return await Prisma.airplane.create({ data })
  }
}