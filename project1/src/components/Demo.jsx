import React, { useState } from 'react'

export const Demo = () => {
    const [a,b] = useState("")

     const demo = ()=>{
        let c = a.toUpperCase();
  b(c);
     }
     const demo1 = ()=>{
        let d = a.toLowerCase();
  b(d);
     }
  return (
    <div>
        <input type="text" value={a} onChange={(e)=> b(e.target.value)} placeholder='Enter your task here'/>
        <button onClick={demo}  > click me </button>
        <button onClick={demo1}  > click 2 me </button>
    </div>
  )
}
