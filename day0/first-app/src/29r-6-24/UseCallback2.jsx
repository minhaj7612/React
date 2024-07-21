import React, { useState } from 'react'
import { useCallback,memo} from 'react';



const UseCallback2 = () => {
    const [counter,setCounter]=useState(0);
    const [input,setInput]=useState("");

    console.log(input,"input")

    const Increment = useCallback(() => {
        setCounter(counter+1);
    },[counter]);

  return (
    <div>
     <input type='text' onChange={(e)=>setInput(e.target.value)}/>
     <MemoComponent Increment={Increment} counter={counter} />
    </div>
  )
}

const MemoComponent= memo(function ChildrenComponent ({Increment,counter}){
   console.log("child component is rendering")
   return(
        <div>
            <h1>Counter:{counter}</h1>
            <button onClick={Increment}>+</button>
        </div>
    )
});

export default UseCallback2;