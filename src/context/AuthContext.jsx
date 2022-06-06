import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
const [isAuth,setIsAuth]=useState(false)
const navigate= useNavigate();
const login=()=>{
setIsAuth(true)
}
const logout=()=>{
  setIsAuth(false)
}
const clickhandler=()=>{
  if(!isAuth)
  {
    login();
    navigate("/products")
  }
  else{
    navigate("/login")
  }
 

  }

  return <AuthContext.Provider value={{login,logout,isAuth,clickhandler}}>{children}</AuthContext.Provider>;
};
