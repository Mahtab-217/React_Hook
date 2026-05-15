import { useEffect, useState } from "react"

export default function Effect3(){
    const [running, setRuning]=useState(false);
    const [seconds, setSeconds]= useState(60);
    const [myChoice, setMychoice]=useState(0);
    useEffect(()=>{
        let i = null;
        if(seconds <=0){
           const alarm= new Audio("/alarm/song.mp3");
           alarm.play();
           clearInterval(i);
           return 0;
        }
        if(running){
      i=  setInterval(()=>{
            setSeconds((qabli)=> qabli-1);

        },1000);
    }
   
        return ()=>clearInterval(i);
    },[running, seconds]);

    return(
        <div>
            <div className="w-full bg-linear-60 from-blue-600 to-purple-500 via-purple-500 h-screen flex justify-center items-center">
                <div className="border w-1/2 p-4 bg-white rounded-2xl shadow-[3px_3px_10px_rgba(0,0,0.3)]">
                <input type="number" className="border py-2 w-full rounded-sm focus:outline-0 px-2"/>
                    <h1 className="text-center text-4xl font-bold">{seconds}</h1>
                    <div className="w-full flex justify-between">
                        <button onClick={()=>setRuning(true)} className="py-2 px-8 bg-blue-600 text-white rounded-md">Start</button>
                        <button onClick={()=>setRuning(false)} className="py-2 px-8 bg-red-600 text-white  rounded-md ">Stop</button>
                    </div>
                </div>
            </div>
        </div>
    )
}