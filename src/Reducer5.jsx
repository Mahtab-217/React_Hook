import { ThumbsDown, ThumbsUp } from 'lucide-react'
import React, { useReducer } from 'react'
const votes={agree:0, disagree:0}
function Reducer5() {
    const [data, myFunction]=useReducer(func, votes)
  return (
    <div>
        <div className='w-full max-w-4xl mx-auto flex items-center justify-center flex-col  '>
           
        </div>
        <div className='flex flex-col w-fit space-y-3 justify-center items-center mx-auto'>

         <h1 className='text-3xl text-center font-serif'>{data.agree}</h1>
        <button onClick={()=>myFunction({type: "agree", payload: 1})} className='py-2 px-8 border rounded hover:bg-stone-300 '>
            <ThumbsUp className=''/>
        </button>
            <h1 className='text-3xl text-center font-serif'>{data.disagree}</h1>
        <button   onClick={()=>myFunction({type: "disagree", payload: 1})} className='py-2 px-8 border rounded  hover:bg-stone-300'>
            <ThumbsDown/>
        </button>
        </div>
    </div>
  )
}

export default Reducer5
function func(state, action){
    switch( action.type){
        case "agree":
            return {...state, agree: state.agree+action.payload}
            break;
            default :
            return {...state, disagree: state.disagree+action.payload}
            break;
        }
}