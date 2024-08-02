import React, { useContext } from 'react'
import Api from '../AxiosConfigue';
import { useEffect, useState } from 'react'
import { Authcontext } from '../Context/Authcontext';


const AddedProduct = () => {
 
  const [ProductData,setProductData]=useState([]);

  const {state}=useContext(Authcontext);

  console.log(state,"stateAddedP")
  console.log(ProductData,"ProductData")
  async function GetProduct(){
    try{
    const response = await Api.get("/admin/your-added-product",{
        params:{ userId: state?.user?.userId }
    });
      // console.log(response.data.product)
      setProductData(response.data.products)
    }catch(error){
      console.log(error);
    }
   }

   useEffect(()=>{
   if(state){
    GetProduct();
   }
   },[state])

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


export default AddedProduct;