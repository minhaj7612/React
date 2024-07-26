import React, { useContext, useState } from 'react'
import toast from 'react-hot-toast';
import { Authcontext } from '../Context/Authcontext';
import { useNavigate } from "react-router-dom";
import Api from '../AxiosConfigue';

function Login() {

 const {state,dispatch} = useContext(Authcontext);

   const route = useNavigate();
    const [userData,setUserData]=useState({email:"", password:""});

    console.log(userData)
    
   const handlechng=(event)=>{

    setUserData(event.target.value)

    setUserData({ ...userData, [event.target.name]: event.target.value});

    }
    async function handlesubmit(e){
      e.preventDefault();
      try{
     if(userData.email && userData.password){
      const response = await Api.post("/auth/login",{userData}) 
      //  const response=
      //   {data:{
      //     success:true,
      //     message:"login Succesfull",
      //      userData:{name:" welcome minhaj"},
      //   }
      //   }
       if(response.data.success){
         dispatch({type:"LOGIN", payload:response.data.userData})
         setUserData({
           email:"",
           password:"",
         })
         toast.success(response.data.message);
         route("/newhome")
       }else{
        toast.error(response?.data?.error)
       }
     }else{
   throw Error("All fields are mandatory.");
     }
       }catch(error){
        console.log(error, "error");
      //   console.log(error);
      //   error =  { data : { success : false, message : "Password is invalid."}}
      toast.error(error?.response?.data?.error)
      }
    }
  return (
    <div style={{margin:"100px"}}>
        <form onSubmit={handlesubmit}>
         <input type="email" onChange={handlechng}  name="email" value={userData.email}  />
         <br />
         <input type="password" onChange={handlechng}  name="password" value={userData.password}/>
         <br />
         <button>submit</button>
         <br/>
        </form>
        <button onClick={()=>route("/register")}>Register</button>
       <button onClick={()=>route("/adminLogin")}>Admin Login</button>
      <button onClick={()=>route("/adminRegister")}>Admin Register</button>
    </div>
  )
}

export default Login;