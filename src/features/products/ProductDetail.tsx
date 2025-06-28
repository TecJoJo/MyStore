import { useParams } from "react-router"
import useEmblaCarousel from "embla-carousel-react"
import "./emblaCarousel.css"
import { selectRightProduct } from "./productsSlice"
import { useAppSelector, useAppDispatch } from "../../app/hooks"
import { useState } from "react"
import { addItemToCart, ICartItem, toggleCart } from "../cart/cartSlice"

import {
  AddToCartButton,
  AdjustQuantityButtonGroup,
} from "../../shared/widgets/Buttons"
const dummyImgUrls = [
  "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1622470953794-aa9c70b0fb9d?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1571945153237-4929e783af4a?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
]

function ProductDetail() {
  const [emblaRef] = useEmblaCarousel()
  const { productId } = useParams()
  const product = useAppSelector(state =>
    productId ? selectRightProduct(state, productId) : undefined,
  )
  const [quantity, setQuantity] = useState(1)
  const dispatch = useAppDispatch()

  //TODO: the Certain kind of domain DTO should be
  // used to substitute the Product interface inside the
  // ProductsSlice and ICartItem interface inside the cartSlice

  //we do the mapping here, temporarily
  const cartItemPayload: ICartItem = {
    color: "black",
    id: product?.id ?? "",
    imageUrl: product?.imageUrl ?? "",
    name: product?.name ?? "",
    price: product?.price ?? 0,
    quantity,
    size: "M",
    discount: 0,
  }

  //TODO: Provide more imgs for one product
  // For now, we are using dummy images along with product's own image

  const isProductFound = !!product
  const carouselImages = [product?.imageUrl, ...dummyImgUrls].filter(
    (imgUrl): imgUrl is string => !!imgUrl,
  )

  const noProductFound = (
    <div>
      <p
        className="my-24 font-bold text-lg font-serif"
        data-cy="no-product-found-message"
      >
        Oops! Something is wrong, the product you are looking for is not
        found...
      </p>
    </div>
  )

  return (
    <div className="py-4 md:py-16 w-full md:w-10/12 mx-auto flex flex-col md:flex-row justify-around items-center md:items-start ">
      {!isProductFound ? (
        noProductFound
      ) : (
        <>
          {/* Start of Carousel for product images */}
          <div
            className="embla w-full md:w-1/2"
            ref={emblaRef}
            data-cy="productDetail-carousel"
          >
            <div
              className="embla__container w-full"
              data-cy="productDetail-carousel-container"
            >
              {carouselImages.map(imgUrl => {
                return (
                  <div
                    className="embla__slide w-full"
                    data-cy="productDetail-carousel-slide"
                  >
                    <img src={imgUrl} className="object-cover w-full" />
                  </div>
                )
              })}
            </div>
          </div>
          {/* End of Carousel for product images */}
          <div className="mx-4 md:mx-8 flex  flex-col items-center md:items-start">
            <h1
              className="text-xl md:text-2xl font-bold mb-4"
              data-cy="productDetail-name"
            >
              {product.name}
            </h1>
            <p
              className="text-lg md:text-xl mb-4"
              data-cy="productDetail-description"
            >
              {product.description}
            </p>
            <p
              className="text-lg md:text-xl font-semibold mb-4"
              data-cy="productDetail-price"
            >
              Price: ${product.price.toFixed(2)}
            </p>
            <p
              className="text-lg md:text-xl mb-4"
              data-cy="productDetail-category"
            >
              Category: {product.category}
            </p>
            <p
              className="text-lg md:text-xl mb-4"
              data-cy="productDetail-stock"
            >
              Stock: {product.stock} items available
            </p>
            <AddToCartButton
              text="Add to cart"
              onAddToCart={() => {
                dispatch(addItemToCart(cartItemPayload))
                setQuantity(1) // Reset quantity after adding to cart
                dispatch(toggleCart()) // Open cart after adding item
              }}
            />
            <AdjustQuantityButtonGroup
              quantity={quantity}
              onDecrease={() => {
                setQuantity(value => value - 1)
              }}
              onIncrease={() => {
                setQuantity(value => value + 1)
              }}
            />
          </div>
        </>
      )}
    </div>
  )
}

export default ProductDetail
