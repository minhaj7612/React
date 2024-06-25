import React, { useContext, useState } from 'react'
import toast from 'react-hot-toast';
import { Authcontext } from '../Context/Authcontext';
import { useNavigate } from "react-router-dom";

function Login() {

 const {state,dispatch} = useContext(Authcontext);

   const route = useNavigate();
    const [userinFo,setUserinFo]=useState({email:"", password:""});
    console.log(userinFo)
    
   const handlechng=(event)=>{
    setUserinFo(event.target.value)
    setUserinFo({ ...userinFo, [event.target.name]: event.target.value});

    }
   function handlesubmit(e){
      e.preventDefault();
      try{
     if(userinFo.email && userinFo.password){
       const response=
        {data:{
          success:true,
          message:"login Succesfull",
           userData:{name:"minhaj"}
        }
        }
       if(response.data.success){
         dispatch({type:"LOGIN", payload :response.data.userData})
          setUserinFo({
           email:"",
           password:"",
         })
         toast.success(response.data.message)
         route("/newhome")
       }
     }else{
      toast("All fields are mandatory")
     }
       }catch(error){
      toast.error(error.response.data.message)
      }
    }
  return (
    <div>
        <form onSubmit={handlesubmit}>
         <input type="email" onChange={handlechng}  name="email" value={userinFo.email}  />
         <input type="password" onChange={handlechng}  name="password" value={userinFo.password}   />
         <button>submit</button>
        </form>
    </div>
  )
}

export default Login;