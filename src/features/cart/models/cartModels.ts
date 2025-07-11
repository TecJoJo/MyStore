export interface ICartState {
  isCartOpen: boolean
  cartItems: ICartItem[]
}

export const initialState: ICartState = {
  isCartOpen: false,
  //TODO: fetchCartItem thunk is needed when open cart, cart items should be fetched from backend
  cartItems: [],
}

export interface ICartItem {
  id: string
  productId: string
  name: string
  price: number
  quantity: number
  imageUrl: string
}

export interface AdjustCartItemQuantityPayload {
  productId: string
  quantity: number
}
