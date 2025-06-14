export interface ILoginResponseDTO {
    jwtToken: string,
    message: string,

}

export interface ILoginRequestDTO {
    email: string,
    password: string,
}