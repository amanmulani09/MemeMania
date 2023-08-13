'use client'
import { useGetTrendingMemeQuery } from "@/features/api/meme";
import {useState,useEffect} from 'react'
import Meme from "./Meme";
const MemeContainer = ()=>{
const [fetchCategory,setFetchCategory] = useState('trending')
const {data,error,isLoading} = useGetTrendingMemeQuery(fetchCategory);

console.log(data)
if(isLoading) return <img alt="loading" src="/loader.gif" width={200} height={200}/>
return(
    <>
    <aside className="rounded border border-slate-500 flex flex-col w-1/2 justify-center items-center p-2 shadow-lg">
                <div className="title self-start p-1">
                    <h3 className="font-semibold text-slate-600">{data && data[0]?.title}</h3>
                </div>

                <div className="meme">
                    <Meme source={data && data[0].url} />
                </div>

                <div className="actionButtons">
                    <button className="border rounded p-2 border-slate-600 m-2 hover:bg-slate-600 hover:text-white"
                     onClick={()=> setFetchCategory('trending')}>Get Trending</button>
                    <button className="border rounded p-2 border-slate-600 m-2 hover:bg-slate-600 hover:text-white"
                    onClick={()=> setFetchCategory('new')}
                    >Get New</button>
                </div>
    </aside>
    </>
)
}
export default MemeContainer