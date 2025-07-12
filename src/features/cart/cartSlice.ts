import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { createAppAsyncThunk } from "../../app/withTypes"
import { getUserCartItems as getUserCartItemsApiRequest } from "../../api/cartItems/getUserCartItems"
import {
  ICartItem,
  initialState,
  AdjustCartItemQuantityPayload,
} from "./models/cartModels"
import { mapGetCartItemsDtoToICartItem } from "./utils/mapGetCartItemsDtoToICartItem"

export const getUserCartItems = createAppAsyncThunk(
  "getUserCartItems",
  async () => {
    const response = await getUserCartItemsApiRequest()
    const carItems = mapGetCartItemsDtoToICartItem(response)
    return carItems
  },
)

export const addCartItem = createAppAsyncThunk(
  "addCartItem",
  async (cartItem: ICartItem, { getState, dispatch }) => {
    const rootState = getState()
    if (
      rootState.cart.cartItems.find(
        item => item.productId === cartItem.productId,
      )
    ) {
    }
  },
)

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
        item => item.productId === action.payload.productId,
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
        item => item.productId === action.payload.productId,
      )
      if (cartItem && cartItem.quantity > 0) {
        cartItem.quantity -= action.payload.quantity
      }
    },
    deleteCartItem(state, action: PayloadAction<string>) {
      state.cartItems = state.cartItems.filter(
        item => item.productId !== action.payload,
      )
    },

    addItemToCart(state, action: PayloadAction<ICartItem>) {
      const cartItem = state.cartItems.find(
        item => item.productId === action.payload.productId,
      )
      if (cartItem) {
        cartItem.quantity += action.payload.quantity
      } else {
        state.cartItems.push(action.payload)
      }
    },
  },
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
} = cartSlice.actions
export default cartSlice.reducer
