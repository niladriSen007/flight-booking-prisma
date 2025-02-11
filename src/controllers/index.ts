import { AirplaneController } from "./airplane/airplane-controller";
import { airplaneServices } from "../services";

const { airplaneService } = airplaneServices;
export const airplaneControllers = {
  airplaneController: new AirplaneController(airplaneService)
};