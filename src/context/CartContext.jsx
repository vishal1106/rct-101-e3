import React, { createContext, useState ,useEffect} from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
const [cart,setCart]=useState([])




useEffect(()=>{
  fetch(" http://localhost:8080/cartItems")
  .then((r)=>r.json())
  .then((d)=>{
    setCart(d)
    
  })  
},[])



  return <CartContext.Provider value={{setCart,cart}}>{children}</CartContext.Provider>;
};
