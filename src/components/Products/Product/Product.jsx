import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../../context/CartContext";

const Product = () => {
  // Note: this id should come from api
const {setCart,cart}=useContext(CartContext)
   const [item, setItem]=useState([]);
   const [count,setCount]=useState(0)
  
   useEffect(()=>{
     fetch("http://localhost:8080/products")
     .then((r)=>r.json())
     .then((d)=>{
       setItem(d)
       
     })  
   },[])
 

  return (
  <div>
    {
      item.map((el)=>{
       return <div data-cy={`product-${el.id}`}>
       
        <h3 data-cy="product-name">{el.name}</h3>
        <h6 data-cy="product-description">{el.description}</h6>
        <button data-cy="product-add-item-to-cart-button" onClick={()=>setCart(el) }>Add to cart</button>
        <div>
          <button data-cy="product-increment-cart-item-count-button" onClick={()=>setCount(count+1)}>+</button>
          <span data-cy="product-count">
            { count }
          </span>
          <button data-cy="product-decrement-cart-item-count-button" onClick={()=>setCount(count-1)}>-</button>
          <button data-cy="product-remove-cart-item-button">Remove</button>
        </div>
      </div>
      })
    }
    
    </div>
  );
};

export default Product;
