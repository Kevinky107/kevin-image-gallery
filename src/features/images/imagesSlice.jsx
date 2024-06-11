import { createSlice } from "@reduxjs/toolkit"
import { getImagesThunk, getSearchedImagesThunk } from "./imagesThunk"

export const imagesSlice = createSlice({
    name: "images",
    initialState: {
        status: "idle",
        data: [],
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getImagesThunk.pending, (state, action) => {
                state.status = "pending"
            })
            .addCase(getSearchedImagesThunk.pending, (state, action) => {
                state.status = "pending"
            })
            .addCase(getImagesThunk.fulfilled, (state, action) => {
                state.data = [...state.data, ...action.payload]
                state.status = "fulfilled"
            })
            .addCase(getSearchedImagesThunk.fulfilled, (state, action) => {
                state.data = [...action.payload]
                state.status = "fulfilled"
            })
            .addCase(getImagesThunk.rejected, (state, action) => {
                state.status = "rejected"
                state.error = action.error.message
            })
            .addCase(getSearchedImagesThunk.rejected, (state, action) => {
                state.status = "rejected"
                state.error = action.error.message
            })
    }
})

export const imagesDataSelector = (state) => state.images.data
export const imagesStatusSelector = (state) => state.images.status
export const imagesErrorSelector = (state) => state.images.error
