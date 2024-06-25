import React from 'react'
import axios from 'axios'
import { useState,useEffect} from 'react'; 


function Loadin() {
    const [allProducts, setAllProducts] = useState([]);
    const [laoding,setLoading]=useState(false);
    console.log(allProducts, "allProducts");

    async function GetProducts() {
        // alert("Hi from get Products.");
        setLoading(true);
        try {
          const response = await axios.get("https://fakestoreapi.com/products");
            console.log(response.data);
            setLoading(false);
          setAllProducts(response.data);
        } catch (error) {
          console.log(error);
        }
      }
      useEffect(() => {
        // api call to backend
        GetProducts();
      }, []);

    return (
    <div>
      <h1>All Products</h1>
      { laoding ?

           (
            <div
            style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
             }}>
           <div
            style={{width: "23%",height: "350px",border: "2px solid black", marginBottom: "20px",}} >
            <img style={{ width: "90%", height: "70%" }} alt='loading...'/>
            <p>loading...</p>
            <p>loading...</p>
          </div>
          <div
            style={{width: "23%",height: "350px",border: "2px solid black", marginBottom: "20px",}} >
            <img style={{ width: "90%", height: "70%" }} alt='loading...'/>
            <p>loading...</p>
            <p>loading...</p>
          </div>
          <div
            style={{width: "23%",height: "350px",border: "2px solid black", marginBottom: "20px",}} >
            <img style={{ width: "90%", height: "70%" }} alt='loading...'/>
            <p>loading...</p>
            <p>loading...</p>
          </div>
          <div
            style={{width: "23%",height: "350px",border: "2px solid black", marginBottom: "20px",}} >
            <img style={{ width: "90%", height: "70%" }} alt='loading...'/>
            <p>loading...</p>
            <p>loading...</p>
          </div>
          <div
            style={{width: "23%",height: "350px",border: "2px solid black", marginBottom: "20px",}} >
            <img style={{ width: "90%", height: "70%" }} alt='loading...'/>
            <p>loading...</p>
            <p>loading...</p>
          </div>
          <div
            style={{width: "23%",height: "350px",border: "2px solid black", marginBottom: "20px",}} >
            <img style={{ width: "90%", height: "70%" }} alt='loading...'/>
            <p>loading...</p>
            <p>loading...</p>
          </div>
          <div
            style={{width: "23%",height: "350px",border: "2px solid black", marginBottom: "20px",}} >
            <img style={{ width: "90%", height: "70%" }} alt='loading...'/>
            <p>loading...</p>
            <p>loading...</p>
          </div>    
          <div
            style={{width: "23%",height: "350px",border: "2px solid black", marginBottom: "20px",}} >
            <img style={{ width: "90%", height: "70%" }} alt='loading...'/>
            <p>loading...</p>
            <p>loading...</p>
          </div>
          </div>
          ):

          (<div
           style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
        >
        {allProducts.map((product) => (
          <div
            style={{width: "23%",height: "350px",border: "2px solid black", marginBottom: "20px",}} >
            <img style={{ width: "90%", height: "70%" }} src={product.image} />
            <p>Title:{product.title}</p>
            <p>Price :{product.price}</p>
          </div>
        ))}
      </div>)}
    </div>
  )
}

export default Loadin