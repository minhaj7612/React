import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Api from "../AxiosConfigue/index.js";
import toast from "react-hot-toast";
import { Authcontext } from "../Context/Authcontext.js";



const SingleProductPage = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState({});
  const {state}=useContext(Authcontext);


  async function AddtoWishList(){
    try{
      const response = await Api.post("/user/add-to-wishlist",{
       userId:state?.user?.userId,
       productId: id,
     });
     if(response.data.success){
       toast.success(response.data.message)
     }

   }catch(error){
    toast.error(error?.response?.data?.error || error.message);
   }
  }


  async function AddTocart(){
    try{
       const response = await Api.post("/user/add-to-cart",{
        userId:state?.user?.userId,
        productId: id,
      });
      if(response.data.success){
        toast.success(response.data.message)
      }

    }catch(error){
     console.log(error)
    }
  }

  async function GetSingleProductData() {
    setLoading(true);
    try {
      const response = await Api.post("/product/get-single-product", {
        productId: id,
      });
      if (response.data.success) {
        setLoading(false);
        setProduct(response.data.product);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (id) {
      GetSingleProductData();
    }
  }, [id]);
  return (
    <div>
      <h1>Single Product Page</h1>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div style={{ display: "flex", alignItems:"center", justifyContent: "space-around" }}>
          <div style={{width:"50%"}}>
            <img style={{width:"100%"}} src={product.image} />
          </div>
          <div>
            <h1>Name : {product.name}</h1>
            <h1>Price : {product.price}</h1>
            <h1>Category : {product.category}</h1>
            <h1>Quantity :{product.quantity}</h1>
            <button style={{border:"none",color:"white",background: "black",
              padding:"16px",borderRadius:"6px",cursor: "pointer", margin:"0px 10px"}} onClick={AddtoWishList}>Add to wishList</button>
            <button style={{border:"none",color:"white",background: "black",
              padding:"16px",borderRadius:"6px",cursor: "pointer", margin:"0px 10px"}} onClick={AddTocart}>Add to cart</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleProductPage;


// const SingleProductpage = () => {
//     const [singleProduct,setSingleProduct]=useState({});
//       const id =useParams();
//        console.log(id,"id")

//   async function getSinglProduct(id){
//     try{
//         // const response = await Api.get(`/product/get-single-product/ ${id}`);
//         const response= await Api.post("/product/get-single-product",{
//            productId:id,
//         })
//        if(response.data.success){
//         setSingleProduct(response.data.product)
//        }

//     }catch(error){
//     console.log(error,"error")
//     }
//  }

//  useEffect(()=>{
//     if(id){
//         getSinglProduct();
//     }
//  },[id])

//   return (
//     <div>
//         <h1>SingleProductpage</h1>
//         {
//           <div>
//             <div><img src={singleProduct.image} alt="" /></div>
//             <div>
//                 <h3>{singleProduct.name}</h3>
//             </div>
//         </div>
//         }
//     </div>
//   )
// }

// export default SingleProductpage