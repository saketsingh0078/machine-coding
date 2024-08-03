import React, { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { SideBar } from "./SideBar";

export const MenuButton = () => {
  const [menu, setMenu] = useState(false);
  return (
    <div className="mt-4 cursor-pointer">
      <IoIosMenu className="w-[32px] h-[24px]" onClick={() => setMenu(!menu)} />
      {menu ? <SideBar setMenu={setMenu} /> : null}
    </div>
  );
};
