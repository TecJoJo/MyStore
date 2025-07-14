import { createSlice } from "@reduxjs/toolkit"
import { createAppAsyncThunk } from "../../app/withTypes"
import { getUserCartItems as getUserCartItemsApiRequest } from "../../api/cartItems/getUserCartItems"
import { initialState } from "./models/cartModels"
import { mapGetCartItemsDtoToICartItem } from "./utils/mapGetCartItemsDtoToICartItem"
import { cartReducers } from "./reducers/cartReducers"
export const getUserCartItems = createAppAsyncThunk(
  "getUserCartItems",
  async () => {
    const response = await getUserCartItemsApiRequest()
    const carItems = mapGetCartItemsDtoToICartItem(response)
    return carItems
  },
)

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
