import { useParams } from "react-router"
import useEmblaCarousel from "embla-carousel-react"
import "./emblaCarousel.css"
import { selectRightProduct } from "./productsSlice"
import { useAppSelector } from "../../app/hooks"
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
    <div className="py-4 md:py-16 w-full md:w-10/12 mx-auto flex flex-col md:flex-row justify-around items-start">
      {!isProductFound ? (
        noProductFound
      ) : (
        <>
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
          <div className="mx-4 md:mx-8 flex flex-col ">
            <h1
              className="text-2xl md:text-4xl font-bold mb-4"
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
          </div>
        </>
      )}
    </div>
  )
}

export default ProductDetail
