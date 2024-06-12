import { createSlice } from "@reduxjs/toolkit"

export const savedImagesSlice = createSlice({
    name: "saved",
    initialState: {
        data: JSON.parse(localStorage.getItem('saved')) || [],
        reload: false
    },
    reducers: {
        saveImage : (state, action) => {
            state.data = [...state.data, action.payload]
            localStorage.setItem('saved', JSON.stringify(state.data))
        },
        removeImage : (state, action) => {
            const local = JSON.parse(localStorage.getItem('saved'))
            state.data = [...local.filter(saved => saved.id !== action.payload)]
            localStorage.setItem('saved', JSON.stringify(state.data))
            state.reload = !state.reload
        }
    },
})

export const { saveImage, removeImage } = savedImagesSlice.actions
export const reloadData = (state) => state.saved.reload