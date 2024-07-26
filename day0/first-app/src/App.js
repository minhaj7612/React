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
import TodoPracticeSecond from "./6-6-24/TodoPracticeSecond"
import Memo from "./29-6-24/Memo";
import USeCallback from "./29-6-24/UseCallback";
import Usememo from "./29-6-24/Usememo";
import Memo2 from "./29r-6-24/Memo2";
import UseCallback2 from "./29r-6-24/UseCallback2";
import Usememo2 from "./29r-6-24/Usememo2";
import UseRef from "./30-6-24/UseRef";
import UseRef2 from "./30-6-24/UseRef2";
import Login2 from "./React Practice/Login2";
import Register2 from "./React Practice/Register2";
import UseRef3 from "./30-6-24/UseRef3"
import Cart from "./16-7/Cart";
import Useref4 from "./30-6-24/Useref4"
import AdminLogin from "./8-6-24/AdminLogin";
import AdminRegister from "./8-6-24/AdminRegister";
import ProductCreate from "./8-6-24/ProductCreate";
import GetCurrentproduct from "./8-6-24/GetCurrentproduct";
import Navbar from "./14-7-24/Navbar";


function App() {
  return (
  
   <div className="App">
     <Navbar/>
    <Routes>
    <Route path="/" element={<TodoPracticeSecond/>}/> 
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
    <Route path="/memo" element={<Memo/>}/>
    <Route path="/usecallback" element={<USeCallback/>}/>
    <Route path="/usememo" element={<Usememo/>}/>
    <Route path="/memo2" element={<Memo2/>}/>
    <Route path="/usecallbk2" element={<UseCallback2/>}/>
    <Route path="/usememo2" element={<Usememo2/>}/>
    <Route path="useref" element={<UseRef/>}/>
    <Route path="useref2" element={<UseRef2/>}/>
    <Route path="/loginPrac" element={<Login2/>}/>
    <Route path="/register2" element={<Register2/>}/>
    <Route path="/useRef3" element={<UseRef3/>}/>
    <Route path="/useref4" element={<Useref4/>}/>
    <Route path="/cart" element={<Cart/>}/>
    <Route path="/adminRegister" element={<AdminRegister/>}/>
    <Route path="/adminLogin" element={<AdminLogin/>}/>
    <Route path="/addProduct" element={<ProductCreate/>}/>
    <Route path="/getProduct" element={<GetCurrentproduct/>}/>
</Routes> 
   </div>

  );
}

export default App;
