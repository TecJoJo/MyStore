import axios from "axios"
import { urls } from "../common/models"
import { GetCartItemsDto } from "../cartItems/models"

export const getUserCartItems = async () => {
    const response = await axios.get<GetCartItemsDto>(urls.getCartItems)
    return response.data.data
}