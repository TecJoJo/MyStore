import axios from "axios"
import { GetAllProductsResponseDto } from "./models";
import { urls } from "../common/models";

export const getAllProductsApiRequest = async (): Promise<GetAllProductsResponseDto> => {
    const response = await axios.get<GetAllProductsResponseDto>(urls.getAllProducts);
    return response.data;
};
