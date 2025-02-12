import { StatusCodes } from "http-status-codes";
import { CityRepository } from "../../repository/city/city-repository";
import { GlobalErrorResponse } from "../../utils";
import { CreateCityRequest } from "../../types";

export class CityService {
  constructor(private readonly cityRepository: CityRepository) { }

  public async createCity(city: CreateCityRequest) {
    try {
      return await this.cityRepository.createCity(city);
    } catch (error: any) {
      throw new GlobalErrorResponse(error?.message
        ?? 'Something went wrong while creating city'
        , StatusCodes?.INTERNAL_SERVER_ERROR);
    }
  }

  public async getAllCities() {
    try {
      return await this.cityRepository.getAllCities();
    } catch (error: any) {
      throw new GlobalErrorResponse(error?.message
        ?? 'Something went wrong while getting cities'
        , StatusCodes?.INTERNAL_SERVER_ERROR);

    }
  }

  public async getCityById(id: number) {
    try {
      return await this.cityRepository.getCityById(id);
    } catch (error: any) {
      throw new GlobalErrorResponse(error?.message ?? 'Something went wrong while getting city', StatusCodes?.INTERNAL_SERVER_ERROR);
    }
  }

  public async updateCity(id: number, city: any) {
    try {
      return await this.cityRepository.updateCity(id, city);
    } catch (error: any) {
      throw new GlobalErrorResponse(error?.message ?? 'Something went wrong while updating city', StatusCodes?.INTERNAL_SERVER_ERROR);

    }
  }

  public async deleteCity(id: number) {
    try {
      return await this.cityRepository.deleteCity(id);
    } catch (error: any) {
      if (error?.statusCode === StatusCodes?.NOT_FOUND) {
        throw new GlobalErrorResponse('City not found', StatusCodes?.NOT_FOUND);
      }
      throw new GlobalErrorResponse(error?.message ?? 'Something went wrong while deleting city', StatusCodes?.INTERNAL_SERVER_ERROR);
    }
  }
}