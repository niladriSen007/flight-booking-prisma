import { Request } from "express";

export interface CreateCityRequest extends Request {
  name: string;
}
export interface UpdateCityRequest extends Request {
  name: string;
}

export interface CreateCityTypes{
  name: string;
}