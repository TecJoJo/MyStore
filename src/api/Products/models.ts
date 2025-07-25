import { ApiResponse } from "../common/models"

//Dtos start with underscore indicates they are defined by backend
export interface _GetProductsResponseDTO {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    category: string;
    stock: number;
}



export type GetAllProductsResponseDto = ApiResponse<_GetProductsResponseDTO[]>;