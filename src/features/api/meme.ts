"use client"
// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Base_URL,Base_URL_FAKE } from '@/utils/constants'
const options = {
      'X-RapidAPI-Key': '9968a37f2cmshc78d2bddf6b1a13p135af1jsndb166f7734d3',
      'X-RapidAPI-Host': 'reddit-meme.p.rapidapi.com'
  }
const createRequest = (url:string) =>({url,headers:options})
export const memeApi = createApi({
    reducerPath:'memeAPI',
    baseQuery:fetchBaseQuery({ baseUrl:Base_URL}),
    endpoints:(builder)=>({
    getTrendingMeme:builder.query({
            query: (memeType:string) => createRequest(`/memes/${memeType}`),
        }),
    }),
});

export const {useGetTrendingMemeQuery} = memeApi