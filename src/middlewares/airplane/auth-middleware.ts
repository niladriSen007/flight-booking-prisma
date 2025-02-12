import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { CreateAirplaneRequest } from "../../types";
import { errorFormat, GlobalErrorResponse } from "../../utils";

export const validateAirplaneRequestValidation = (req: Request<{}, {}, CreateAirplaneRequest>, res: Response, next: Function) => {
  if (!req.body) {
    errorFormat.message = "Invalid request body";
    errorFormat.error.explanation = new GlobalErrorResponse("Invalid request body", StatusCodes?.BAD_REQUEST);
    return res.status(StatusCodes?.BAD_REQUEST).json(errorFormat);
  }

  if (!req.body.modelName) {
    errorFormat.message = "Model number is required";
    errorFormat.error.explanation = new GlobalErrorResponse("Model number is required", StatusCodes?.BAD_REQUEST);
    return res.status(StatusCodes?.BAD_REQUEST).json(errorFormat);
  }

  if (!req.body.capacity) {
    errorFormat.message = "Capacity is required";
    errorFormat.error.explanation = new GlobalErrorResponse("Capacity is required", StatusCodes?.BAD_REQUEST);
    return res.status(StatusCodes?.BAD_REQUEST).json(errorFormat);
  }
  next();
}