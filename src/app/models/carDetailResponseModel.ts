import { CarDetail } from "./car-detail/car-detail";
import { ResponseModel } from "./responseModel";

export interface CarDetailResponseModel extends ResponseModel {
    data: CarDetail;
}
