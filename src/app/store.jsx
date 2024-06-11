import { configureStore } from "@reduxjs/toolkit";
import { imagesSlice } from "../features/images/imagesSlice";
import { savedImagesSlice } from "../features/saved_images/savedImages";

export const store = configureStore({
    reducer: {
        images: imagesSlice.reducer,
        saved: savedImagesSlice.reducer,
    }
})