import { ResponseModel } from "../responseModel";
import { Color } from "./colors";

export interface ColorResponseModel extends ResponseModel{
    data: Color[];
}