import React from "react";
import Template from "../Components/Template";
import loginImg from "../assets/login.png";

const Login = ({ setIsLoggedIn }) => {
  return (
    <Template
      title="Welcome Back "
      desc1="build skill for today"
      desc2="Education to future proof your Carear"
      formtype="login"
      setIsLoggedIn={setIsLoggedIn}
      image={loginImg}
    />
  );
};

export default Login;
