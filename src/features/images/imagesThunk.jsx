import { createAsyncThunk } from "@reduxjs/toolkit";

export const getImagesThunk = createAsyncThunk("images/getRandomImagesFromApi", async() => {
    const request = await fetch("https://api.unsplash.com/photos/random?count=30&client_id=KZhpWnuPZdGM0vb0LUYwSCoG_-T-jLQGFMZENq_QiaI")
    const data = await request.json()
    return data
})