import React from "react";
import logo from "../images/logo.png";
const Navbar = () => {
  return (
    <>
      <div class="navbar bg-base-100 px-12">
        <div class="flex-1">
          <img src={logo} className="w-20" alt="" />
        </div>
        <div class="flex-none">
          <p>
            <span className="text-green-600">BN </span>/ EN
          </p>
        </div>
      </div>
      <div class="navbar bg-base-100 flex-none  px-12">
        <li class="btn btn-ghost text-primary normal-case text-xl mr-6 ml-16">
          HOME
        </li>
        <li class="btn btn-ghost text-secondary normal-case text-xl mr-6">
          PUBLISHERS
        </li>
        <li class="btn btn-ghost text-secondary normal-case text-xl mr-6">
          INFLUENCERS
        </li>
        <li class="btn btn-ghost text-secondary normal-case text-xl mr-6">
          AD FORMATS
        </li>
        <li class="btn btn-ghost text-secondary normal-case text-xl mr-6">
          BLOG
        </li>
        <li class="btn btn-ghost text-secondary normal-case text-xl mr-64">
          CONTACT US
        </li>

        <li class="btn btn-ghost text-center bg-slate-50 rounded-full normal-case text-xl">
          LOGIN
          <li class="btn btn-ghost bg-primary text-white  rounded-full text-xl ml-16 ">
            SIGN UP
          </li>
        </li>
      </div>
    </>
  );
};

export default Navbar;
