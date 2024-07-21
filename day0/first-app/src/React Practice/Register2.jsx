import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Register2 = () => {
    const route = useNavigate();
    const [userInput,setUserInput]=useState({name:"",email:"",password:""})
   console.log(userInput,"userInput");
    function handlChange(e){
       setUserInput({...userInput,[e.target.name]:e.target.value});
    }
   async function handlsubmit(e){
       e.preventDefault();
       try{
       if(userInput.name && userInput.email && userInput.password){
        const response ={
        data:{
          success:true,
          message:"Login Succesfull",
          }

        }
        if(response.data.success){
          setUserInput({name:"",email:"",password:""})
           toast(response.data.message)
           route("/newhome")
        }
        }else{
        toast("all fields are requird")
        }
       }catch(error){
        alert("error")
       }
    }
  return (
    <div>
      <form onSubmit={handlsubmit}>
        <h1>Registration form</h1>
        <label htmlFor="">name</label>
        <input type="text" name='name' value={userInput.name}  onChange={handlChange}/>
        <br/>
        <label htmlFor="">email</label>
        <input type="email" name='email' value={userInput.email} onChange={handlChange} />
        <br/>
        <label htmlFor="">Password</label>
        <input type="password" name='password' value={userInput.password} onChange={handlChange} />
        <br />
         <button>submit</button>
      </form>
    </div>
  )
}

export default Register2;