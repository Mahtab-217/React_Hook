import { useEffect, useState } from "react"
import UserCard from "./UserCard";

export default function Effect6(){
    const [listUsers, setListUsers]=useState([]);
    const [value, setValue]= useState("");

    useEffect(()=>{
        async function getData(){
         const data= await fetch("https://jsonplaceholder.typicode.com/users");
      const jawab=  await data.json();
      const filteredList= jawab.filter((x)=>{
       return x.name.toLowerCase().includes(value.toLowerCase());
      })
      setListUsers(filteredList);
        }
        getData();
    }, [value])
    return (
        <>
        <div className=" w-full min-h-screen bg-gray-200">
            <div className="mx-auto w-full max-w-6xl ">
                <input type="text"
                value={value}
                onChange={(e)=>setValue(e.target.value)}
                className="border py-2 w-full rounded-2xl my-8 px-3" placeholder="Search Users" />
                <div className="flex flex-col space-y-5 ">
                    {listUsers.length >0 &&
                     listUsers.map((u)=>(
                       
                       <UserCard user={u} value={u}/>
                    ))}
                </div>
            </div>
        </div>
        </>
    )
}