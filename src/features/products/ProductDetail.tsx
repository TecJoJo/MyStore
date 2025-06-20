import { useParams } from "react-router"
import useEmblaCarousel from "embla-carousel-react"
import "./emblaCarousel.css"

const dummyImgUrls = [
  "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1622470953794-aa9c70b0fb9d?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1571945153237-4929e783af4a?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
]

function ProductDetail() {
  const [emblaRef] = useEmblaCarousel()

  console.log("ProductDetail rendered")
  const { productId } = useParams()

  return (
    <div className="w-10/12 mx-auto flex flex-col justify-around items-start">
      <div>Product {productId}</div>
      <div className="embla w-1/4" ref={emblaRef}>
        <div className="embla__container w-full bg-amber-400">
          {dummyImgUrls.map(imgUrl => {
            return (
              <div className="embla__slide w-full">
                <img src={imgUrl} className="object-cover w-full" />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
