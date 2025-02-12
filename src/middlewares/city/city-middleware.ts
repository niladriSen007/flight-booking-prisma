import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { CreateCityRequest } from "../../types";
import { errorFormat, GlobalErrorResponse } from "../../utils";

export const validateCityRequestValidation = (req: Request<{}, {}, CreateCityRequest>, res: Response, next: Function) => {
  if (!req.body) {
    errorFormat.message = "Invalid request body";
    errorFormat.error.explanation = new GlobalErrorResponse("Invalid request body", StatusCodes?.BAD_REQUEST);
    return res.status(StatusCodes?.BAD_REQUEST).json(errorFormat);
  }

  if (!req.body.name) {
    errorFormat.message = "City name is required";
    errorFormat.error.explanation = new GlobalErrorResponse("City name is required", StatusCodes?.BAD_REQUEST);
    return res.status(StatusCodes?.BAD_REQUEST).json(errorFormat);
  }

  next();
}