import { Request } from "express"

export interface CreateAirportTypes {
  name: string
  code: string
  address: string
  cityId: number
}

export interface UpdateAirportTypes {
  name?: string
  code?: string
  address?: string
  cityId?: number
}

export interface CreateAirportRequest extends Request {
  body: CreateAirportTypes
}

export interface UpdateAirportRequest extends Request {
  body: UpdateAirportTypes
}