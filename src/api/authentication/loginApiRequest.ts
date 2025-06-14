import axios from "axios"
import { ILoginRequestDTO, ILoginResponseDTO } from "./model";
const url = "https://localhost:7172/api/auth/login"


export const loginApiRequest = async (body: ILoginRequestDTO) => {
    try {
        const response = await axios.post<ILoginResponseDTO>(url, body)

        console.log("login response", response);
        if (response.status === 200) {
            const { jwtToken, message } = response.data;
            console.log("Login successful:", message);
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