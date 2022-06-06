import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

// import { AuthContext } from "../context/AuthContext";

const Login = () => {
const {clickhandler}=useContext(AuthContext)
  return (
    <div style={{display:"flex",flexDirection:"column",gap:"20px"
    ,margin:"auto",width:"300px",marginTop:"10px"}}>
      <input data-cy="login-email"  placeholder="Enter the Email"/>
      <input data-cy="login-password" placeholder="Enter the password"/>
      <button data-cy="login-submit"  onClick={clickhandler}>Login</button>
    </div>
  );
};

export default Login;
