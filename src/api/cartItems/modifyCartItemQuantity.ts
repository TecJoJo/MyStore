import axios from "axios"
import { urls } from "../common/models"

export const modifyCartItemQuantity = async (
  cartItemId: string,
  quantity: number,
) => {
  const url = `${urls.modifyCartItemQuantity}/${cartItemId}`
  console.log("cartItemId", cartItemId)
  console.log("url", url)

  const token = localStorage.getItem("jwtToken") ?? ""
  await axios.put(
    url,
    {
      quantity,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  )
}
