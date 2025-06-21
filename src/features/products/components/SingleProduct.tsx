import { Link } from "react-router-dom"
interface Props {
  id: string
  name: string
  description?: string
  price: number
  imageUrl: string
  category?: string
  stock?: number
}

function SingleProduct({ id, name, price, imageUrl }: Props) {
  return (
    <Link
      to={`/productDetail/${id}`}
      test-id="singleProduct-link-productDetail"
    >
      <div className="w-full h-full relative group ">
        <img
          src={imageUrl}
          alt={name}
          className=" w-full h-full object-cover p-4"
          test-id="singleProduct-image"
        />
        <div className="w-full h-full absolute top-0 left-0 bg-white opacity-0 group-hover:opacity-80 z-10 transition-opacity duration-300"></div>
        <div className="w-full h-full absolute top-0 left-0 font-mono font-semibold text-base text-zinc-900 flex flex-col items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p test-id="singleProduct-name">{name}</p>
          <p test-id="singleProduct-price">${price}</p>
        </div>
      </div>
    </Link>
  )
}

export default SingleProduct
