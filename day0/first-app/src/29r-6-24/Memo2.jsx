import React, { memo, useState } from 'react'

const Memo2 = () => {
  const [counter,setCounter]=useState(0);
  const [getInput,setGetInput]=useState("");
  console.log(getInput,"getInput");
  return (
    <div>
      <input type="text" onChange={(e)=>setGetInput(e.target.value)} />
      <MemoComponent counter={counter}/>
      <button onClick={()=>setCounter(counter+1)}>+</button>
    </div>
  )
}

const MemoComponent = memo(function ChildComp ({counter}) {

  console.log("child component is call")

  return(
  <div>
    <h1>Counter:{counter}</h1>
  </div>
  )

});



export default Memo2

