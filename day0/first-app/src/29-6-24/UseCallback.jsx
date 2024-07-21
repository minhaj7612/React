import React, { useCallback } from 'react'
import { useState,memo } from 'react';

const USeCallback = () => {

    const [counter,setCounter] =useState(0);
    const [input,setInput]=useState(0);
    console.log(input,"input")
  
    //  const increment=()=>{
    //    setCounter(counter+1);
    //  }

     const increment = useCallback(()=>{
        setCounter(counter + 1);
      },[counter]);
    return (
      <div>
        <input type="text" onChange={(e)=>setInput(e.target.value)} />
        <MemoComponent counter={counter} increment={increment}/>
      </div>
    )
  }
  
  const MemoComponent = memo(function ChildrenComponent({counter,increment}) {
      console.log("children Component")
      return(
          <div>
               <h1>counter:{counter}</h1>
               <button onClick={increment}>+</button>
          </div>
     
  )
  });
  
  export default USeCallback;