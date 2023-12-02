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
      <div>
        <button>Student</button>
        <button>Instructor</button>
      </div>
      <form onSubmit={submitHandler}>
        {/* first name and last name done */}
        <div>
          <label>
            <p>
              First Name <sup>*</sup>
            </p>
            <input
              required
              type="text"
              name="firstname"
              value={formData.firstname}
              placeholder="Enter First Name"
              onChange={changeHandler}
            />
          </label>
          <label>
            <p>
              Last Name <sup>*</sup>
            </p>
            <input
              required
              type="text"
              name="lastname"
              onChange={changeHandler}
              placeholder="Enter Last Name"
              value={formData.lastname}
            />
          </label>
        </div>

        <label>
          <p>
            E-mail address<sup>*</sup>
          </p>
          <input
            required
            type="text"
            name="email"
            value={formData.email}
            placeholder="Enter Last Name"
            onChange={changeHandler}
          />
        </label>
        {/* create and confirm password */}
        <div>
          <label>
            <p>
              Create Password <sup>*</sup>
            </p>
            <input
              required
              type={showPassword ? "text" : "password"}
              name="password"
              onChange={changeHandler}
              placeholder="Create Enter Password"
              value={formData.password}
            />
            <span onClick={() => setShowPassword((prev) => !prev)}>
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </label>
          {/* Confirm password */}
          <label>
            <p>
              Confirm Password <sup>*</sup>
            </p>
            <input
              required
              type={showPassword ? "text" : "password"}
              name="confirmpassword"
              onChange={changeHandler}
              placeholder="confirm Enter Password"
              value={formData.confirmpassword}
            />
            <span onClick={() => setShowPassword((prev) => !prev)}>
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </label>
        </div>
        <button>Create Account</button>
      </form>
    </div>
  );
};

export default SignUpForm;
