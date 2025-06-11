import { useAppSelector, useAppDispatch } from "../../app/hooks"
import { toggleCart } from "../cart/cartSlice"
import { IoCloseOutline } from "react-icons/io5"
import { GiShoppingCart } from "react-icons/gi"
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
      <div className=" mx-4 mt-4 mb-8 flex justify-between align-middle">
        <p className=" font-bold font-serif text-xl my-auto uppercase">
          Cart [ {cartItems.reduce((total, item) => total + item.quantity, 0)} ]
        </p>
        <button
          className="hover:bg-zinc-100"
          type="button"
          onClick={() => dispatch(toggleCart())}
        >
          <IoCloseOutline size="2rem" />
        </button>
      </div>
      {shoppingItems}
      <div className="text-md font-semibold font-serif flex justify-between items-center m-4">
        <p>Delivery: </p>
        <p className="text-base font-normal font-monospace">
          {cartItems
            .reduce((total, item) => total + item.price * item.quantity, 0)
            .toFixed(2)}{" "}
          €
        </p>
      </div>
      <div className="text-md font-semibold font-serif flex justify-between items-center m-4">
        <p>Total: </p>
        <p className="text-base font-normal font-monospace">
          {cartItems
            .reduce((total, item) => total + item.price * item.quantity, 0)
            .toFixed(2)}{" "}
          €
        </p>
      </div>
      <div className="flex justify-center items-center m-8">
        <button className="w-10/12 bg-zinc-700 text-white py-2 px-4 rounded-full hover:bg-zinc-900">
          <p
            className="text-lg font-semibold font-monospace "
            //TODO: Checkout should checkout, and cart toggling should be a side effect
            //Refactor this later when the checkout feature is implemented
            onClick={() => dispatch(toggleCart())}
          >
            Check out
          </p>
        </button>
      </div>
    </div>
  )
}

export default Cart
