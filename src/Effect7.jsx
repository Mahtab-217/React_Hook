import React, { useEffect, useState } from 'react'

function Effect7() {
    const [size, setSize]= useState(0);
  useEffect(()=>{
    function getSize(){
        setSize(window.innerWidth);
    }
    window.onresize = getSize;
    // setSize(window.innerWidth);
  },[size])
  return (
    <div>
        <h1 className='text-4xl font-bold'>The width of screen is {size}</h1>
    </div>
  )
}

export default Effect7