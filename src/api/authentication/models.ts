export interface _LoginResponseDTO {
  jwtToken: string
  message: string
}

export interface _LoginRequestDTO {
  email: string
  password: string
}

export interface _RegisterRequestDTO {
  email: string
  password: string
}

export interface _RegisterResponseDto {
  email: string
}
