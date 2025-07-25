import { FaPlus } from "react-icons/fa"
import { FaMinus } from "react-icons/fa"

interface AddToCartButtonProps {
  onAddToCart: () => void
  text: string
  style?: React.CSSProperties
  isLoading?: boolean
}

function AddToCartButton({
  onAddToCart,
  text,
  style,
  isLoading = false,
}: AddToCartButtonProps) {
  return (
    <button
      className={
        "relative w-5/6 bg-zinc-900 rounded-full hover:bg-zinc-800 my-2 md:my-4 flex items-center justify-center"
      }
      onClick={onAddToCart}
      data-cy="add-to-cart-button"
      style={style}
      disabled={isLoading}
    >
      {isLoading && (
        <span
          className="absolute inset-0 flex items-center justify-center"
          aria-label="Loading"
        >
          <span className="animate-spin rounded-full h-8 w-8 border-4 border-t-zinc-400 border-zinc-700"></span>
        </span>
      )}
      <p
        className={`text-white font-base font-mono text-base md:text-lg lg:text-xl px-4 lg:px-6 py-1 md:py-2 ${isLoading ? "opacity-50" : ""}`}
      >
        {text}
      </p>
    </button>
  )
}

interface AdjustQuantityButtonGroupProps {
  onIncrease: () => void
  onDecrease: () => void
  quantity: number
}
function AdjustQuantityButtonGroup({
  onDecrease,
  onIncrease,
  quantity,
}: AdjustQuantityButtonGroupProps) {
  return (
    <div className="w-5/6 border-1 rounded-full ">
      <div className=" md:text-lg lg:text-xl px-4 lg:px-6 py-1 md:py-2 flex justify-between items-center">
        <FaPlus className="hover:scale-125" onClick={onIncrease} />
        <p>{quantity}</p>
        <FaMinus className="hover:scale-125" onClick={onDecrease} />
      </div>
    </div>
  )
}
export { AddToCartButton, AdjustQuantityButtonGroup }
