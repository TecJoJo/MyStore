import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { getAllProducts } from "./productsSlice"
import { useEffect } from "react"
import SingleProduct from "./components/SingleProduct"

function Products() {
  const dispatch = useAppDispatch()
  const allProducts = useAppSelector(state => state.products.products)

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    dispatch(getAllProducts())
  }, [dispatch])

  return (
    <div className="w-full my-4 md:my-8 md:w-10/12 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 justify-items-stretch">
      {allProducts.map(product => (
        <SingleProduct
          id={product.id}
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
