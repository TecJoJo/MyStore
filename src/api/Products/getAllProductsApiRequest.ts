import axios from "axios"
import { GetAllProductsResponseDto } from "./models"
import { urls } from "../common/models"

export const getAllProductsApiRequest =
  async (): Promise<GetAllProductsResponseDto> => {
    try {
      const token = localStorage.getItem("jwtToken")
      const response = await axios.get<GetAllProductsResponseDto>(
        urls.getAllProducts,
        {
          headers: {
            Authorization: token ? `Bearer ${token}` : "",
          },
        },
      )
      return response.data
    } catch (error) {
      console.error("Error fetching all products:", error)
      throw error
    }
  }
