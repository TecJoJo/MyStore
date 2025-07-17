import { GetAllProductsResponseDto } from "../../../api/products/models";
import { Product } from "../productsSlice"
export const mapGetAllProductsResponseDtoToProducts = (responseDto: GetAllProductsResponseDto): Product[] => {
    return responseDto.data.map(productDto => ({
        id: productDto.id,
        name: productDto.name,
        description: productDto.description,
        price: productDto.price,
        imageUrl: productDto.imageUrl,
        category: productDto.category,
        stock: productDto.stock
    }));
};