import { AirportService } from "../../services/airport/airport-service";
import { CreateAirportRequest, UpdateAirportRequest } from "../../types/airport-types";
import { Response } from "express";
import { StatusCodes } from "http-status-codes";
import { errorFormat, successResponseFormat } from "../../utils";

export class AirportController {
  constructor(private readonly airportService: AirportService) { }

  async createAirport(req: CreateAirportRequest, res: Response) {
    try {
      const airport = await this.airportService.createAirport(req?.body);
      successResponseFormat.data = airport;
      successResponseFormat.message = "Airport created successfully";
      res.status(StatusCodes.CREATED).send(successResponseFormat);
    } catch (error: any) {
      errorFormat.message = error.message;
      errorFormat.error.explanation = "Airport already exists";
      res.status(StatusCodes.BAD_REQUEST).send(errorFormat);
    }
  }

  async getAllAirports(res: Response) {
    try {
      const airports = await this.airportService.getAllAirports();
      successResponseFormat.data = airports;
      successResponseFormat.message = "Airports fetched successfully";
      res.status(StatusCodes.OK).send(successResponseFormat);
    } catch (error: any) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error.message);
    }
  }

  async getAirport(req: any, res: Response) {
    try {
      const airport = await this.airportService.getAirport(parseInt(req?.params?.id));
      successResponseFormat.data = airport;
      successResponseFormat.message = "Airport fetched successfully";
      res.status(StatusCodes.OK).send(successResponseFormat);
    } catch (error: any) {
      errorFormat.message = error.message;
      errorFormat.error.explanation = "Airport not found";
      res.status(StatusCodes.NOT_FOUND).send(errorFormat);
    }
  }

  async deleteAirport(req: any, res: Response) {
    try {
      await this.airportService.deleteAirport(parseInt(req?.params?.id));
      successResponseFormat.message = "Airport deleted successfully";
      res.status(StatusCodes.OK).json(successResponseFormat);
    } catch (error: any) {
      errorFormat.message = error.message;
      errorFormat.error.explanation = "Airport not found";
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(errorFormat);
    }
  }


  async updateAirport(req: UpdateAirportRequest, res: Response) {
    try {
      const airport = await this.airportService.updateAirport(parseInt(req?.params?.id), req?.body);
      successResponseFormat.data = airport;
      successResponseFormat.message = "Airport updated successfully";
      res.status(StatusCodes.OK).json(successResponseFormat);
    } catch (error: any) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error.message);
    }
  }

}