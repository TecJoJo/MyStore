import React from "react"
import ProductList from "./components/ProductsList"
import ProductCreationSidebar from "./components/ProductCreationSidebar"

function ProductsManagement() {
  return (
    <div className="relative">
      <ProductList />
      <ProductCreationSidebar
        open={true} // Replace with actual state management
      />
    </div>
  )
}

export default ProductsManagement
