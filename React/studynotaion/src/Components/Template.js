import React from "react";
import Signup from "../pages/Signup";

export default function Template({
  title,
  desc1,
  desc2,
  image,
  formtype,
  setIsLoggedIn,
}) {
  return (
    <div>
      <div>
        <h1>{title}</h1>
        <p>
          <span>{desc1}</span>
          <span>{desc2}</span>
        </p>
        {formtype==="signup" ? {<SignUpForm/> }:{<LoginForm/>}}
        <div>
          <div></div>
          <p>OR</p>
          <div></div>
        </div>
        <button>
         <p>Sign Up With Google</p>
        </button>
      </div>
      <div>
      <img src={frameImage} alt="Pattern"
          width={558}
          height={504}
          loading="lazy"
          />
           <img src={image} alt="student"
          width={558}
          height={490}
          loading="lazy"
          />  
      </div>
    </div>
  );
}
