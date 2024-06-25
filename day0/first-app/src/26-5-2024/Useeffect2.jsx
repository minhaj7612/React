import { useEffect, useState } from "react";

// Type 2 :- Empty dependencies
// useEffect( ( ) => { console.log( “called” ) } , [ ] )
// It’ll Execute the function only on very first render.
// Ex. Welcome message, Auth check.

function UseEffect2() {
  const [counter, setCounter] = useState(1);
  useEffect(() => {
    alert("Hii");
  }, []);
  return (
    
    <div>
      <h1>Hi {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </div>
  );
}

export default UseEffect2;