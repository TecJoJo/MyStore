import axios from "axios"
import { urls } from "../common/models"
import { _AddCartItemDto } from "./models"
import { ApiResponse } from "../common/models"
export const addCartItem = async (
  cartItem: _AddCartItemDto,
): Promise<ApiResponse<string>> => {
  const token = localStorage.getItem("jwtToken") ?? ""

  const response = await axios.post<ApiResponse<string>>(
    urls.addCartItem,
    cartItem,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  )

  return response.data
}
