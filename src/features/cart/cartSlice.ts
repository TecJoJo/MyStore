import { createSlice } from "@reduxjs/toolkit"
import { initialState } from "./models/cartModels"
import { cartReducers } from "./reducers/cartReducers"
import { getUserCartItems, modifyCartItemQuantity } from "./thunks/cartThunks"

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: cartReducers,
  extraReducers: builder => {
    builder
      .addCase(getUserCartItems.fulfilled, (state, action) => {
        state.cartItems = action.payload
      })
      .addCase(modifyCartItemQuantity.fulfilled, (state, action) => {
        const foundItem = state.cartItems.find(
          item => item.id === action.payload.cartItemId,
        )
        if (foundItem) {
          //update the quantity in UI accordingly
          foundItem.quantity += action.payload.quantity
        } else {
          //there is sone sync problem between frontend and backend
          console.log(
            `Item ${action.payload.cartItemId}'s quantity get incremented by ${action.payload.quantity.toString()} but we failed to find the item in UI. This indicated a BUG`,
          )
        }
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
