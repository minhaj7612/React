import { createContext, useReducer } from "react";

function reducer(state,action){
 switch(action.type){
 case "LOGIN":
 return {...state, user:action.payload}
 case "LOGOUT":
    return {...state, user:null}
 default:
    return state;  
 }
}

const initialState={user:null}

export const Authcontext = createContext(); //add the functinality

function MyContext({children}){     //Higher Order Component  
const [state,dispatch]=useReducer(reducer,initialState);

return(
    <Authcontext.Provider value={{state,dispatch}}>
      {children}
    </Authcontext.Provider>
)
}
export default MyContext;   