import React, { useEffect, useReducer, useState } from 'react'
const products=[
    {
        name: "Apple PC",
        price: 10000
    },
    {
        name: "HP PC",
        price: 20000
    },
    {
        name: "Dell PC",
        price: 30000
    },

]


function Reducer6() {
    const [data, action]= useReducer(myFunction, products);
    const [totalPrice, setTotalPricde]= useState(0);
    const [qimat, setQimat]= useState(0);
    const [name, setName]= useState("");
    useEffect(()=>{
        setTotalPricde(data.reduce((total, y)=>{
            return (total += y.price);
        },0));
    },[data])
    function handleClick(){
        action({payload: {name: name, price: qimat}})
    }
  return (
    <div>
        <input onChange={(e)=>setName(e.target.value)} className='py-2 border rounded-md mx-3 px-3' type="text" placeholder='Name' />
        <input onChange={(e)=>setQimat(+e.target.value)} className='py-2 border rounded-md mx-3 px-3' type="number" placeholder='Price' />
        <button className='border rounded-md bg-green-800 py-2 px-8 text-white' onClick={(handleClick)}>Save</button>
       
        <div className='p-5 grid grid-cols-3 gap-8'>
            {data.map((y,index)=>{
                return (
                    <div key={index} className='p-5 border rounded-sm'>
                        <h1 className='text-green-900 text-2xl'>{y.name}</h1>
                        <p className={` "font-bold" ${y.price < 15000? "text-green-700": "text-red-700"}`}> {y.price} AFG</p>
                    </div>
                )
            })}
        </div>
        <h1 className='text-3xl text-center font-bold'>Total Price: {totalPrice}</h1>
    </div>
  )
}

export default Reducer6
function myFunction(data, action){
return [...data, action.payload]
}