import {
  ICartItem,
  IModifyCartItemQuantityThunkArgs,
} from "../models/cartModels"
import { AppDispatch, RootState } from "../../../app/store"
import {
  setCartItemUpdateState,
  addItemToCart as addItemToCartActionCreator,
  increaseCartItemQuantity,
} from "../cartSlice"
import { modifyCartItemQuantity as modifyCartItemQuantityRequest } from "../../../api/cartItems/modifyCartItemQuantity"
import { addCartItem as addCartItemApiRequest } from "../../../api/cartItems/addCartItem"
import { mapGetCartItemsDtoToICartItem } from "../utils/mapGetCartItemsDtoToICartItem"
import { getUserCartItems as getUserCartItemsApiRequest } from "../../../api/cartItems/getUserCartItems"
import { createAppAsyncThunk } from "../../../app/withTypes"

export const getUserCartItems = createAppAsyncThunk(
  "getUserCartItems",
  async () => {
    const response = await getUserCartItemsApiRequest()
    const cartItems = mapGetCartItemsDtoToICartItem(response)
    return cartItems
  },
)

export const addCartItem = (cartItem: ICartItem, quantity: number) => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    //check if the cartItem is inside the store
    const { cart } = getState()
    const foundCartItem = cart.cartItems.find(
      item => item.productId === cartItem.productId,
    )
    if (foundCartItem) {
      try {
        //set updateState to "pending"
        dispatch(
          setCartItemUpdateState({
            productId: cartItem.productId,
            updateState: "pending",
          }),
        )
        //call set quantity API
        const newQuantity = cartItem.quantity + quantity
        await modifyCartItemQuantityRequest(cartItem.id, newQuantity)
        dispatch(
          setCartItemUpdateState({
            productId: cartItem.productId,
            updateState: "succeeded",
          }),
        )
        //both decrease and increase will be handled inside the increaseCartItemQuantity action
        dispatch(
          increaseCartItemQuantity({
            productId: cartItem.productId,
            quantity,
          }),
        )
      } catch (error) {
        //set updateState to "failed"
        console.log(
          `Failed to update the cart item quantity, cartItem:`,
          error,
          cartItem,
        )

        dispatch(
          setCartItemUpdateState({
            productId: cartItem.productId,
            updateState: "failed",
          }),
        )
        //wait for 2 second set updateSate back to "idle"
        //WARNING: This may introduce problems as they are not cleaned up
        window.setTimeout(() => {
          dispatch(
            setCartItemUpdateState({
              productId: cartItem.productId,
              updateState: "idle",
            }),
          )
        }, 2000)
      }
    } else {
      try {
        //set updateState to "pending"
        dispatch(
          setCartItemUpdateState({
            productId: cartItem.productId,
            updateState: "pending",
          }),
        )
        //call set quantity API
        await addCartItemApiRequest({
          productId: cartItem.productId,
          quantity,
        })
        dispatch(
          setCartItemUpdateState({
            productId: cartItem.productId,
            updateState: "succeeded",
          }),
        )
        dispatch(addItemToCartActionCreator(cartItem))
        //we need to fetch the cart again to get the cart item id
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        dispatch(getUserCartItems())
      } catch (error) {
        //set updateState to "failed"
        console.log(`Failed to add item to cart, cartItem:`, error, cartItem)

        dispatch(
          setCartItemUpdateState({
            productId: cartItem.productId,
            updateState: "failed",
          }),
        )
        //wait for 2 second set updateSate back to "idle"
        //WARNING: This may introduce problems as they are not cleaned up
        window.setTimeout(() => {
          dispatch(
            setCartItemUpdateState({
              productId: cartItem.productId,
              updateState: "idle",
            }),
          )
        }, 2000)
      }
    }
  }
}

export const modifyCartItemQuantity = createAppAsyncThunk(
  "modifyCartItemQuantity",
  async (args: IModifyCartItemQuantityThunkArgs, { getState }) => {
    const state = getState()
    const quantity = state.cart.cartItems.find(
      item => item.id === args.cartItemId,
    )?.quantity
    if (!quantity)
      throw new Error(`Item ${args.cartItemId}' is not found inside the cart`)
    const quantityAfter = quantity + args.quantity
    await modifyCartItemQuantityRequest(args.cartItemId, quantityAfter)
    return args
  },
)
