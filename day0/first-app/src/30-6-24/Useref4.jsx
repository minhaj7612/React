import React, { useEffect, useState } from 'react'
import {useRef} from "react"

const Useref4 = () => {
    const previousValues= useRef();
    console.log(previousValues);
    const[input,setInput]=useState("");

  function handlClick(){
    previousValues.current.style.background="blue"
  }
    
  return (
    <div>
        <input type="text" onChange={(e)=>setInput(e.target.value)} ref={previousValues} />
        <button onClick={handlClick}>+</button>
    </div>
  )
}

export default Useref4