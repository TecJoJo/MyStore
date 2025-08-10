import { IProduct } from "../../../sharedModels/product/product"

export interface IProductsManagementState {
  isProductCreationSidebarOpen: boolean
  products: IProduct[]
}

export const initialState: IProductsManagementState = {
  isProductCreationSidebarOpen: true,
  products: [],
}
