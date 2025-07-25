import { RootState } from "../../../app/store"

export function getCartItemByProductId(state: RootState, productId: string) {
  return state.cart.cartItems.find(item => item.productId === productId)
}
