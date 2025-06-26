import { useState } from "react"
interface AddToCartButtonProps {
  onAddToCart: () => void
  text: string
}

function AddToCartButton({ onAddToCart, text }: AddToCartButtonProps) {
  return (
    <button
      className="w-fit bg-zinc-900 rounded-full hover:bg-zinc-800"
      onClick={onAddToCart}
      data-cy="add-to-cart-button"
    >
      <p className="text-white font-base font-mono text-base md:text-lg lg:text-xl px-4 lg:px-6 py-1 md:py-2 lg:py-3">
        {text}
      </p>
    </button>
  )
}

interface AdjustQuantityButtonGroupProps {}
function AdjustQuantityButtonGroup() {
  return (
    <div className="w-fit border-1 rounded-full hover:bg-zinc-800">
      <p className="text-white font-base font-mono text-base md:text-lg lg:text-xl px-4 lg:px-6 py-1 md:py-2 lg:py-3">
        {/*Use useState or Redux here for displaying the quantity??? */}
      </p>
    </div>
  )
}
export { AddToCartButton, AdjustQuantityButtonGroup }
