import { GetCartItemsDto } from "../../../api/cartItems/models"
import { ICartItem } from "../models/cartModels"

export function mapGetCartItemsDtoToICartItem(
  cartItemsDto: GetCartItemsDto,
): ICartItem[] {
  return cartItemsDto.data.map(cartItem => ({
    id: cartItem.id,
    productId: cartItem.productId,
    name: cartItem.name,
    price: cartItem.price,
    quantity: cartItem.quantity,
    imageUrl: cartItem.imageUrl,
    updateState: "idle",
  }))
}
