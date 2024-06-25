import React, { useReducer } from 'react'


function reducer(state,action){
    console.log(action,state,"para")
  switch (action.type) {
  case "INCREMENT":
    return {...state,counter: state.counter+1};
  case "DECREMENT":
    if(state.counter > 0){
   return {...state, counter: state.counter-1};}
   case "RESET":  
   return {...state, counter:0};
   default:
    return state;   
  }

}

const initialState = { counter:0 };
console.log(initialState,"initialState")

const Reducer = ()=> {

const [state,dispatch] = useReducer(reducer,initialState)  
console.log(state,"state")

function Increment(){
  dispatch({type:"INCREMENT"});
}
function decrement(){
dispatch({type:"DECREMENT"});
}

function Reset(){
  dispatch({type:"RESET"})
}

  return (
    <div>
        <h1> counter:{state.counter}</h1>
        <button onClick={Increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={Reset}>reset</button>

    </div>
  )
}

export default Reducer

// import React, { useReducer } from 'react'

// function reducer(state, action) {
//     console.log(action, state, "para")
//     switch (action.type) {
//         case "INCREMENT":
//             return {...state, counter: state.counter + 1 };
//         case "DECREMENT":
//             return {...state, counter: state.counter - 1 };
//         case "RESET":
//             return {...state, counter: 0 };
//         default:
//             return state;   
//     }
// }

// const initialState = { counter: 0 };
// console.log(initialState, "initialState");

// const Reducer = () => {
//     const [state, dispatch] = useReducer(reducer, initialState); // Moved this line up
//     console.log(state, "state");

//     function Increment() {
//         dispatch({ type: "INCREMENT" }); // Corrected typo
//     }

//     return (
//         <div>
//             <h1> counter:{state.counter} </h1>
//             <button onClick={Increment}>+</button>
//         </div>
//     );
// }

// export default Reducer;
