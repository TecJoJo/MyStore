import { FaSortUp, FaSortDown } from "react-icons/fa"
import { RiDeleteBin5Line } from "react-icons/ri"
import { useAppDispatch } from "../../../app/hooks"

import { deleteCartItem } from "../cartSlice"
import { modifyCartItemQuantity } from "../thunks/cartThunks"
interface ShoppingItemProps {
  cartItemId: string
  productId: string
  name: string
  price: number
  quantity: number
  imageUrl: string
}

function ShoppingItem({
  cartItemId,
  productId,
  name,
  imageUrl,
  price,
  quantity,
}: ShoppingItemProps): React.JSX.Element {
  const dispatch = useAppDispatch()

  return (
    <div className="mx-4 my-2 w-full flex" data-cy="shoppingItem-container">
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

        <div className="flex flex-row justify-between items-center">
          <p className="font-mono text-sm text-gray-600 flex items-center gap-2">
            <span data-cy="shoppingItem-quantity">Quantity: {quantity}</span>
            <span className="flex flex-col ml-1">
              <button
                className="hover:bg-zinc-200"
                onClick={() =>
                  dispatch(modifyCartItemQuantity({ cartItemId, quantity: 1 }))
                }
                data-cy="shoppingItem-quantity-increase"
              >
                <FaSortUp />
              </button>
              <button
                className="hover:bg-zinc-200"
                onClick={() =>
                  dispatch(modifyCartItemQuantity({ cartItemId, quantity: -1 }))
                }
                data-cy="shoppingItem-quantity-decrease"
              >
                <FaSortDown />
              </button>
            </span>
          </p>
          <p
            className="mx-1 cursor-pointer hover:text-red-700"
            onClick={() => dispatch(deleteCartItem(productId))}
            data-cy="shoppingItem-delete"
          >
            <RiDeleteBin5Line />
          </p>
        </div>

        <p
          className="text-md font-semibold font-monospace"
          data-cy="shoppingItem-price"
        >
          Price: €{(price * quantity).toFixed(2)}
        </p>
      </div>
    </div>
  )
}

export default ShoppingItem
