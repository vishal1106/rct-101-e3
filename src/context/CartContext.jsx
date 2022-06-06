import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
const [cart,setCart]=useState([])

const [count,setCount]=useState([])
  

  return <CartContext.Provider value={{setCart,cart}}>{children}</CartContext.Provider>;
};
