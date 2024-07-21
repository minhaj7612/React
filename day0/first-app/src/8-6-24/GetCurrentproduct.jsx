import React, { useEffect, useState } from 'react'
import Api from '../AxiosConfigue';

const GetCurrentproduct = () => {
 
  const [ProductData,setProductData]=useState([]);
console.log(ProductData,"ProductData")
async function GetProduct(){
    try{
    const response = await Api.get("/product/get-all-product");
      // console.log(response.data.product)
      setProductData(response.data.product)
    }catch(error){
      console.log(error);
    }
   }

   useEffect(()=>{
    GetProduct();
   },[])

  return (
    <div>
      <h1>Products</h1>
    <div style={{display:"flex",width:"90%",alignItems:"center",flexWrap:"wrap",margin:"60px auto",gap:"10px"}}>
    {ProductData.map((prdct)=>(
      <div style={{width:"24%"}}>
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

export default GetCurrentproduct;