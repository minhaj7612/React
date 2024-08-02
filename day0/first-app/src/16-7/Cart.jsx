import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import Api from '../AxiosConfigue'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const router=useNavigate();
   const [product,setProduct]=useState([]);
   console.log(product,"product")
   async function getAllcartProd(){

    try{
     const response= await Api.get("/user/get-allCart-product")
       if(response.data.success){
         setProduct(response.data.CartProduct)
         }
      }
      catch(error){
      console.log(error,"error")  
     }
    }
   

    useEffect(()=>{
      
    getAllcartProd();
  
  },[])

  return (

    <div>
      <h1>Cart</h1>
    <div style={{display:"flex",width:"90%",alignItems:"center",flexWrap:"wrap",margin:"60px auto",gap:"10px"}}>
    {product.map((prdct)=>(
      <div style={{width:"24%",cursor:"pointer"}}  onClick={()=>router(`/singleProduct/${prdct._id}`)}>
        <img style={{width:"100%",height:"300px",objectFit:"cover"}} src={prdct.image} alt="" />
        <div>
          <div style={{display:"flex",justifyContent:"space-between"}}><span>Category:{prdct.category}</span>
          <span>{prdct.name}</span></div>
          <div style={{textAlign:"left"}}>Price:{prdct.price}</div>
          
        </div>

      </div>
    ))
  }
    </div>
    </div>
  )
}

export default Cart