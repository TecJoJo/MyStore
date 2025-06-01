import { FaSortUp, FaSortDown } from "react-icons/fa"
import { useAppDispatch } from "../../../app/hooks"
import {
  increaseCartItemQuantity,
  decreaseCartItemQuantity,
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
    <div className="mx-1 my-2 w-full flex">
      <img
        src={imageUrl}
        alt={name}
        className="w-1/4 h-24 object-cover rounded-md"
      />
      <div>
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="text-sm text-gray-600">Color: {color}</p>
        <p className="text-sm text-gray-600">Size: {size}</p>
        <p className="text-sm text-gray-600 flex items-center gap-2">
          <span>Quantity: {quantity}</span>
          <span className="flex flex-col ml-1">
            <button onClick={() => dispatch(increaseCartItemQuantity(id))}>
              <FaSortUp />
            </button>
            <button onClick={() => dispatch(decreaseCartItemQuantity(id))}>
              <FaSortDown />
            </button>
          </span>
        </p>
        <p className="text-lg font-bold">
          Price: $
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
