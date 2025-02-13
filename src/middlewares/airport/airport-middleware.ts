import { NextFunction, Request, Response } from "express";

export const validateAirportRequestValidation = (req: Request, res: Response, next: NextFunction) => {
  if (!req.body.name) {
    return res.status(400).json({
      success: false,
      message: "Name is required",
      err: "Bad request",
      data: {}
    })
  }
  if (!req.body.address) {
    return res.status(400).json({
      success: false,
      message: "Address is required",
      err: "Bad request",
      data: {}
    })
  }

  if (!req.body.cityId) {
    return res.status(400).json({
      success: false,
      message: "City is required",
      err: "Bad request",
      data: {}
    })
  }

  if (!req.body.code) {
    return res.status(400).json({
      success: false,
      message: "Airport code is required",
      err: "Bad request",
      data: {}
    })
  }
  next();
}