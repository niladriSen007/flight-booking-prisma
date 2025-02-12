import { StatusCodes } from "http-status-codes";
import { CityService } from "../../services/city/city-service";
import { errorFormat, successResponseFormat } from "../../utils";
import { CreateCityRequest, UpdateCityRequest } from "../../types";
import { Request, Response } from "express";

export class CityController {
  constructor(private readonly cityService: CityService) { }

  public async createCity(req: CreateCityRequest, res: Response) {
    try {
      const city = await this.cityService.createCity(req.body);
      successResponseFormat.data = city;
      successResponseFormat.message = 'City created successfully';
      res.status(StatusCodes?.CREATED).send(successResponseFormat);
    } catch (error: any) {
      errorFormat.message = error?.message ?? 'Something went wrong while creating city';
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(errorFormat);
    }
  }

  public async getAllCities(req: Request, res: Response) {
    try {
      const cities = await this.cityService.getAllCities();
      successResponseFormat.data = cities;
      successResponseFormat.message = 'Cities fetched successfully';
      res.status(StatusCodes.OK).send(successResponseFormat);
    } catch (error: any) {
      errorFormat.message = error?.message ?? 'Something went wrong while getting cities';
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(errorFormat);
    }
  }

  public async getCityById(req: Request, res: Response) {
    try {
      const city = await this.cityService.getCityById(parseInt(req.params.id));
      successResponseFormat.data = city!;
      successResponseFormat.message = 'City fetched successfully';
      res.status(StatusCodes.OK).send(successResponseFormat);
    } catch (error: any) {
      errorFormat.message = error?.message ?? 'Something went wrong while getting city';
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(errorFormat);
    }
  }

  public async updateCity(req: UpdateCityRequest, res: Response) {
    try {
      const city = await this.cityService.updateCity(parseInt(req.params.id), req.body);
      successResponseFormat.data = city;
      successResponseFormat.message = 'City updated successfully';
      res.status(StatusCodes?.OK).send(successResponseFormat);
    } catch (error: any) {
      errorFormat.message = error?.message ?? 'Something went wrong while updating city';
      res.status(StatusCodes?.INTERNAL_SERVER_ERROR).send(errorFormat);
    }
  }

  public async deleteCity(req: Request, res: Response) {
    try {
      await this.cityService.deleteCity(parseInt(req.params.id));
      successResponseFormat.message = 'City deleted successfully';
      res.status(StatusCodes?.OK).send(successResponseFormat);
    } catch (error: any) {
      errorFormat.message = error?.message ?? 'Something went wrong while deleting city';
      res.status(StatusCodes?.INTERNAL_SERVER_ERROR).send(errorFormat);
    }
  }
}