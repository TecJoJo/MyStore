import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { tempItemList } from "./utils/constants"
interface ICartState {
  isCartOpen: boolean
  cartItems: ICartItem[]
}

interface ICartItem {
  id: string
  name: string
  price: number
  quantity: number
  color: string
  size: string
  discount?: number
  imageUrl: string
}

const initialState: ICartState = {
  isCartOpen: false,
  //TODO: fetchCartItem thunk is needed when open cart, cart items should be fetched from backend
  cartItems: tempItemList,
}

interface AdjustCartItemQuantityPayload {
  id: string
  quantity: number
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleCart(state) {
      state.isCartOpen = !state.isCartOpen
    },
    increaseCartItemQuantity(
      state,
      action: PayloadAction<AdjustCartItemQuantityPayload>,
    ) {
      //TODO: performance issue may occur because of this usage
      //See this: https://redux.js.org/tutorials/essentials/part-6-performance-normalization
      const cartItem = state.cartItems.find(
        item => item.id === action.payload.id,
      )
      if (cartItem) {
        cartItem.quantity += action.payload.quantity
      }
    },
    decreaseCartItemQuantity(
      state,
      action: PayloadAction<AdjustCartItemQuantityPayload>,
    ) {
      //TODO: performance issue may occur because of this usage
      //See this: https://redux.js.org/tutorials/essentials/part-6-performance-normalization
      const cartItem = state.cartItems.find(
        item => item.id === action.payload.id,
      )
      if (cartItem && cartItem.quantity > 0) {
        cartItem.quantity -= action.payload.quantity
      }
    },
    deleteCartItem(state, action: PayloadAction<string>) {
      state.cartItems = state.cartItems.filter(
        item => item.id !== action.payload,
      )
    },
  },
})

export const {
  toggleCart,
  increaseCartItemQuantity,
  decreaseCartItemQuantity,
  deleteCartItem,
} = cartSlice.actions
export default cartSlice.reducer
