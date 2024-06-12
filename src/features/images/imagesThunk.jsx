import { createAsyncThunk } from "@reduxjs/toolkit";

export const getImagesThunk = createAsyncThunk("images/getRandomImagesFromApi", async() => {
    const request = await fetch("https://api.unsplash.com/photos/random?count=30&client_id=KZhpWnuPZdGM0vb0LUYwSCoG_-T-jLQGFMZENq_QiaI")
    if(request.ok) {
        const data = await request.json()
        return data
    } else {
       throwError("Error trying to obtain random data from API") 
    }
})

export const getSearchedImagesThunk = createAsyncThunk("images/getSearchedImagesFromApi", async(query) => {
    if(query===""){
        const request = await fetch("https://api.unsplash.com/photos/random?count=30&client_id=KZhpWnuPZdGM0vb0LUYwSCoG_-T-jLQGFMZENq_QiaI")
        if(request.ok) {
            const data = await request.json()
            return data
        } else {
           throwError("Error trying to obtain random data from API") 
        }
    }
    else {
        const request = await fetch(`https://api.unsplash.com/search/photos?client_id=KZhpWnuPZdGM0vb0LUYwSCoG_-T-jLQGFMZENq_QiaI&per_page=30&query=${query}`)
        if(request.ok) {
            const data = await request.json()
            return data.results
        } else {
            throwError("Error trying to obtain data with QUERY from API") 
        }
    }
})