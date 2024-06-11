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
            state.data = state.data.filter(saved => saved.id !== action.payload)
            localStorage.setItem('saved', JSON.stringify(state.data))
        },
        lookforImage : (state, action) => {
            const answer = state.data.filter(saved => saved.id === action.payload)
            let finded = false;

            if(answer.length > 0)
                finded = true

            return finded
        }
    },
})

export const { saveImage, removeImage, lookforImage } = savedImagesSlice.actions