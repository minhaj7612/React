import React, { memo } from 'react'
import { useState } from 'react'

const Memo = () => {

  const [counter,setCounter] =useState(0);
  const [input,setInput]=useState(0);
  console.log(input,"input")


  return (
    <div>
      <input type="text" onChange={(e)=>setInput(e.target.value)} />
      <MemoComponent counter={counter}/>
      <button onClick={()=>setCounter(counter+1)}>+</button>
    </div>
  )
}

const MemoComponent= memo(function ChildrenComponent({counter}) {
    console.log("children Component")
    return(
        <div>
             <h1>counter:{counter}</h1>
        </div>
   
)
});

export default Memo;