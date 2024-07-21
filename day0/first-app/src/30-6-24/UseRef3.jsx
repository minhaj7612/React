import React, { useRef } from 'react'

const UseRef3 = () => {

    const previousState = useRef(0);

    function Increment(){
        previousState.current++;
        console.log(previousState.current,"previousState.current")
    }
  return (
    <div>
        <h1>Privious State:{previousState.current}</h1>
        <button onClick={Increment}>+</button>
    </div>
  )
}

export default UseRef3;