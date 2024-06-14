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
        changeDescription : (state, action) => {
            state.data.map((image, index) => {
                if(image.id === action.payload.id)
                    image.alt = action.payload.alt
            })
            localStorage.setItem('saved', JSON.stringify(state.data))
            state.reload = !state.reload
        },
        sortImages : (state, action) => {
            state.data.sort((a,b) => {
                if(action.payload === "dateUp")
                    return b.date - a.date
                else if (action.payload === "dateDown")
                    return a.date - b.date
                else if(action.payload === "likesUp")
                    return a.likes - b.likes
                else if (action.payload === "likesDown")
                    return b.likes - a.likes
                else if(action.payload === "widthUp")
                    return a.width - b.width
                else if (action.payload === "widthDown")
                    return b.width - a.width
                else if(action.payload === "heightUp")
                    return a.height - b.height
                else if (action.payload === "heightDown")
                    return b.height - a.height
            })
            state.reload = !state.reload
        }
    },
})

export const { saveImage, removeImage, searchImages, changeDescription, sortImages } = savedImagesSlice.actions
export const savedImagesData = (state) => state.saved.data
export const reloadData = (state) => state.saved.reload