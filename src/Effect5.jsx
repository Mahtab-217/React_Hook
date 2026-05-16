import { useState } from "react"

export default function Effect5(){
    const [value, setValue]= useState(" ");
    return (
        <div className="w-full h-screen ">
            <h1>{value}</h1>
            <input type="text" onChange={(e)=>setValue(e.target.value)} className="border py-1.5 px-8" />
        </div>
    )
}


