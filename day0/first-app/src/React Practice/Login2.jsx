import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login2 = () => {

  const route= useNavigate();
  
    const[input,setInput]=useState({
           email:"",
           password:""
       });

       console.log(input);
   

  function handleinput(e){
    setInput({...input,[e.target.name]:e.target.value})
  }
  
  function LoginFunc(e){
    e.preventDefault();
    try{
     if(input.email && input.password){
      const response={
        data:{
          succes:true,
          message:"Succesful Login"
        }
      }
      if(response.data.succes){
        setInput({email:"",password:""})
        alert(response.data.message)
        route("/newhome")
      }
     }
     else{
      alert("input fields are mandatory")
     }
    }
    catch(error){
     console.log(error)
    }
  }

  return (
    <div>
        <input type="text" placeholder='email' value={input.email} name='email' onChange={handleinput}  /><br/>
        <input type='Password' placeholder='password' value={input.password} name='password' onChange={handleinput}  /><br/>
        <button onClick={LoginFunc}>Login</button>
    </div>
  )
}

export default Login2