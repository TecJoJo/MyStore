import { createSlice } from "@reduxjs/toolkit"
import { initialState } from "./models/productsManagementModel"
import { productsManagementReducers } from "../productsManagement/reducers/productsManagementReducers"
export const productsManagementSlice = createSlice({
  name: "productsManagement",
  initialState,
  reducers: productsManagementReducers,
})

export const { toggleProductCreationSidebar } = productsManagementSlice.actions
