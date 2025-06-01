import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface ICartState {
  isCartOpen: boolean
}

const initialState: ICartState = {
  isCartOpen: true,
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleCart(state) {
      state.isCartOpen = !state.isCartOpen
    },
  },
})

export const { toggleCart } = cartSlice.actions
export default cartSlice.reducer
