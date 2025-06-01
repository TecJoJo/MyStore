interface ShoppingItemProps {
  name: string
  price: number
  quantity: number
  color: string
  size: string
  discount?: number
  imageUrl: string
}

function ShoppingItem({
  name,
  color,
  imageUrl,
  price,
  quantity,
  size,
  discount,
}: ShoppingItemProps): React.JSX.Element {
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
        <p className="text-sm text-gray-600">Quantity: {quantity}</p>
        <p className="text-lg font-bold">
          Price: ${price.toFixed(2)}
          {discount ? ` (Discount: ${(price * discount).toFixed(2)})` : ""}
        </p>
      </div>
    </div>
  )
}

export default ShoppingItem
