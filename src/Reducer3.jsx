import React, { useReducer } from 'react'

function Reducer3() {
    const info={name: "", email: ""}
    function reducer(data, func){
        switch(data.type){
            case "name": 
            return { ...data, name: func.payload}
            break;

            default:
                return {...data, email: func.payload}
            }
    }
 const [data, action ]=   useReducer(reducer, info)
  return (
    <div>
        <h1 className='text-4xl font-bold   text-center font-serif'>Reducer3</h1>
        {/* <input type="text" placeholder='Enter your name' value={data.name} onChange={(e)=>action({type: "name", payload: e.target.value})} className='border py-2 w-1/2'  /> */}
        <input value={data.name}  onChange={(e)=>action({type: "name", payload: e.target.value})} type="text"    placeholder='Enter your name' className='border py-2 w-1/2' />
        <input value={data.email} onChange={(e)=>action({type: "email", payload: e.target.value})} type="email"   placeholder='Enter your email'className='border py-2 w-1/2' />
        <h1 className='text-4xl  text-center' >Your name is:  {data.name}</h1>
        <h1 className='text-4xl  text-center '>Your email is: {data.email}</h1>

    </div>
  )
}

export default Reducer3