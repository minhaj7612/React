import React, { useEffect, useState } from 'react'

function Todo() {
  const [todo, setTodo] = useState("");
  const [newtodo, setNewtodo] = useState([]);


   function Changehandlr(event) {
    event.preventDefault();
    setTodo(event.target.value)
  }
  function submitHandlr() {
    if (todo === "") {
      alert("You must write something!")
    } else {
      console.log(setNewtodo([...newtodo, todo]));
      setTodo("");
    }

}
  function Dlthandle(index) {
    const taskcopy = [...newtodo]
    taskcopy.slice(index, 1);
    setNewtodo(taskcopy);

  }

  return (
    <div style={{display: "flex", width: "50%",margin: "0 auto",flexDirection: "column",alignItems: "center",paddingTop: "100px",gap: "18px",}}  >
      <input type="text" value={todo} onChange={Changehandlr} />
      <button onClick={submitHandlr}>submit</button>

      {newtodo.map((todos, i) =>
        <div style={{display: "flex",gap: "140px"}} key={i}>
          <p>{i + 1}.{todos}</p>
          <button onClick={Dlthandle}>Dlt</button>
        </div>

      )}
    </div>
  )
}

export default Todo