import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { createAppAsyncThunk } from "../../app/withTypes"
import { getAllProductsApiRequest } from "../../api/Products/getAllProductsApiRequest"
import { mapGetAllProductsResponseDtoToProducts } from "./utils/getAllProductsResponseDtoToProductMap"
export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    category: string;
    stock: number;
}

interface ProductsState {
    products: Product[];
}

export const getAllProducts = createAppAsyncThunk(
    "getAllProducts",
    async () => {
        const getAllProductsResponseDto = await getAllProductsApiRequest()
        const products = mapGetAllProductsResponseDtoToProducts(getAllProductsResponseDto)
        return products
    }
)


const initialState: ProductsState = {
    products: [],
};

export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(
            getAllProducts.fulfilled,
            (state, action) => { state.products = action.payload }
        )
    }
});



export default productsSlice.reducer;
