import React, { useEffect, useRef, useState } from 'react'

const UseRef = () => {
    const PrevCounter=useRef();
    console.log(PrevCounter);
    const [counter,setCounter]=useState(0);

    useEffect(()=>{
        PrevCounter.current=counter;
    },[counter])
  return (
    <div>
        <h1>counter:{counter}</h1>
        <h2> Previous Counter:{PrevCounter.current}</h2>
        <button onClick={()=>setCounter(counter+1)}>+</button>
    </div>
  )
}

export default UseRef