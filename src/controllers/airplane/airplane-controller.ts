import { Response } from "express";
import { AirplaneService } from "../../services/airplane/airplane-service";
import { CreateAirplaneRequest } from "../../types";
import { errorFormat, successResponseFormat } from "../../utils";
import { StatusCodes } from "http-status-codes"

export class AirplaneController {
  constructor(private readonly airplaneService: AirplaneService) { }
  public async createAirplane(req: CreateAirplaneRequest, res: Response) {
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

  public async getAirplane(req: any, res: Response) {
    try {
      const airplane = await this.airplaneService.getAirplane(parseInt(req?.params?.id));
      successResponseFormat.data = airplane!;
      successResponseFormat.message = 'Airplane fetched successfully';
      return res.status(StatusCodes?.OK).json(successResponseFormat);
    } catch (error: any) {
      errorFormat.message = error?.message ?? 'Something went wrong while getting airplane';
      return res.status(StatusCodes?.INTERNAL_SERVER_ERROR).json(errorFormat);
    }
  }


  public async getAllAirplanes(req: any, res: Response) {
    try {
      const airplanes = await this.airplaneService.getAllAirplanes();
      successResponseFormat.data = airplanes;
      successResponseFormat.message = 'Airplanes fetched successfully';
      return res.status(StatusCodes?.OK).json(successResponseFormat);
    } catch (error: any) {
      errorFormat.message = error?.message ?? 'Something went wrong while getting airplanes';
      return res.status(StatusCodes?.INTERNAL_SERVER_ERROR).json(errorFormat);
    }
  }


  public async updateAirplane(req: any, res: Response) {
    try {
      const airplane = await this.airplaneService.updateAirplane(parseInt(req?.params?.id), req?.body);
      successResponseFormat.data = airplane;
      successResponseFormat.message = 'Airplane updated successfully';
      return res.status(StatusCodes?.OK).json(successResponseFormat);
    } catch (error: any) {
      errorFormat.message = error?.message ?? 'Something went wrong while updating airplane';
      return res.status(StatusCodes?.INTERNAL_SERVER_ERROR).json(errorFormat);
    }
  }

  public async deleteAirplane(req: any, res: Response) {
    try {
      await this.airplaneService.deleteAirplane(parseInt(req?.params?.id));
      successResponseFormat.message = 'Airplane deleted successfully';
      return res.status(StatusCodes?.OK).json(successResponseFormat);
    }
    catch (error: any) {
      errorFormat.message = error?.message ?? 'Something went wrong while deleting airplane';
      return res.status(StatusCodes?.INTERNAL_SERVER_ERROR).json(errorFormat);
    }
  }
}