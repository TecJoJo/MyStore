import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { getAllProducts } from "./productsSlice"
import { useEffect } from "react"
import SingleProduct from "./components/SingleProduct"

function Products() {
  const dispatch = useAppDispatch()
  const allProducts = useAppSelector(state => state.products.products)
  console.log("allProducts", allProducts)

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    dispatch(getAllProducts())
  }, [dispatch])

  return (
    <div className="flex flex-wrap gap-4 align-center">
      {allProducts.map(product => (
        <SingleProduct
          key={product.id}
          name={product.name}
          price={product.price}
          imageUrl={product.imageUrl}
        />
      ))}
    </div>
  )
}

export default Products
