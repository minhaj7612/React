
import React, { useCallback } from 'react'
import { useState,useMemo } from 'react';

const Usememo = () => {

   const [counter,setCounter] =useState(0);
    const [input,setInput]=useState(0);
    // const expcount=expensiveCalc(counter);
    const expcount= useMemo(()=>expensiveCalc(counter),[counter]);

    console.log(input,"input")  
  
 
    return (
      <div>
        <input type="text" onChange={(e)=>setInput(e.target.value)} />
         <h1> expensive calculation:{expcount}</h1>
         <h2>counter:{counter}</h2>
         <button onClick={()=>setCounter(counter+1)}>+</button>
      </div>
    )
  }
  
 function expensiveCalc(counter) {
      console.log("calculating expensive calc")
      var totalcount = 0;
      for (let i = 0; i < 1000000000; i++) {
         totalcount+= counter; 
        
      }
      return totalcount
    }
  
  
  
  export default Usememo;
