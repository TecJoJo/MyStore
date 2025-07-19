import axios from "axios"
import { urls } from "../common/models"
import { ApiResponse } from "../common/models"

export const deleteCartItem = async (
  cartItemId: string,
): Promise<ApiResponse<string>> => {
  const token = localStorage.getItem("jwtToken") ?? ""

  const response = await axios.delete<ApiResponse<string>>(
    `${urls.deleteCartItem}/${cartItemId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  )

  return response.data
}
