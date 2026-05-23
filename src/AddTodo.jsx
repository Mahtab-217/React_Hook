import React, { useState } from 'react'

function AddTodo({todos, dispatch}) {
    function handleClick(){
        dispatch({payload: [value]})
        setValue("")
    }
    const [value, setValue]=useState("");
  return (
    <div>

        <input value={value} onChange={(e)=>setValue(e.target.value)} type="text" placeholder='What is in ypur mind?' className='w-1/2 py-2 border' />
        <button onClick={handleClick} className='py-2 px-8 rounded-sm  bg-green-700 m-2'>Save</button>
    </div>
  )
}

export default AddTodo