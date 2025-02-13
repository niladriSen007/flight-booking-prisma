import { Request } from "express";

export interface CreateCityRequest extends Request {
  body : CreateCityTypes;
}
export interface UpdateCityRequest extends Request {
  name: string;
}

export interface CreateCityTypes{
  name: string;
}