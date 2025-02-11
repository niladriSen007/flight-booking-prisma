import { Response } from "express";
import { AirplaneService } from "../../services/airplane/airplane-service";
import { CreateAirplaneRequest } from "../../types";
import { errorFormat, successResponseFormat } from "../../utils";
import { StatusCodes } from "http-status-codes"

export class AirplaneController {
  constructor(private readonly airplaneService: AirplaneService) { }
  public async createAirplaneA(req: CreateAirplaneRequest, res: Response) {
    try {
      const airplane = await this.airplaneService.createAirplane(req?.body);
      successResponseFormat.data = airplane;
      successResponseFormat.message = 'Airplane created successfully';
      return res.status(StatusCodes?.CREATED).json(successResponseFormat);
    } catch (error: any) {
      errorFormat.message = error?.message ?? 'Something went wrong while creating airplane';
      return res.status(StatusCodes?.INTERNAL_SERVER_ERROR).json(errorFormat);
    }
  }
}