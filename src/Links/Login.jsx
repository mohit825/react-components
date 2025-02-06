import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate("/accordion");
    // console.log("button clicked");
  };

  return (
    <div>
      Login Page
      <button onClick={onClickHandler}>Login</button>
    </div>
  );
};

export default Login;
