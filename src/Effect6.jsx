import { useEffect, useState } from "react"
import UserCard from "./UserCard";

export default function Effect6(){
    const [listUsers, setListUsers]=useState([]);
    const [value, setValue]= useState("");

    useEffect(()=>{
        async function getData(){
         const data= await fetch("https://jsonplaceholder.typicode.com/users");
      const jawab=  await data.json();
      const filteredList= jawab.filter((x)=> x.name.includes(value));
      setListUsers(filteredList);
        }
        getData();
    }, [value])
    listUsers.length ==0 &&(
        <div>
            {" "}
            <h1>No users exists</h1>
        </div>
    );
    return (
        <>
        <div className=" w-full min-h-screen bg-gray-200">
            <div className="mx-auto w-full max-w-6xl ">
                <input type="text"
                value={value}
                onChange={(e)=>setValue(e.target.value)}
                className="border py-2 w-full rounded-2xl my-8 px-3" placeholder="Search Users" />
                <div className=" space-y-5 ">
                    {listUsers.map((y)=>(
                        <div className="w-full p-4 border rounded-2xl " key={y.id}>
                            <h1 className="text-2xl font-bold">
                                {value
                                ? y.name
                                .split(new RegExp(`(${value})`, "gi"))
                                .map((part, index)=>
                                part.toLowerCase()=== value.toLowerCase() ? (
                                    <span key={index} className="text-red-600">{part}</span>
                                ):(
                                    part
                                ),
                            )
                            : y.name
                                }
                            </h1>
                        </div>
                    ))}
                
                </div>
            </div>
        </div>
        </>
    )
}