export const urls = {
  login: "https://localhost:7172/api/auth/login",
  register: "https://localhost:7172/api/auth/register",
  getAllProducts: "https://localhost:7172/api/products/allproducts",
}

export interface ApiResponse<T> {
  message: string
  success: boolean
  data: T
  errors: string[]
}
