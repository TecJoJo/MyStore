import { useParams } from "react-router"
function ProductDetail() {
  console.log("ProductDetail rendered")
  const { productId } = useParams()
  return <div>Product {productId}</div>
}

export default ProductDetail
