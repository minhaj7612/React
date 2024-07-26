import React, { useContext } from 'react'
import Api from '../AxiosConfigue'
import { Authcontext } from '../Context/Authcontext';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';



const Navbar = () => {
  const {state,dispatch} = useContext(Authcontext);
  console.log(state,"stateinNavbar");
const route=useNavigate();

async function LogOut(){
        try{
           const response= await Api.get("/auth/user-logout");
           if(response.data.success){
            dispatch({type:"LOGOUT",payload:null})
            toast.success(response.data.message)
            route("/logindetail")
           }else{
            toast.error('Logout failed');
           }
        }catch(error){
          toast.error(error?.response?.data?.error || 'An error occurred during logout');
        }
    }


    
async function AdminLogout(){
  try{
     const response= await Api.get("/admin/admin-logout");
     if(response.data.success){
      dispatch({type:"LOGOUT",payload:null})
      toast.success(response.data.message)
      route("/adminLogin")
     }else{
      toast.error('Logout failed');
     }
  }catch(error){
    toast.error(error?.response?.data?.error || 'An error occurred during logout');
  }
}

  return (
    <div style={{display:"flex", alignItems:"center", justifyContent:"space-around",border:"1px solid black"}}>
      <h2>Logo</h2>
      <h2>Home</h2>

      {state?.user?.role == "admin" && (<h2 onClick={()=>route("/addProduct")}>Add Product</h2>)} 
      {
        state?.user?(
          <><h2 onClick={LogOut} className='logout'>LogOut</h2></>
        ):
        (<><h2>Login/Register</h2></> )
      }
      
      
    </div>
  )
}

export default Navbar