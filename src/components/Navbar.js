import React from "react";
import { FiMenu } from "react-icons/fi";
import { HiOutlineUser } from "react-icons/hi";
import logo from "../assets/logo.png";
import NavBtn from "./NavBtn";

const Navbar = () => {
  const buttons = [
    { title: "Buy", underline: "-bottom-[1.3rem]   bg-[#fe5857]" },
    { title: "Sell", underline: "-bottom-[1.3rem]" },
    { title: "Rent", underline: "-bottom-[1.3rem]" },
    { title: "Mortgage", underline: "-bottom-[1.3rem]" },
    { title: "Find Realtors", underline: "-bottom-[1.3rem]" },
    { title: "My Home", underline: "-bottom-[1.3rem]" },
    { title: "News & Insights", underline: "-bottom-[1.3rem]" },
    {
      title: "Advertise",
      // border: "border p-1 rounded-[0.3rem] border-gray-400",
    },
  ];
  return (
    <div className="bg-white">
      {" "}
      <div className="flex  justify-between  px-4 items-center max-w-[98vw] sm:max-w-[90vw]  lg:max-w-[85vw]  mx-auto whitespace-nowrap">
        {/* Left Menu */}
        <div className=" lg:hidden flex items-center ">
          
        <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="text-black focus:outline-none font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center" type="button"><FiMenu className="w-7 h-7" /><svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
        {/* <!-- Dropdown menu --> */}
        <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Buy</a>
              </li>
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sell</a>
              </li>
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Rent</a>
              </li>
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Pre-Approval</a>
              </li>
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Just Sold</a>
              </li>
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Home Value</a>
              </li>
            </ul>
        </div>
        </div>
        {/* Mid Logo */}
        <div className="shrink-0 pr-2">
          {/* Logo */}
          <div className=" -my-[0.7rem] ">
            <img src={logo} alt="logoimg" className="w-[6.2rem]  shrink-0" />
          </div>
        </div>
        {/* Links */}
        <div className="hidden lg:flex   ">
          <ul className="flex   space-x-1 items-center     py-4 ">
            {buttons.map((button) => (
              <NavBtn
                title={button.title}
                border={button.border}
                underline={button.underline}
              />
            ))}
          </ul>
        </div>
        {/* Right Authentification */}
        <div className="flex h-full items-center  lg:hidden">
          <div className="w-10 h-10 bg-[#fe5857] rounded-full text-white flex items-center justify-center ">
            <HiOutlineUser className="text-[28px] " />
          </div>
        </div>

        <div className="hidden lg:flex   items-center pl-6 text-[15px]">
          <button>Log in</button>
          <div className="   bg-[#fe5857] py-[6px] text-white rounded-full px-4 ml-6 flex items-center ">
            <button>Sign up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;


