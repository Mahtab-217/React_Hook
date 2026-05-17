import { useEffect, useState } from "react"
import UserCard from "./UserCard";

export default function Effect6(){
    const [listUsers, setListUsers]=useState([]);
    useEffect(()=>{
        async function getData(){
         const data= await  fetch("https://jsonplaceholder.typicode.com/users");
      const jawab=  await data.json();
        }
        getData();
    }, [])
    return (
        <>
        <div className=" w-full min-h-screen bg-gray-200">
            <div className="mx-auto w-full max-w-6xl ">
                <div>
                    {listUsers.length >0 &&
                     listUsers.map((u)=>(
                       
                       <UserCard/>
                    ))}
                </div>
            </div>
        </div>
        </>
    )
}