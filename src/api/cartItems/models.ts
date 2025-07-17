import { ApiResponse } from "../common/models";

//Dtos start with underscore indicates they are defined by backend

export interface _CartItemDto {
    id: string;
    productId: string;
    name: string;
    price: number;
    quantity: number;
    imageUrl: string;
}

export interface _AddCartItemDto {
    userId?: string
    productId: string;
    quantity: number;
}



export type GetCartItemsDto = ApiResponse<_CartItemDto[]>
