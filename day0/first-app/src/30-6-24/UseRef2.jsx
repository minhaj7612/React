import React, { useRef,useState } from 'react'

const UseRef2 = () => {
    const CounterRef=useRef(0);
    const [counter,setCounter]=useState(10);
    function Increment(){
        CounterRef.current++;   
        console.log("current Counter",CounterRef.current);
    }

  return (
    <div>
        <h1> state counter:{counter}</h1>
        <button onClick={()=>setCounter(counter+1)}>+</button>

        <h2>Counter:{CounterRef.current}</h2>
        <button onClick={Increment}>+</button>
       
    </div>
  )
}

export default UseRef2