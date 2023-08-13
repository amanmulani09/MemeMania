"use client"
import { Provider } from "react-redux";
import MemeContainer from "@/components/MemeContainer";
import store from "@/features/store";
const Home = ()=>{
  return(
    <Provider store={store}>
    <main className='main flex justify-center items-center h-full w-full flex-col absolute'>
      <MemeContainer />
    </main>
    </Provider>
  )
}

export default Home;