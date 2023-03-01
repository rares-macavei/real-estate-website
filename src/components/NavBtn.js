import React from "react";

const NavBtn = ({ title, border, underline, css }) => {
  return (
    <div className={`${css}`}>
      <li className="relative  group text-[14px] whitespace-nowrap">
        <button className={`px-2 ${border} `}>{title}</button>
        <div
          className={`absolute flex   h-[3px] w-full  group-hover:bg-[#fe5857] -bottom-[1.1rem] ${underline} `}
        ></div>
      </li>
    </div>
  );
};

export default NavBtn;