export const urls = {
    login: "https://localhost:7172/api/auth/login",
    getAllProducts: "https://localhost:7172/api/products/allproducts"


}


export interface ApiResponse<T> {
    message: string;
    success: boolean;
    data: T;
    errors: string[];
}