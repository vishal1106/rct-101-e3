import "./App.css";
 import Login from "./pages/Login"
import Home from "./pages/Home"
import Navbar from "./components/Navbar/Navbar"
 import {Routes,Route} from "react-router-dom"
 import Products from "./components/Products/Products"
function App() {
  return (
    <div className="App">
    <Navbar/>
    <Routes>
      <Route path="/" element={ <Home/>}> </Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/products" element={<Products/>} ></Route>
    </Routes>

   
    </div>
  );
}

export default App;
