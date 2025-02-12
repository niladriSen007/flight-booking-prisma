import { StatusCodes } from "http-status-codes";
import { AirplaneRepository } from "../../repository/airplane/airplane-repository";
import { CreateAirplaneRequest } from "../../types";
import { UpdateAirplaneRequest } from "../../types/airplane-types";
import { GlobalErrorResponse } from "../../utils";


export class AirplaneService {
  constructor(private readonly airplaneRepository: AirplaneRepository) { }

  async createAirplane(data: CreateAirplaneRequest) {
    try {
      return await this.airplaneRepository.createAirplane(data);
    } catch (error: any) {
      throw new GlobalErrorResponse(error?.message
        ?? 'Something went wrong while creating airplane',
        StatusCodes?.INTERNAL_SERVER_ERROR);
    }
  }

  async getAirplane(id: number) {
    try {
      return await this.airplaneRepository.getAirplane(id);
    } catch (error: any) {
      if (error?.statusCode === StatusCodes?.NOT_FOUND) {
        throw new GlobalErrorResponse('Airplane not found', StatusCodes?.NOT_FOUND);
      }
      throw new GlobalErrorResponse(error?.message
        ?? 'Something went wrong while getting airplane',
        StatusCodes?.INTERNAL_SERVER_ERROR);
    }
  }

  async getAllAirplanes() {
    try {
      return await this.airplaneRepository.getAllAirplanes();
    } catch (error: any) {
      throw new GlobalErrorResponse(error?.message
        ?? 'Something went wrong while getting airplanes'
        , StatusCodes?.INTERNAL_SERVER_ERROR);
    }
  }

  async updateAirplane(id: number, data: UpdateAirplaneRequest) {
    try {
      return await this.airplaneRepository.updateAirplane(id, data);
    } catch (error: any) {
      if (error?.statusCode === StatusCodes?.NOT_FOUND) {
        throw new GlobalErrorResponse('Airplane not found', StatusCodes?.NOT_FOUND);
      }
      throw new GlobalErrorResponse(error?.message ?? 'Something went wrong while updating airplane', StatusCodes?.INTERNAL_SERVER_ERROR);
    }
  }

  async deleteAirplane(id: number) {
    try {
      return await this.airplaneRepository.deleteAirplane(id);
    } catch (error: any) {
      if (error?.statusCode === StatusCodes?.NOT_FOUND) {
        throw new GlobalErrorResponse('Airplane not found', StatusCodes?.NOT_FOUND);
      }
      throw new GlobalErrorResponse(error?.message ?? 'Something went wrong while deleting airplane', StatusCodes?.INTERNAL_SERVER_ERROR);
    }
  }


}