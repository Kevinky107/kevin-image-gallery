import { createAsyncThunk } from "@reduxjs/toolkit";

export const getImagesThunk = createAsyncThunk("images/getRandomImagesFromApi", async() => {
    const request = await fetch(`https://api.unsplash.com/photos/random?count=30&client_id=${import.meta.env.VITE_KEY}`)
    if(request.ok) {
        const data = await request.json()
        return data
    } else {
       throw new Error("Error trying to obtain random data from API") 
    }
})

export const getSearchedImagesThunk = createAsyncThunk("images/getSearchedImagesFromApi", async(query) => {
    if(query===""){
        const request = await fetch(`https://api.unsplash.com/photos/random?count=30&client_id=${import.meta.env.VITE_KEY}`)
        if(request.ok) {
            const data = await request.json()
            return data
        } else {
           throw new Error("Error trying to obtain random data from API") 
        }
    }
    else {
        const request = await fetch(`https://api.unsplash.com/search/photos?client_id=${import.meta.env.VITE_KEY}&per_page=30&query=${query}`)
        if(request.ok) {
            const data = await request.json()
            return data.results
        } else {
            throw new Error("Error trying to obtain data with QUERY from API") 
        }
    }
})