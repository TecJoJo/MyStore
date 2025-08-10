import { GetAllProductsResponseDto } from "../../../api/products/models"
import { IProduct } from "../../../sharedModels/product/product"
export const mapGetAllProductsResponseDtoToProducts = (
  responseDto: GetAllProductsResponseDto,
): IProduct[] => {
  return responseDto.data.map(productDto => ({
    id: productDto.id,
    name: productDto.name,
    description: productDto.description,
    price: productDto.price,
    imageUrl: productDto.imageUrl,
    category: productDto.category,
    stock: productDto.stock,
  }))
}
