import { Siren } from 'lucide-react'
import React, { useReducer } from 'react'

function Reducer2() {
    function func(state, action){
        return state = action.payload;
    }
    const [data,action]=useReducer(func, false)
  return (
    <div className='w-full min-h-screen flex justify-center items-center '>
        <div className='w-fit p-8 flex-col flex items-center space-y-2'>
            <Siren size={52} className={`${data? 'fill-yellow-300 text-yellow-500': ''}`}/>
            <button onClick={()=>action({type: 'light', payload: !data})} className={`py-2 px-8 rounded-sm ${data? 'bg-red-700 text-white': "bg-black text-white"}`}>{data ? 'Turn Off' : 'Turn On'}</button>
        </div>
    </div>
  )
}

export default Reducer2