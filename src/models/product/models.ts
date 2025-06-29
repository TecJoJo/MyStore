//Product model is used across the application to represent product data.
//It is important to keep the model consistent with the API response structure
//keep in mind that all the product related interfaces should be built around ProductDto from file src/api/Products/models.ts
import { ProductDto } from "../../api/Products/models"

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Product extends ProductDto {}
