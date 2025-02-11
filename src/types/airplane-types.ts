import { Request } from "express";

export interface CreateAirplaneTypes {
  modelName: string;
  capacity: number;
}

export interface CreateAirplaneRequest extends Request {
  modelName: string;
  capacity: number;
}

export interface UpdateAirplaneRequest extends Request {
  modelName?: string;
  capacity?: number
}