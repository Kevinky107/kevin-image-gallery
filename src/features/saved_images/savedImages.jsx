import { createSlice } from "@reduxjs/toolkit"

export const savedImagesSlice = createSlice({
    name: "saved",
    initialState: {
        data: JSON.parse(localStorage.getItem('saved')) || []
    },
    reducers: {
        saveImage : (state, action) => {
            state.data = [...state.data, action.payload]
            localStorage.setItem('saved', JSON.stringify(state.data))
        },
        removeImage : (state, action) => {
            state.data = state.data(localStorage.getItem('saved')).filter(saved => saved.id !== action.payload)
            localStorage.setItem('saved', JSON.stringify(state.data))
        }
    },
})

export const { saveImage, removeImage } = savedImagesSlice.actions