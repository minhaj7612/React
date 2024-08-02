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
            route("/")
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
    <div style={{display:"flex", alignItems:"center",background:"black",color:"white",cursor:"pointer",border:"1px solid black",justifyContent:"space-between",
      border: "1px solid black",
      padding: "0px 30px"}}>
      <div>
      <h2>Logo</h2>
      </div>

      <div style={{display:"flex",gap:"30px",alignItems:"center"}}>
      <div onClick={()=>route("/newhome")}>Home</div>
      {state?.user?.role == "user" && (<div onClick={()=>route("/getProduct")}>All Products</div>)} 
      {state?.user?.role == "user" && (<div onClick={()=>route("/cart")}>Cart</div>)} 
      {state?.user?.role == "user" && (<div onClick={()=>route("/wishlist")}>Wish List</div>)} 
      {state?.user?.role == "admin" && (<div onClick={()=>route("/addProduct")}>Add Product</div>)} 
      {state?.user?.role == "admin" && (<div onClick={()=>route("/added-product")}>Added Product</div>)} 
      {
        state?.user?(
          <><div onClick={LogOut} className='logout'>LogOut</div></>
        ):
        (<><div>Login/Register</div></> )
      }
     </div>
      
    </div>
  )
}

export default Navbar