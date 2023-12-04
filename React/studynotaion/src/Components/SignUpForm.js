import React, { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router";

const SignUpForm = ({ setIsLoggedIn }) => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }
  const navigate = useNavigate();
  function submitHandler(e) {
    e.preventDefault();
    if (formData.password !== formData.confirmpassword) {
      toast.error("Password do not match");
      return;
    }
    setIsLoggedIn(true);
    toast.success("Account Created");
    const accountdata = {
      ...formData,
    };
    console.log("printing account data");
    console.log(accountdata);
    navigate("/dashboard");
  }

  return (
    <div>
      {/* student isgtaructure tab */}
      <div className=" flex gap-x-4">
        <button className="text-white border rounded-full">Student</button>
        <button className="text-white border rounded-full">Instructor</button>
      </div>
      <form onSubmit={submitHandler}>
        {/* first name and last name done */}
        <div className="flex gap-x-4">
          <label className="w-full">
            <p className="text-richblack-5 text-[0.875rem] leading-[1.375rem]">
              First Name <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="text"
              name="firstname"
              value={formData.firstname}
              placeholder="Enter First Name"
              onChange={changeHandler}
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]  "
            />
          </label>
          <label className="w-full">
            <p className="text-richblack-5 text-[0.875rem] leading-[1.375rem]">
              Last Name <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="text"
              name="lastname"
              onChange={changeHandler}
              placeholder="Enter Last Name"
              value={formData.lastname}
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]  "
            />
          </label>
        </div>

        <label>
          <p className="text-richblack-5 text-[0.875rem] leading-[1.375rem]">
            E-mail address<sup className="text-pink-200">*</sup>
          </p>
          <input
            required
            type="text"
            name="email"
            value={formData.email}
            placeholder="Enter Last Name"
            onChange={changeHandler}
            className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]  "
          />
        </label>
        {/* create and confirm password */}
        <div className="flex gap-x-4">
          <label className="w-full relative">
            <p className="text-richblack-5 text-[0.875rem] leading-[1.375rem]">
              Create Password <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type={showPassword ? "text" : "password"}
              name="password"
              onChange={changeHandler}
              placeholder="Create Enter Password"
              value={formData.password}
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]  "
            />
            <span
              className="absolute right-3 top-[35px] cursor-pointer "
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>
          {/* Confirm password */}
          <label className="w-full relative">
            <p className="text-richblack-5 text-[0.875rem] leading-[1.375rem]">
              Confirm Password <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type={showPassword ? "text" : "password"}
              name="confirmpassword"
              onChange={changeHandler}
              placeholder="confirm Enter Password"
              value={formData.confirmpassword}
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]  "
            />
            <span
              className="absolute right-3 top-[34px] cursor-pointer "
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>
        </div>
        <button className="w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
