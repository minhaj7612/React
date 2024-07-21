import { createContext,useReducer } from "react";


function reducer(state,action){
 switch(action.type){
 case "ADMIN LOGIN":
 return {...state, user:action.payload}
 case "LOGOUT":
    return {...state, user:null}
 default:
    return state;  
 }
}

const initialState={user:null}

export const AdminContext = createContext(); //add the functinality

function MyAdminContext({children}){   

   const [state,dispatch]=useReducer(reducer,initialState); 
   //  Higher Order Component  

    return(
    <AdminContext.Provider value={{state,dispatch}}>
      {children}
    </AdminContext.Provider>
)
}
export default MyAdminContext;  