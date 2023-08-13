"use client"
// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Base_URL } from '@/utils/constants'
export const memeApi = createApi({
    reducerPath:'memeAPI',
    baseQuery:fetchBaseQuery({
        baseUrl:Base_URL
    }),
    endpoints:(builder)=>({
    getTrendingMeme:builder.query({
            query: (memeType:string)=> `/memes/${memeType}`
        }),
    }),
});

export const {useGetTrendingMemeQuery} = memeApi