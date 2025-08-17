const API_BASE_URL = import.meta.env.VITE_API_URL

export const urls = {
  login: `${API_BASE_URL}/api/auth/login`,
  register: `${API_BASE_URL}/api/auth/register`,
  getAllProducts: `${API_BASE_URL}/api/products`,
  getCartItems: `${API_BASE_URL}/api/cart`,
  addCartItem: `${API_BASE_URL}/api/cart/cartitem`,
  modifyCartItemQuantity: `${API_BASE_URL}/api/cart/cartitem`,
  deleteCartItem: `${API_BASE_URL}/api/cart/cartitem`,
}

export interface ApiResponse<T> {
  message: string
  success: boolean
  data: T
  errors: string[]
}
