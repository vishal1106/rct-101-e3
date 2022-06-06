import React , { useContext }  from "react";
import {Link} from "react-router-dom"
// use react-router Link or NavLink

import { AuthContext } from "../../context/AuthContext";
import { CartContext } from "../../context/CartContext";
const Navbar = () => {

  const {isAuth,clickhandler}=useContext(AuthContext)
const {cart}=useContext(CartContext)



  return (
    <div data-cy="navbar"style={{
      display:"flex",
      justifyContent:"space-between"
    }}>
      <Link data-cy="navbar-home-link" to="/">Logo</Link>
      <div style={{display:"flex",gap:"20px"}}>
      <span data-cy="navbar-cart-items-count"> Cart:{cart.length}</span>
      <button data-cy="navbar-login-logout-button" onClick={clickhandler}>{isAuth ? "Logout":"Login"}</button>
      </div>
  
    </div>
  );
};

export default Navbar;
