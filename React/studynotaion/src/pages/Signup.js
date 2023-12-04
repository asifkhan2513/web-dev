import React from "react";
import Template from "../Components/Template";
import signupImg from "../assets/signup.png";

const Signup = ({ setIsLoggedIn }) => {
  return (
    <Template
      title="join the million learning code with studynotion for free "
      desc1="build skill for today, Tommorrow and beyond"
      desc2="Education to future proof your Carear"
      formtype="signup"
      image={signupImg}
      setIsLoggedIn={setIsLoggedIn}
    />
  );
};

export default Signup;
