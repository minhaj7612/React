import { useEffect, useState } from "react";

// Type 1 :- No dependency
// 1.It’ll Execute the function on every render.
// 2.Render - on initial page load on browser, whenever any state changes.
// 3.Ex. Timer, Session period.

function UseEffect() {
  const [counter, setCounter] = useState(1);
  const [counter2, setCounter2] = useState(1);
  // state
  // fuctions
  // effects
//   useEffect(() => {
//     alert("INside useeffect.");
//     //  backend call to fetch product
//   });
   function userStartedBrowsing(){
      alert("inside function")
   }

   window.onload = userStartedBrowsing();
  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setCounter2(counter2 + 1)}>+ for 2</button>
      <h2>Useefecct</h2>
    </div>
  );
}

export default UseEffect;