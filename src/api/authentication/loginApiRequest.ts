import axios from "axios"

const url = "https://localhost:7172/api/auth/login"
export const loginApiRequest = async (email: string, password: string) => {
    try {
        await axios.post(url, {
            email,
            password
        })
    }
    catch (error) {
        console.log("failed to login", error);

    }

}