import React from 'react'
import { useContext } from 'react';
import { Authcontext } from './Context/Authcontext';
import { useNavigate } from 'react-router-dom';
import {CounterContext} from "./Context/Counter.Contex" 
import {ThemeContext} from"./Context/theme"

function NewHome() {
    const {state} = useContext(Authcontext);
    const{themeState,dispatch}=useContext(ThemeContext); 
    console.log(themeState,"themeState")
    const route = useNavigate();

    // const { state, dispatch } = useContext(CounterContext);
  
  return (
         <div style={{background:themeState.theme === "light" ? "blue" :"gray"}}>
         <h1>Home page -{state?.user?.name}</h1>
          
         <button onClick={()=>route("/logindetail")}>back to login page</button> <br/>

         <button onClick={()=>dispatch({type: themeState?.theme === "light" ? "DARK": "LIGHT"})} >change {themeState.theme ==="light"? "blue" : "dark"} theme</button>
         
    </div>
  )
}

export default NewHome