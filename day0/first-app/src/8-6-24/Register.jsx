import React, { useState } from 'react'
import toast from 'react-hot-toast';
import "./Register.css"


function Register() {
  
  const[getData,setGetData]=useState({name:"", email:"", password:"",});
  console.log(getData,'getdata')

  function handleInput(e){
    setGetData({...getData, [e.target.name] :e.target.value});
   
  }

 async function handlsubmit(e){
      e.preventDefault();
     try{
    if(getData.name && getData.email && getData.password){
      const response={data:{success:true, message:"Register Succesfull"}}
      if(response.data.success){
        setGetData({
          name:"",
          email:"",
          password:"",
        })
        toast.success(response.data.message)


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
        <form onSubmit={handlsubmit} >
          <div className='sbmt' >

          <label htmlFor="">Name</label>
          <input onChange={handleInput} type='text' name='name' value={getData.name} />
          <br />
          <label htmlFor="">email</label>
          <input onChange={handleInput}  type='email' name='email' value={getData.email} />
          <br />
          <label htmlFor="">password</label>
          <input onChange={handleInput}  type='password' name='password' value={getData.password} />
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