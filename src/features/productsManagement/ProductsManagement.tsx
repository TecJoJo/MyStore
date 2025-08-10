import ProductList from "./components/ProductsList"
import ProductCreationSidebar from "./components/ProductCreationSidebar"

function ProductsManagement() {
  return (
    <div className="relative">
      <ProductList />
      <ProductCreationSidebar />
    </div>
  )
}

export default ProductsManagement
