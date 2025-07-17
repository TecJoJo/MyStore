import { createSlice } from "@reduxjs/toolkit"
import { initialState } from "./models/cartModels"
import { cartReducers } from "./reducers/cartReducers"
import { getUserCartItems } from "./thunks/cartThunks"

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: cartReducers,
  extraReducers: builder => {
    builder.addCase(getUserCartItems.fulfilled, (state, action) => {
      state.cartItems = action.payload
    })
  },
})

export const {
  toggleCart,
  increaseCartItemQuantity,
  decreaseCartItemQuantity,
  deleteCartItem,
  addItemToCart,
  setCartItemUpdateState,
} = cartSlice.actions
export default cartSlice.reducer
