import { useRef, useState } from "react"

export default function Effect5(){
    const [value, setValue]= useState(" ");
    const ref= useRef();
    
    return (
        <div className="w-full h-screen ">
            <h1>{value}</h1>
            <input ref={ref} type="text" onChange={(e)=>setValue(e.target.value)} className="border py-1.5 px-8" />
        </div>
    )
}


