import "./App.css"
import {Routes,Route }from "react-router-dom"
import Contact from './Contact';
import Usestate from "./25-5-2024/Usestate";
import UseEffect from "./26-5-2024/Useeffect";
import UseEffect2 from "./29-5-2024/Usestate4";
import Useeffect3 from "./29-5-2024/Useeffect3";
import AllProducts from "./2-6-24/Allproduct";
import Todo from "./6-6-24/Todo";
import TodoPrac from "./6-6-24/TodoPrac";
import Register from "./8-6-24/Register";
import Login from "./8-6-24/Login";
import Loadin from "./11-6-24/Loadin";
import Weather from "./11-6-24/Weather";
import Weathhtm from "./11-6-24/Weathhtm";
import Reducer from "./15-6-24/Reducer";
import NewHome from "./NewHome";
import UseApicalling from "./11-6-24/UseApicalling"
import ReduxCounter from "./20-6-24/ReduxCounter";


function App() {
  return (

   <div className="App">
    <Routes>
    <Route path="/Contact" element={<Contact/>}/>
    <Route path="/Use-state" element={<Usestate/>}/>
    <Route path="/Use-effect" element={<UseEffect/>}/>
    <Route path="/Use-effect2" element={<UseEffect2/>}/>
    <Route path="/Use-effect3" element={<Useeffect3 />}/>
    <Route path="/All-product" element={<AllProducts/>}></Route>
    <Route path="/todo" element={<Todo/>}></Route>
    <Route path="/todoSecond" element={<TodoPrac/>}></Route>
    <Route path="/register" element={<Register/>}></Route>
    <Route path="/logindetail" element={<Login/>}></Route>
    <Route path="/loading"  element={<Loadin/>}/>
    <Route path="/weather-2" element={<Weather/>}/>
    <Route path="/reducer" element={<Reducer/>}/>
    <Route path="/newhome" element={<NewHome/>}/>
    <Route path="/userdata" element={<UseApicalling/>}/>
    <Route path="/reduxcounter" element={<ReduxCounter/>}/>
    
</Routes> 
   </div>

  );
}

export default App;
