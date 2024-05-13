import { ResponseModel } from "../responseModel";
import { Customer } from "./customers";


export interface CustomerResponseModel extends ResponseModel{
    data : Customer[]
}