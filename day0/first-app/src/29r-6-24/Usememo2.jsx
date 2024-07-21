import React, { useState,useMemo } from 'react'

const Usememo2 = () => {

  const [counter,setCounter]=useState(0);
  const[inpt,setInpt]=useState("");
  console.log(inpt,"inpt")
  const expCalc = useMemo(()=>ExpensiveCalc(counter),[counter]);

  return (
    <div>
      <input type="text" onChange={(e)=>setInpt(e.target.value)} />
      <h1>Expensive Calculation:{expCalc}</h1>
      <h2>counter:{counter}</h2>
      <button onClick={()=>setCounter((pre)=>pre+1)}>+</button>   
    </div>
  )
}

function ExpensiveCalc(counter){
  console.log("calling frome expensive Component");
   var totalcalc = 0;
  for(var i=0; i<1000000000; i++){
       totalcalc += counter;
  }
 return totalcalc;
}

export default Usememo2;