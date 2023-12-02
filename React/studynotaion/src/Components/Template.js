import React from "react";
import frameImage from "../assets/frame.png";
import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";

const Template = ({
  title,
  desc1,
  desc2,
  formtype,
  setIsLoggedIn,
  framImage,
  image,
}) => {
  return (
    <div>
      <div>
        <h1>{title}</h1>
        <p>
          <span>{desc1}</span>
          <span>{desc2}</span>
        </p>
        {formtype === "signup" ? (
          <SignUpForm setIsLoggedIn={setIsLoggedIn} />
        ) : (
          <LoginForm setIsLoggedIn={setIsLoggedIn} />
        )}
        <div>
          <div></div>
          <p>OR</p>
          <div></div>
        </div>
        <button>Sign up with google</button>
      </div>
      <div>
        <img
          src={frameImage}
          alt="pattern"
          height={558}
          width={504}
          loading="lazy"
        />
        <img
          src={image}
          alt="student"
          height={558}
          width={498}
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Template;
