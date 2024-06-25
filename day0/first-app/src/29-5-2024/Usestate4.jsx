import { useEffect, useState } from "react";


// Type 4 :- Multiple dependencies
// useEffect( ( ) => { console.log( “called” ) } , [ counter1, counter2 ] )
// It’ll Execute the function whenever any dependency will updates and at very first render.

function UseEffect2() {
  const [counter1, setCounter] = useState(1);
  const [counter2, setCounter2] = useState(1);
  useEffect(() => {
    alert("Hii");
  }, [counter1,counter2]);
  return (
    <div>
      <h1>Hi {counter1}</h1>
      <button onClick={() => setCounter(counter1 + 1)}>+</button>
      <h1>Hi {counter2}</h1>
      <button onClick={() => setCounter2(counter2 + 1)}>+</button>
    </div>
  );
}

export default UseEffect2;