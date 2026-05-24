import React, { useEffect, useReducer } from 'react'
const products=[
    {
        name: "Apple PC",
        price: "10000"
    },
    {
        name: "HP PC",
        price: "20000"
    },
    {
        name: "Dell PC",
        price: "30000"
    },

]
function Reducer6() {
   const [data, action]= useReducer(myFunction, products);
   let totalPrice=0;
  useEffect(()=>{
    const totalPrice=data.reduce((total, y)=>{
        return (total += y.price);
    },0);
  },[data])
  return (
    <div>
        <input type="text" />
        <div className='p-5 grid grid-cols-3 gap-8'>
            {data.map((y,index)=>{
                return (
                    <div key={index} className='p-5 border rounded-sm'>
                        <h1 className='text-green-700'>{y.name}</h1>
                        <p className={` "text-bold" ${y.price < 15000? "text-green-700": "text-red-700"}`}> {y.price} AFG</p>
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

}