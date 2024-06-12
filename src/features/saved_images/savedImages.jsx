import { createSlice } from "@reduxjs/toolkit"

export const savedImagesSlice = createSlice({
    name: "saved",
    initialState: {
        data: JSON.parse(localStorage.getItem('saved')) || [],
        reload: false,
        //idModal: ""
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
        },
        searchImages : (state, action) => {
            const local = JSON.parse(localStorage.getItem('saved')) || []
            const data = []
            local.forEach(image => {
                if(image.alt.includes(action.payload))
                    data.push(image)
            })
            state.data = data
            state.reload = !state.reload
        },
        /*imagePopUp: (state, action) => {
            state.idModal = action.payload
        },
        closePopUp: (state, action) => {
            state.idModal = action.payload
        }*/
    },
})

export const { saveImage, removeImage, searchImages } = savedImagesSlice.actions
export const savedImagesData = (state) => state.saved.data
export const reloadData = (state) => state.saved.reload