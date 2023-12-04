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
    <form
      onSubmit={submitHamndler}
      className="flex flex-col w-full gap-y-4 mt-6"
    >
      <label className="w-full">
        <p className="text-richblack-5 text-[0.875rem] leading-[1.375rem]">
          E-Mail Address <sup className="text-pink-200">*</sup>
        </p>
        <input
          required
          type="text"
          value={formData.email}
          onChange={changeHandler}
          placeholder="Enter your E-Mail id"
          name="email"
          className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]  "
        />
      </label>
      <label className="w-full relative">
        <p className="text-richblack-5 text-[0.875rem] leading-[1.375rem]">
          Password <sup className="text-pink-200">*</sup>
        </p>
        <input
          required
          type={showPassword ? "text" : "password"}
          value={formData.password}
          onChange={changeHandler}
          placeholder="Enter your E-Mail id"
          name="password"
          className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]  "
        />
        <span
          className="absolute right-3 top-[38px] cursor-pointer "
          onClick={() => setShowPassword((prev) => !prev)}
        >
          {showPassword ? (
            <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
          ) : (
            <AiOutlineEye fontSize={24} fill="#AFB2BF" />
          )}
        </span>
        <Link to="#" className="">
          <p className="text-xs text-blue-100 max-w-max ml-auto">
            {" "}
            Forget Password
          </p>
        </Link>
      </label>
      <button className="w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6">
        Sign in
      </button>
    </form>
  );
};

export default LoginForm;
