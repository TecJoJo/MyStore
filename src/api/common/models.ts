export const urls = {
  login: "http://localhost:5146/api/auth/login",
  register: "http://localhost:5146/api/auth/register",
  getAllProducts: "http://localhost:5146/api/products/allproducts",
}

export interface ApiResponse<T> {
  message: string
  success: boolean
  data: T
  errors: string[]
}
