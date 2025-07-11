import axios from "axios"
import { GetAllProductsResponseDto } from "./models"
import { urls } from "../common/models"

export const getAllProductsApiRequest =
  async (): Promise<GetAllProductsResponseDto> => {
    const token = localStorage.getItem("jwtToken") ?? ""

    const response = await axios.get<GetAllProductsResponseDto>(
      urls.getAllProducts,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    )
    return response.data
  }
