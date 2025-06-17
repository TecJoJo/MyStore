import axios from "axios"
import { _LoginRequestDTO, _LoginResponseDTO } from "./models";
import { urls } from "../common/models";
const url = urls.login


export const loginApiRequest = async (body: _LoginRequestDTO) => {
    try {
        const response = await axios.post<_LoginResponseDTO>(url, body)

        if (response.status === 200) {
            const { jwtToken } = response.data;
            localStorage.setItem("jwtToken", jwtToken);
            return response.data;
        } else {
            throw new Error(`login failed`)
        }


    }
    catch {
        throw new Error("Something is wrong")
    }
}