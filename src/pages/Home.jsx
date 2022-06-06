import React, { useContext } from "react";
import Products from "../components/Products/Products"
import { AuthContext } from "../context/AuthContext";
import Login from "./Login";
const Home = () => {
  const {isAuth}=useContext(AuthContext)
   

if(!isAuth)
{
  return <Login/>
}
 else{
  return <Products/>
 }
  
  
 
};

export default Home;
