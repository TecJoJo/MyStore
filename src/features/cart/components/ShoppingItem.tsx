import { FaSortUp, FaSortDown } from "react-icons/fa"
import { RiDeleteBin5Line } from "react-icons/ri"
import { useAppDispatch } from "../../../app/hooks"

import {
  increaseCartItemQuantity,
  decreaseCartItemQuantity,
  deleteCartItem,
} from "../cartSlice"
interface ShoppingItemProps {
  id: string
  name: string
  price: number
  quantity: number
  color: string
  size: string
  discount?: number
  imageUrl: string
}

function ShoppingItem({
  id,
  name,
  color,
  imageUrl,
  price,
  quantity,
  size,
  discount,
}: ShoppingItemProps): React.JSX.Element {
  const dispatch = useAppDispatch()

  return (
    <div className="mx-4 my-2 w-full flex">
      <img
        src={imageUrl}
        alt={name}
        className="w-1/4 h-24 object-cover rounded-md mr-4"
        data-cy="shoppingItem-image"
      />
      <div>
        <h2
          className="font-serif text-lg font-semibold"
          data-cy="shoppingItem-name"
        >
          {name}
        </h2>
        <p
          className="font-mono text-sm text-gray-600"
          data-cy="shoppingItem-color"
        >
          Color: {color}
        </p>
        <p
          className="font-mono text-sm text-gray-600"
          data-cy="shoppingItem-size"
        >
          Size: {size}
        </p>
        <div className="flex flex-row justify-between items-center">
          <p className="font-mono text-sm text-gray-600 flex items-center gap-2">
            <span data-cy="shoppingItem-quantity">Quantity: {quantity}</span>
            <span className="flex flex-col ml-1">
              <button
                className="hover:bg-zinc-200"
                onClick={() => dispatch(increaseCartItemQuantity(id))}
                data-cy="shoppingItem-quantity-increase"
              >
                <FaSortUp />
              </button>
              <button
                className="hover:bg-zinc-200"
                onClick={() => dispatch(decreaseCartItemQuantity(id))}
                data-cy="shoppingItem-quantity-decrease"
              >
                <FaSortDown />
              </button>
            </span>
          </p>
          <p
            className="mx-1 cursor-pointer hover:text-red-700"
            onClick={() => dispatch(deleteCartItem(id))}
            data-cy="shoppingItem-delete"
          >
            <RiDeleteBin5Line />
          </p>
        </div>

        <p
          className="text-md font-semibold font-monospace"
          data-cy="shoppingItem-price"
        >
          Price: €
          {discount
            ? (price * (1 - discount) * quantity).toFixed(2)
            : (price * quantity).toFixed(2)}
          {discount
            ? ` (Discount: ${(price * discount * quantity).toFixed(2)})`
            : ""}
        </p>
      </div>
    </div>
  )
}

export default ShoppingItem
