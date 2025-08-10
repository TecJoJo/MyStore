import { IProductsManagementState } from "../models/productsManagementModel"
export const productsManagementReducers = {
  toggleProductCreationSidebar(state: IProductsManagementState) {
    state.isProductCreationSidebarOpen = !state.isProductCreationSidebarOpen
  },
}
