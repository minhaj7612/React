import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import  CounterContext from "../Context/Counter.Contex" 

// function ContextCounter(){
//   const router = useNavigate();
//   const {state, dispatch}= useContext(CounterContext);

//   function handleIncrement() {
//    dispatch({type:"INCREMENT"})
//   }

//   return (
//     <div>
//       <h1>Counter:{state.counter}</h1>
//       <button onClick={handleIncrement}>+</button>
//     </div>
//   );
// }

// export default ContextCounter;


function ContextCounter() {
  const router = useNavigate();
  const {state, dispatch}= useContext(CounterContext);
  function handlclick(){
    dispatch({type:"INCREMENT"})
    router("/newhome")
  }
  return (
    <div><h1>{state.counter}</h1>
    <button onClick={handlclick}>+</button>
    </div>
  )
}

export default ContextCounter