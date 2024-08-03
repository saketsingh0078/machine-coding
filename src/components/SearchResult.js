import React from "react";

export const SearchResult = ({ data }) => {
  return (
    <div className=" fixed flex flex-col gap-1 ">
      {data.map((data, index) => (
        <div className=" bg-slate-400 rounded-md w-[200px] p-2">{data}</div>
      ))}
    </div>
  );
};
