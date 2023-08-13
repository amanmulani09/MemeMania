"use client"
import {useState} from 'react'
import { Provider } from "react-redux";
import store from "@/features/store";
import { useGetTrendingMemeQuery } from "@/features/api/meme";
const Home = ()=>{
const [meme,setMeme] = useState()
const {data,error,isLoading} = useGetTrendingMemeQuery('trending');
console.log(data)
  return(
    <Provider store={store}>
    <h1>Home Sweet Home !</h1>
    </Provider>
  )
}

export default Home;