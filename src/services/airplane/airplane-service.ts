import { AirplaneRepository } from "../../repository/airplane-repository";


export class AirplaneService{
  constructor(private readonly airplaneRepository: AirplaneRepository){}

  async createAirplane(data: any){
    try {
      return await this.airplaneRepository.createAirplane(data);
    } catch (error:any) {
      throw new Error(error?.message ?? 'Something went wrong while creating airplane');
    }
  }
}