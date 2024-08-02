import React, { useState } from 'react'
import { useEffect } from 'react';
import Api from '../AxiosConfigue';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


const WishListProduct = () => {
  const [wishProduct,setWishProduct]=useState([]);
  const router= useNavigate();
  console.log(wishProduct,"wishProduct");
  async  function GetwishlistProduct(){
          try{
              const response = await Api.get("/user/get-wishlist-product");
              if(response.data.success){
                setWishProduct(response.data.WishListProduct)
              }
          }catch(error){
            toast.error(error?.response?.data?.error || error.message);
          }
    }

    useEffect(()=>{
        GetwishlistProduct();
    },[])
  return (
    <div>
       <h2>WishListProduct</h2>
    <div style={{display:"flex",width:"90%",alignItems:"center",flexWrap:"wrap",margin:"60px auto",gap:"10px"}}>
    {wishProduct.map((prdct)=>(
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

export default WishListProduct