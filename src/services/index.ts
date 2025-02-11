import { AirplaneService } from "./airplane/airplane-service"
import { airplaneRepositories } from "../repository"

const { airplaneRepository } = airplaneRepositories;
export const airplaneServices = {
  airplaneService: new AirplaneService(airplaneRepository)
};