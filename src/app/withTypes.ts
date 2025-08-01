import { createAsyncThunk } from '@reduxjs/toolkit'

import { RootState, AppDispatch } from './store'

export const createAppAsyncThunk = createAsyncThunk.withTypes<{
    state: RootState
    dispatch: AppDispatch
}>()