import { useEffect, useState } from "react"

export default function Effect1(){
const [number, setNumber]= useState(0);
useEffect(()=>{
    document.title = "The number is "+ number;
},[number])
    return (
        <div>
            <button onClick={()=>setNumber(number+1)}>Click me</button>
        </div>
    )
}