import React, { useState } from 'react'

function Usestate() {
  const [counter,setCounter]=useState(0);
  const [counter2,setCounter2]=useState(10);
  console.log(counter);
       function increament(){
        //  setCounter (counter + 1);
         setCounter((prevalue)=> prevalue+1)
       }
       function decreament(){
        if(counter > 0){
          setCounter((value)=>value-1)}
        
       }
       function reset(){
        setCounter(1)
       }



       function increament2(){
        //  setCounter (counter + 1);
        if( counter > 10){
         setCounter2((prevalue)=> prevalue+1)}
       }
       function decreament2(){
        if(counter2 > 0){
          setCounter2((value)=>value-1)}
        
       }
       function reset2(){
        setCounter2(1)
       }
  return (
    <div>
      <h1>Counter:  {counter}</h1>
       <button onClick={increament}>+</button>
        <button onClick={reset}>reset</button>
       <button onClick={decreament}>-</button>


       <h1>Counter2: {counter2} </h1>
       <button onClick={increament2}>+</button>
        <button onClick={reset2}>reset</button>
       <button onClick={decreament2}>-</button>
    </div>
  )
}

export default Usestate