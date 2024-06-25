import { createContext, useContext, useReducer } from "react";


export const ThemeContext =createContext()

function reducer(state,action){
  switch(action.type){
    case "DARK":
    return {...state,theme:"dark"}
    case "LIGHT":
    return {...state,theme:"light"}
    case "Default":
    return state;

  }
}

const initialState={theme:"light"}


function ThemeContextProvide({children}){
const [themeState , dispatch] = useReducer(reducer,initialState);
  
return(
   <ThemeContext.Provider value={{themeState,dispatch}}>
    {children}
   </ThemeContext.Provider>
)
}

export default ThemeContextProvide;