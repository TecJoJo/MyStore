import { useAppSelector, useAppDispatch } from "../../app/hooks"
import { toggleCart } from "../cart/cartSlice"
import { IoCloseOutline } from "react-icons/io5"
import ShoppingItem from "./components/ShoppingItem"

function Cart() {
  const dispatch = useAppDispatch()

  const isCartOpen = useAppSelector(state => state.cart.isCartOpen)
  const cartItems = useAppSelector(state => state.cart.cartItems)

  const shoppingItems = cartItems.map(item => (
    <ShoppingItem
      key={item.id}
      id={item.id}
      color={item.color}
      imageUrl={item.imageUrl}
      name={item.name}
      quantity={item.quantity}
      price={item.price}
      size={item.size}
      discount={item.discount}
    />
  ))
  return (
    <div
      className={`w-full bg-zinc-50  absolute top-0 right-0 mx-auto ${isCartOpen ? "block" : "hidden"} md:w-1/4`}
    >
      <div className=" my-2 flex justify-between align-middle">
        <p className="size-8 my-auto">Cart</p>
        <button type="button" onClick={() => dispatch(toggleCart())}>
          <IoCloseOutline size="2rem" />
        </button>
      </div>
      {shoppingItems}
    </div>
  )
}

export default Cart
