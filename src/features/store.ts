import { configureStore } from "@reduxjs/toolkit";
import { memeApi } from "./api/meme";
export const store = configureStore({
    reducer:{
        [memeApi.reducerPath]:memeApi.reducer,
    },
    middleware:(getDefaultMiddleware)=>{
        return getDefaultMiddleware().concat(memeApi.middleware);
    }
})
export default store;