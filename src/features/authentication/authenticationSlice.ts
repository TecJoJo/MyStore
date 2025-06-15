import { createSlice } from "@reduxjs/toolkit";
import { loginApiRequest } from "../../api/authentication/loginApiRequest"
import { createAppAsyncThunk } from "../../app/withTypes";


interface IAuthenticationState {
    loginState: 'idle' | 'pending' | 'succeeded' | 'rejected'
}

const initialState: IAuthenticationState = {
    loginState: "idle"
}

export const login = createAppAsyncThunk(
    "login",
    async ({ email, password }: { email: string; password: string }) => {
        await loginApiRequest({ email, password });
    }
)

export const authenticationSlice = createSlice({
    name: "authentication",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(
                login.pending,
                (state) => {
                    state.loginState = "pending"
                }
            )
            .addCase(
                login.fulfilled,
                (state) => { state.loginState = "succeeded" }
            )
            .addCase(
                login.rejected,
                (state) => {
                    state.loginState = "rejected"
                }
            )

    }
})

export default authenticationSlice.reducer