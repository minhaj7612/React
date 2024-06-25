import React, { useState } from 'react'


function TodoPrac() {
    const [inputvalue,setInputval] = useState("");
    const [newinput,setNewinput]=useState([]);

    const Inputhandle=(e)=>{
      console.log(e.target.value)
      setInputval(e.target.value)
    }
    function handlesubmit (){
        if(inputvalue===""){
            alert("plz write somthin!")
        }else{
            setNewinput([...newinput,inputvalue]);
            console.log(...newinput,"before")
            setInputval("")
        }
       
    }
    function dltHandler(){
        
    }
   
  return (
    <div>
    
        <input type="text" onChange={Inputhandle} value={inputvalue} id="" />
        <button onClick={handlesubmit}>submit</button>
        {newinput.map((elem,i)=>
        <div>
          <h3>{i+1}.{elem}</h3>
          <button onClick={dltHandler}>Dellete</button>
        </div>
        )}
    </div>
  )
}

export default TodoPrac