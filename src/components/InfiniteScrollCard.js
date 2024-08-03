import React from "react";

export const InfiniteScrollCard = ({ data }) => {
  return (
    <div className="w-[200px] h-[200px] bg-slate-700">
      <img className="w-full h-full" src={data} />
    </div>
  );
};
