import React, { useState } from "react";
import Toast from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
// import Dashboard from "../pages/Dashboard";
// import { Toast } from "react-hot-toast";
const LoginForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }
  function submitHamndler(event) {
    event.preventDefault();
    setIsLoggedIn(true);
    Toast.success("Logged In");
    navigate("/dashboard");
  }
  return (
    <form onSubmit={submitHamndler}>
      <label>
        <p>
          E-Mail Address <sup>*</sup>
        </p>
        <input
          required
          type="text"
          value={formData.email}
          onChange={changeHandler}
          placeholder="Enter your E-Mail id"
          name="email"
        />
      </label>
      <label>
        <p>
          Password <sup>*</sup>
        </p>
        <input
          required
          type={showPassword ? "text" : "password"}
          value={formData.password}
          onChange={changeHandler}
          placeholder="Enter your E-Mail id"
          name="password"
        />
        <span onClick={() => setShowPassword((prev) => !prev)}>
          {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
        </span>
        <Link to="#">Forget Password</Link>
      </label>
      <button>Sign in</button>
    </form>
  );
};

export default LoginForm;
