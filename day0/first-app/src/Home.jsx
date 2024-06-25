import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Authcontext from "./Context/Authcontext"

function Home() {
  const {state} = useContext(Authcontext);
  const route = useNavigate();


  return (
    <div>
       <h1>Home page -{state?.user?.name}</h1>
      <button onClick={() => route("/logindetail")}>
        Redirect to Routing page.
      </button>
    </div>
  );
}

export default Home;


























// import React, { useContext } from 'react'
// import { Authcontext } from './Context/Authcontext'
// import { useNavigate } from 'react-router-dom';
// import CounterContext from "./Context/CounterContex"

// function Home() {
//   // const {state} = useContext(Authcontext);
//   const {state,increment} = useContext(CounterContext);
//   console.log(state,"state")
//   const router = useNavigate();
//   return (
//     <div>
//     {/* <h1>Home page-{state?.user?.name}</h1> */}
//     <h2>Counter:{state.counter}</h2>
//     <button onClick={() => router("/logindetail")}>
//         Redirect to Routing page.
//       </button>

//     </div>
//    )
// }

// export default Home