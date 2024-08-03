import React from "react";

import { IoIosClose } from "react-icons/io";

export const SideBar = ({ setMenu }) => {
  return (
    <div className="fixed top-0 justify-end right-0 bg-slate-500 h-screen w-[50%] ">
      <div className="flex flex-col gap-10">
        <IoIosClose
          className="w-[24px] h-[24px]"
          onClick={() => {
            setMenu(false);
          }}
        />
        <div className="p-5">
          <ul>
            <li>Home</li>
            <li>about</li>
            <li>contact </li>
            <li>cart</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
