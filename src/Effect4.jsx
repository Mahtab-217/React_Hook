import { useEffect, useState } from "react"

export default function Effect4(){
    const [value, setValue]= useState("");
    const [shomarish, setShomarish]= useState(0);
    useEffect(()=>{
        setShomarish((qabli)=>value.length);
    },[value])

    return (
        <div className="h-screen w-full flex-col flex justify-center bg-stone-300 ">
        <input value={value}
        onChange={(hadisa)=> setValue(hadisa.target.value)}
        type="text " placeholder="Enter something"  className="py-2 w-56 border  " />
        <h1 className="text-4xl text-center ">You entered {shomarish} chars</h1>
        </div>
    )
}