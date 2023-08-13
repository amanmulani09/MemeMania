import { meme } from "@/types/types"
const Meme = ({source}:meme)=>{
    // const imageURL = source || '/public/next.svg'
    return(
        <img
        className="p-1 mb-12"
            src={source}
            alt="meme"
            width={400}
            height={300}
        />
    )
}

export default Meme