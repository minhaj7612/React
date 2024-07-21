import React, { useState } from 'react'
import Api from '../AxiosConfigue'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

const AdminRegister = () => {
 const route=useNavigate();
const [adminData,setAdminData]=useState({name:"", email:"", password:""})

console.log(adminData,"adminData")
function handleChange(e){
    setAdminData({...adminData,[e.target.name]:e.target.value})
}

async function handleSubmit(e){
  e.preventDefault();
    try{
     if(adminData.name && adminData.email && adminData.password){

      const response = await Api.post("/admin/register-admin",{adminData});

       if(response.data.success){
        setAdminData({name:"", email:"", password:""});
        toast.success(response.data.message)
        route("/adminLogin")
        }
       }else{
        throw Error("All fields are mandatory.");
       }
      }catch(error){
        console.log(error, "error");
        toast.error(error.message);
      }
    
}
  return (
    <div>
      Admin Register
        <form onSubmit={handleSubmit} action="">
            <input type="text" placeholder='name' name='name' value={adminData.name} onChange={handleChange}/>
            <br />
            <input type="email"  placeholder='email' name='email'  value={adminData.email} onChange={handleChange}/>
            <br />
            <input type="password" placeholder='password' name="password" value={adminData.password} onChange={handleChange}/>
            <br />
            <button>Register</button>
        </form>
    </div>
  )
}

export default AdminRegister