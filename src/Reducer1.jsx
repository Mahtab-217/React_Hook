import React, { useReducer } from 'react'

function Reducer1() {
    function func(state, myFunction){
        if(myFunction.type ==="inc"){
            return {count: state.count + myFunction.payload}
        }else{
            return {count: state.count - myFunction.payload}
        }
    }
const [data,action]=useReducer(func, {count:0});
  return (
    <div className='flex flex-col justify-center items-center space-y-2'>
        <h1 className='text-3xl font-bold text-zinc-600 text-center'>{data.count}</h1>
        <button className=' px-4 bg-blue-700 text-white rounded-md' onClick={()=>action({type:"inc", payload:1})}>+1</button>
        <button className=' px-4 bg-blue-700 text-white rounded-md' onClick={()=>action({type: "dec", payload:1})}>-1</button>
    </div>
  )
}

export default Reducer1