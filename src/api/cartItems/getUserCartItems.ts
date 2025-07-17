import axios from "axios"
import { GetCartItemsDto } from "./models"
import { urls } from "../common/models"

export const getUserCartItems = async (): Promise<GetCartItemsDto> => {
  const token = localStorage.getItem("jwtToken") ?? ""

  const response = await axios.get<GetCartItemsDto>(
    urls.getCartItems, // or whatever your cart URL is
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  )
  return response.data
}
