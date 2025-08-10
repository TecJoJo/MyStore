import { _CreateProductRequestDTO } from "./models"
import axios from "axios"
import { urls } from "../common/models"
export async function createProductApiRequest(data: _CreateProductRequestDTO) {
  const token = localStorage.getItem("jwtToken") ?? ""
  const response = await axios.post<string>(urls.createProduct, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  //Warning, here we returned response instead of response.data
  //TODO: refactor all the api requests to return either response or response.data
  return response
}
