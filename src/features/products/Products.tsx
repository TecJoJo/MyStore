import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { getAllProducts } from "./productsSlice"
import { useEffect } from "react"

function Products() {
  const dispatch = useAppDispatch()
  const allProducts = useAppSelector(state => state.products.products)
  console.log("allProducts", allProducts)

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    dispatch(getAllProducts())
  }, [dispatch])

  return <div>products</div>
}

export default Products
