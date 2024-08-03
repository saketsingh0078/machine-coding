import React from "react";

export const AccordianContent = ({ data, isActive, onClick }) => {
  return (
    <div className="flex flex-col w-[500px] h-fit mb-1">
      <div className="flex justify-between bg-slate-500 w-full p-1 shadow-sm">
        <div>{data.title}</div>
        <button className="text-xl font-bold" onClick={onClick}>
          {isActive ? "⬇️" : "⬆️"}
        </button>
      </div>
      {isActive && <div className="bg-slate-300 w-full p-1">{data.desc}</div>}
    </div>
  );
};
