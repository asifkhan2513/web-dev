import React, { useState } from "react";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }
  return (
    <div>
      {/* student isgtaructure tab */}
      <div>
        <button>Student</button>
        <button>Instructure</button>
      </div>
      <form>
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
              onChange={changeHandler}
              placeholder="Enter First Name"
              value={formData.firstname}
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
            name="lastname"
            onChange={changeHandler}
            placeholder="Enter Last Name"
            value={formData.lastname}
          />
        </label>
      </form>
    </div>
  );
};

export default SignUpForm;
