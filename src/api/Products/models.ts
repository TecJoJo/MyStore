import { ApiResponse } from "../common/models"

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