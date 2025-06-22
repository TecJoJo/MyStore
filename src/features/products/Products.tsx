import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { getAllProducts } from "./productsSlice"
import { useEffect } from "react"
import SingleProduct from "./components/SingleProduct"

function Products() {
  const dispatch = useAppDispatch()
  const allProducts = useAppSelector(state => state.products.products)
  const userLoginState = useAppSelector(
    state => state.authentication.loginState,
  )
  const isUserLoggedIn = userLoginState === "succeeded"

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    dispatch(getAllProducts())
  }, [dispatch])

  return isUserLoggedIn ? (
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
  ) : (
    <div>
      <p className="my-8 md:my-16 w-full text-center font-semibold text-lg font-serif">
        Please log in to view products
      </p>
      <p className="text-orange-700 my-8 md:my-16 w-full text-center font-base text-md font-mono">
        I know this is not making any sense, but this is just a temporary branch
        for my E2E test Demo!!!
      </p>
    </div>
  )
}

export default Products
