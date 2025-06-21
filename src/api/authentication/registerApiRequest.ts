import axios from "axios"
import { _RegisterRequestDTO, _RegisterResponseDto } from "./models"
import { urls } from "../common/models"
const url = urls.register

export const registerApiRequest = async (body: _RegisterRequestDTO) => {
  console.log("registerApiRequest request is called")

  try {
    const response = await axios.post<_RegisterResponseDto>(url, body)

    if (response.status !== 200) {
      throw new Error(`Registration failed`)
    }
  } catch {
    throw new Error("Something is wrong")
  }
}
