import { AirportService } from "../../services/airport/airport-service";
import { CreateAirportRequest } from "../../types/airport-types";
import { Response } from "express";
import { StatusCodes } from "http-status-codes";

export class AirportController {
  constructor(private readonly airportService: AirportService) { }

  async createAirport(req: CreateAirportRequest, res: Response) {
    try {
      const airport = await this.airportService.createAirport(req?.body);
      res.status(StatusCodes.CREATED).send(airport);
    } catch (error: any) {
      res.status(StatusCodes.BAD_REQUEST).send(error.message);
    }
  }
}