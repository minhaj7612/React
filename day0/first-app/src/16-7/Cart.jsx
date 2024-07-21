import React, { useEffect } from 'react'
import toast from 'react-hot-toast'
import Api from '../AxiosConfigue'

const Cart = () => {

   async function getAllcartProd(){

    try{
     const response= await Api.get("/user/get-allCart-product")
       if(response.data.success){
         toast.success(response.data.message)
         }
      }
      catch(error){
      console.log(error,"error")  
      toast.error(error.response.data.error)
     }
    }
   

    useEffect(()=>{
      
    getAllcartProd();
  
  },[])

  return (

    <div>
    cart
    </div>
  )
}

export default Cart