import React, { useEffect, useState } from 'react'

export default function () {
    const [isDark, setIsDark]= useState(false);
    // useEffect(()=>{
    //     localStorage.setItem('isDark', isDark)
    // },[isDark])
  return (
    <div className={`h-72 w-full ${isDark? 'bg-black' : 'bg-white'}`}>
        <button 
        className={`${isDark? 'text-white' : 'text-black'}`}
        onClick={()=> setIsDark(!isDark)}>{isDark? 'Light Mode': 'Dark Mode'}</button>
    </div>
  )
}
