import { createAsyncThunk } from "@reduxjs/toolkit";

export const getImagesThunk = createAsyncThunk("images/getRandomImagesFromApi", async() => {
    const request = await fetch("https://api.unsplash.com/photos/random?count=30&client_id=KZhpWnuPZdGM0vb0LUYwSCoG_-T-jLQGFMZENq_QiaI")
    const data = await request.json()
    return data
})

export const getSearchedImagesThunk = createAsyncThunk("images/getSearchedImagesFromApi", async(query) => {
    if(query===""){
        const request = await fetch("https://api.unsplash.com/photos/random?count=30&client_id=KZhpWnuPZdGM0vb0LUYwSCoG_-T-jLQGFMZENq_QiaI")
        const data = await request.json()
        return data
    }
    else {
        const request = await fetch(`https://api.unsplash.com/search/photos?client_id=KZhpWnuPZdGM0vb0LUYwSCoG_-T-jLQGFMZENq_QiaI&query=${query}`)
        const data = await request.json()
        return data.results
    }
})