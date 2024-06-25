import React, { useEffect, useState } from 'react'

function Useeffect3() {
    const [counter,setCounter]=useState(0);

    // Type 3 :- Single dependency
// useEffect( ( ) => { console.log( “called” ) } , [ counter ] )
// It’ll Execute the function when counter updates and very first render.
// Ex. To save user typed data.

    // const [isuserlogdin,setIsuserlogdin] = useState(false);

    // function togglefun(){
    //     setIsuserlogdin((prv) => !prv)
    // }
    useEffect(()=>{
       if(counter >10  && counter <20){
           alert("counter is in between 10-20")
       }else{
        alert("counter is out of range")
       }
    },[counter])

  return (
    <div>
        {/* Assigment && -> if counter is more than 10 and less than 20 then display "counter is in between 10-20" 
        else display "counter is out of range"*/}
        {counter > 10  && counter < 20 ? <h1>counter is in between 10-20</h1> : <h1>counter is out of range</h1>}
        {/* {isuserlogdin ? <h1 onClick={togglefun}>welcom</h1> : <h1 onClick={togglefun}>Please Loged in</h1>} */}

        <h1>Counter:{counter}</h1>
        <button onClick={()=>setCounter(counter+1)}>+</button>
        <button onClick={()=>setCounter(counter-1)}>-</button>
        <button onClick={()=>setCounter(8)}>Refresh</button>
   </div>
  )
}

export default Useeffect3;