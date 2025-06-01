import { useAppSelector, useAppDispatch } from "../../app/hooks"
import { toggleCart } from "../cart/cartSlice"
import { IoCloseOutline } from "react-icons/io5"
import ShoppingItem from "./components/ShoppingItem"

const tempItemList = [
  {
    id: 1,
    name: "Classic White T-Shirt",
    price: 29.99,
    discount: 0.15,
    color: "White",
    size: "M",
    quantity: 2,
    img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 2,
    name: "Denim Jeans",
    price: 59.99,
    discount: 0.1,
    color: "Blue",
    size: "32",
    quantity: 1,
    img: "https://vilapuuvilla.fi/cdn/shop/products/0520bad2-dc50-40ae-9f90-afce00862eff_14094341_4429742_001_preview.jpg?v=1701160840",
  },
  {
    id: 3,
    name: "Running Sneakers",
    price: 89.99,
    discount: 0.2,
    color: "Black",
    size: "10",
    quantity: 1,
    img: "https://pyxis.nymag.com/v1/imgs/a6d/fc0/4da4be21d1741718404660586a5b6a6f3e.jpg",
  },
  {
    id: 4,
    name: "Leather Wallet",
    price: 39.99,
    discount: 0.05,
    color: "Brown",
    size: "One Size",
    quantity: 1,
    img: "https://m.media-amazon.com/images/I/81WIcyHQ7oL._AC_UY1100_.jpg",
  },
  {
    id: 5,
    name: "Baseball Cap",
    price: 19.99,
    discount: 0,
    color: "Red",
    size: "Adjustable",
    quantity: 3,
    img: "https://store.moma.org/cdn/shop/files/3a2b0b12-bde3-4a63-bba2-b561dbd7de29_5fa67989-c4a0-4bea-a74b-fb25ed894895.jpg?v=1710971142",
  },
]

const shoppingItems = tempItemList.map(item => (
  <ShoppingItem
    key={item.id}
    color={item.color}
    imageUrl={item.img}
    name={item.name}
    quantity={item.quantity}
    price={item.price}
    size={item.size}
    discount={item.discount}
  />
))

function Cart() {
  const dispatch = useAppDispatch()
  const isCartOpen = useAppSelector(state => state.cart.isCartOpen)
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
