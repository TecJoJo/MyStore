import { PayloadAction } from "@reduxjs/toolkit"
import {
  ICartState,
  AdjustCartItemQuantityPayload,
  ICartItem,
  ISetCartItemUpdateStatePayload,
} from "../models/cartModels"
export const cartReducers = {
  toggleCart(state: ICartState) {
    state.isCartOpen = !state.isCartOpen
  },
  increaseCartItemQuantity(
    state: ICartState,
    action: PayloadAction<AdjustCartItemQuantityPayload>,
  ) {
    //TODO: performance issue may occur because of this usage
    //See this: https://redux.js.org/tutorials/essentials/part-6-performance-normalization
    const cartItem = state.cartItems.find(
      item => item.productId === action.payload.productId,
    )
    if (cartItem) {
      cartItem.quantity += action.payload.quantity
    }
  },
  decreaseCartItemQuantity(
    state: ICartState,
    action: PayloadAction<AdjustCartItemQuantityPayload>,
  ) {
    //TODO: performance issue may occur because of this usage
    //See this: https://redux.js.org/tutorials/essentials/part-6-performance-normalization
    const cartItem = state.cartItems.find(
      item => item.productId === action.payload.productId,
    )
    if (cartItem && cartItem.quantity > 0) {
      cartItem.quantity -= action.payload.quantity
    }
  },
  deleteCartItem(state: ICartState, action: PayloadAction<string>) {
    state.cartItems = state.cartItems.filter(
      item => item.productId !== action.payload,
    )
  },

  addItemToCart(state: ICartState, action: PayloadAction<ICartItem>) {
    const cartItem = state.cartItems.find(
      item => item.productId === action.payload.productId,
    )
    if (cartItem) {
      cartItem.quantity += action.payload.quantity
    } else {
      state.cartItems.push(action.payload)
    }
  },

  setCartItemUpdateState(
    state: ICartState,
    action: PayloadAction<ISetCartItemUpdateStatePayload>,
  ) {
    //Find teh cartItem via productId rather than cartitemId(id) is by design
    //Since we have no idea what itemId it is as we add product from productDetail page
    const cartItem = state.cartItems.find(
      item => item.productId === action.payload.productId,
    )
    if (cartItem) {
      cartItem.updateState = action.payload.updateState
    }
  },
}
