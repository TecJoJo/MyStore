import { useAppSelector, useAppDispatch } from "../../app/hooks"
import { toggleCart } from "../cart/cartSlice"
import { IoCloseOutline } from "react-icons/io5"
import ShoppingItem from "./components/ShoppingItem"

function Cart() {
  const dispatch = useAppDispatch()
  const isCartOpen = useAppSelector(state => state.cart.isCartOpen)
  const cartItems = useAppSelector(state => state.cart.cartItems)

  const cartTotal: number = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  )

  //delivery price is 9.99€ for order under 29€ and 3.99€ for orders over 29€, over 50€ delivery is free
  let deliveryPrice = 9.99
  if (cartTotal >= 50) {
    deliveryPrice = 0
  } else if (cartTotal >= 29) {
    deliveryPrice = 3.99
  } else if (cartTotal < 29) {
    deliveryPrice = 9.99
  }

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

  const emptyCart = (
    <p
      className="w-full my-24 text-center font-semibold text-lg font-serif"
      data-cy="empty-cart-message"
    >
      Your cart is empty
    </p>
  )
  return (
    <div
      className={`w-full z-50 bg-zinc-50  absolute top-0 right-0 mx-auto ${isCartOpen ? "block" : "hidden"} md:w-1/4`}
      data-cy="cart-container"
    >
      <div className=" mx-4 mt-4 mb-8 flex justify-between align-middle">
        <p
          className=" font-bold font-serif text-xl my-auto uppercase"
          data-cy="cart-title"
        >
          Cart [ {cartItems.reduce((total, item) => total + item.quantity, 0)} ]
        </p>
        <button
          className="hover:bg-zinc-100"
          type="button"
          onClick={() => dispatch(toggleCart())}
          data-cy="cart-close-button"
        >
          <IoCloseOutline size="2rem" />
        </button>
      </div>
      {cartItems.length === 0 ? emptyCart : shoppingItems}
      <div className="text-md font-semibold font-serif flex justify-between items-center m-4">
        <p>Delivery: </p>
        <p
          className="text-base font-normal font-monospace"
          data-cy="cart-delivery-price"
        >
          {cartTotal ? deliveryPrice.toFixed(2) : "0.00"} €
        </p>
      </div>
      <div className="text-md font-semibold font-serif flex justify-between items-center m-4">
        <p>Total: </p>
        <p
          className="text-base font-normal font-monospace"
          data-cy="cart-total-price"
        >
          {cartTotal ? (cartTotal + deliveryPrice).toFixed(2) : "0.00"} €
        </p>
      </div>
      <div className="flex justify-center items-center m-8">
        <button
          className="w-10/12 bg-zinc-700 text-white py-2 px-4 rounded-full hover:bg-zinc-900"
          data-cy="cart-checkout-button"
        >
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
