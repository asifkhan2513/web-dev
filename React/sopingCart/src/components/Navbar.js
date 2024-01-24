import React from "react";
import { FaCartPlus } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-blue-500">
      <div className=" flex flex-row justify-between">
        <NavLink to="/">
          <div>
            <img src="../assets/logo.png" alt="" className="h-14" />
          </div>
        </NavLink>
        <div>
          <NavLink to="/">
            <div>
              <p>Home</p>
            </div>
          </NavLink>
          <NavLink to="/cart">
            <div>
              <FaCartPlus />
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
