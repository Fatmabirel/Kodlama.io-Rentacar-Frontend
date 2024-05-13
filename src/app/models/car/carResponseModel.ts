import { ResponseModel } from "../responseModel";
import { Car } from "./cars";

export interface CarResponseModel extends ResponseModel{
    data: Car[];
}