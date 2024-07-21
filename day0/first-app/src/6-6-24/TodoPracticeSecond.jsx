import React, { useState } from 'react'

const TodoPracticeSecond = () => {
    const [input,setInput]=useState("");
    const [addInput,setaddInput]=useState([]);
     console.log(addInput,"addInput");

//   function handlinput(e){
//     console.log(e.target.value);
//     // setaddInput(e.target.value);
//   }
function handlclick(){
    if(input === ""){
        alert ("plz write something")
    }else{
        setaddInput([...addInput,input])
        setInput("");
     
    }
}
function dlt(i){
    console.log("remove")
   const arr=[...addInput]
   arr.splice(i,1)
   setaddInput(arr);
}
  return (
    <div>
        <input type="text"  onChange={((e)=>setInput(e.target.value)) } />
        <button onClick={handlclick}>add todo</button>

        <div>
            {addInput.map((data,i)=>
                <div key={i}>
                  <p>{data}</p>
                  <button onClick={dlt}>Remove</button>
                </div>
            
            ) 
            }
          
        </div>
    </div>
  )
}

export default TodoPracticeSecond