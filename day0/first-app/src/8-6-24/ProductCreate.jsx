import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Api from "../AxiosConfigue";
import { Authcontext } from "../Context/Authcontext";
import { useContext } from "react";


const ProductCreate = () => {
    const{state,dispatch}=useContext(Authcontext)
    console.log(state,"stateinaddProduct")
    const [disable, setDisable] = useState(true);
    const router = useNavigate();
    const [productData, setProductData] = useState({
      name: "",
      price: "",
      category: "",
      quantity: "",
      image: "",
    });
 
     console.log(productData, "productData");
    function handleChange(event) {
      // console.log(event.target.value, event.target.name);
      setProductData({ ...productData, [event.target.name]: event.target.value });
      // Obj["awdiz"]
    }
  
    async function handleSubmit(e) {
      e.preventDefault();
      // api call to backend
      try {
        if (
          productData.name &&
          productData.price &&
          productData.category &&
          productData.quantity &&
          productData.image
        ) {
          const response = await Api.post("/product/create-new-product",{productData});
          // const response = {
          //   data: { success: true, message: "Regsiter successfull." },
          // };
          if (response.data.success) {
            setProductData({
              name: "",
              price: "",
              category: "",
              quantity: "",
              image: "",
            });
            router("/getProduct");
            toast.success(response.data.message);
          }
        } else {
          throw Error("All fields are mandatory.");
          // toast.error("All fields are mandatory.");
        }
      } catch (error) {
        console.log(error, "error");
        //   console.log(error);
        //   error =  { data : { success : false, message : "Password is invalid."}}
        toast.error(error.response.data.error);
      }
    }

    useEffect(()=>{
      if(state?.user && state?.user?.role !== "admin"){
        toast.error("Only admin is allow to acces this Page")
        router("/adminLogin")
      }
    },[state])
  
    
  
  
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <h1>Add New Product</h1>
          <label>Name : </label>
          <input
            type="text"
            onChange={handleChange}
            name="name"
            value={productData.name}
          />
          <br />
          <label>Price : </label>
          <input
            type="number"
            onChange={handleChange}
            name="price"
            value={productData.price}
          />
          <br />
          <label>Category:</label>
          <input
            type="text"
            onChange={handleChange}
            name="category"
            value={productData.category}
          />
          <br />
          <label>Quantity :</label>
          <input
            type="number"
            onChange={handleChange}
            name="quantity"
            value={productData.quantity}
          />
          <label>Image url : </label>
          <input
            type="url"
            onChange={handleChange}
            name="image"
            value={productData.image}
          />
          <br />
    
          <input type="submit" value="Add" />
        </form>
      </div>
    );
  };
  
 export default ProductCreate