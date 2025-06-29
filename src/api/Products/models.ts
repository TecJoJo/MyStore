import { ApiResponse } from "../common/models"

export interface ProductDto {
  id: string
  name: string
  description: string
  price: number
  imageUrl: string
  category: string
  stock: number
}

export type GetAllProductsResponseDto = ApiResponse<ProductDto[]>
