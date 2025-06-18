import { useState } from "react"

interface Props {
  id?: string
  name: string
  description?: string
  price: number
  imageUrl: string
  category?: string
  stock?: number
}

function SingleProduct({
  id,
  name,
  description,
  price,
  imageUrl,
  category,
  stock,
}: Props) {
  const [isTextShown, setIsTextShown] = useState(false)

  return (
    <div
      className="w-1/4 relative flex items-center justify-center cursor-pointer overflow-hidden"
      onMouseEnter={() => {
        setIsTextShown(true)
      }}
      onMouseLeave={() => {
        setIsTextShown(false)
      }}
    >
      <div>
        <img src={imageUrl} alt={name} className="object-cover" />
        <div
          className={`w-full h-full absolute top-0 left-0 bg-white ${isTextShown ? "opacity-80" : "opacity-0"} z-10 transition-opacity duration-300`}
        ></div>
        <div
          className={`w-full h-full absolute top-0 left-0 font-mono font-semibold text-9xl text-zinc-900 flex flex-col items-center justify-center z-20 ${isTextShown ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}
        >
          <p>{name}</p>
          <p>${price}</p>
        </div>
      </div>
    </div>
  )
}

export default SingleProduct
