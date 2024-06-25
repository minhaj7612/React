import { createContext, useReducer } from "react";

// Reducer function to manage counter actions
function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, counter: state.counter + 1 };
    case "DECREMENT":
      return { ...state, counter: state.counter - 1 };
    case "RESET":
      return { ...state, counter: 0};
    default:
      return state;
  }
}

// Initial state for the counter
const initialState = { counter: 0 };

export const CounterContext = createContext();

function CounterProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  function increment() {
    dispatch({ type: "INCREMENT" });
  }

  function decrement() {
    dispatch({ type: "DECREMENT" });
  }

  function reset() {
    dispatch({ type: "RESET" });
  }

  return (
    <CounterContext.Provider value={{state,dispatch}}>
      {children}
    </CounterContext.Provider>
  );
}

export default CounterProvider;


























// import { createContext, useReducer } from "react";

// // Reducer function to manage counter actions
// function reducer(state, action) {
//   switch (action.type) {
//     case "INCREMENT":
//       return { ...state, counter: state.counter + 1 };
//     case "DECREMENT":
//       return { ...state, counter: state.counter - 1 };
//     case "RESET":
//       return { ...state, counter: 0 };
//     default:
//       return state;
//   }
// }

// // Initial state for the counter
// const initialState = { counter: 0 };


// export const CounterContext = createContext();

// function CounterProvider({ children }) {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   function increment() {
//     dispatch({ type: "INCREMENT" });
//   }

//   function decrement() {
//     dispatch({ type: "DECREMENT" });
//   }

//   function reset() {
//     dispatch({ type: "RESET" });
//   }

//   return (
//     <CounterContext.Provider value={{ state, increment, decrement, reset }}>
//       {children}
//     </CounterContext.Provider>
//   );
// }

// export default CounterProvider;






























// import { createContext, useReducer } from "react";

// // Reducer function to manage counter actions
// function reducer(state, action) {
//   switch (action.type) {
//     case "INCREMENT":
//       return { ...state, counter: state.counter + 1 };
//     case "DECREMENT":
//       return { ...state, counter: state.counter - 1 };
//     case "RESET":
//       return { ...state, counter: 0 };
//     default:
//       return state;
//   }
// }


// const initialState = { counter: 0 };

// export const AuthCountercontext = createContext();

// function CounterProvider({ children }) {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   // Action dispatch functions
//   function increment() {
//     dispatch({ type: "INCREMENT" });
//   }

//   function decrement() {
//     dispatch({ type: "DECREMENT" });
//   }

//   function reset() {
//     dispatch({ type: "RESET" });
//   }

//   return (
//     <AuthCountercontext.Provider value={{ state, increment, decrement, reset }}>
//       {children}
//     </AuthCountercontext.Provider>
//   );
// }

// export default CounterProvider;