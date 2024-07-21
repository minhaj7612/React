import React, { useState } from 'react'
import toast from 'react-hot-toast';
import "./Register.css"
import Api from "../AxiosConfigue"


function Register() {
  
  const[userData,setUserData]=useState({name:"", email:"", password:"",});

  function handleInput(e){
    setUserData({...userData,[e.target.name]:e.target.value});
   
  }

 async function handlsubmit(e){
      e.preventDefault();
     try{
    if(userData.name && userData.email && userData.password){
       const response = await Api.post("/auth/register",{userData})
      // const response = {data:{success:true, message:"Register Succesfull"}}

      if(response.data.success){
        setUserData({
          name: "",
          email: "",
          password: "",
        });
        toast.success(response.data.message);
       }
       }
       else{
        throw Error("All fields are mandatory.");
       }
      }

      catch(error){
        console.log(error, "error");
        toast.error(error.response.data.error);

     }
  }
  return (
    <div>
        <form onSubmit={handlsubmit} >
          <div className='sbmt' >
         <label htmlFor="">Name</label>
          <input onChange={handleInput} type='text' name='name' value={userData.name} />
          <br />
          <label htmlFor="">email</label>
          <input onChange={handleInput}  type='email' name='email' value={userData.email} />
          <br />
          <label htmlFor="">password</label>
          <input onChange={handleInput}  type='password' name='password' value={userData.password} />
           <br />
            <button>
              submit
            </button>
            </div>
           
        </form>
    </div>
  )
}

export default Register