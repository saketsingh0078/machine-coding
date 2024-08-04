import React from "react";

export const PaginationCard = ({ data }) => {
  return (
    <div className="flex flex-col gap-4 bg-slate-400">
      <h1 className="text-black">{data.title}</h1>
      <h1 className="text-white">{data.description}</h1>
    </div>
  );
};
