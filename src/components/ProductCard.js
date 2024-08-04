import React from "react";

export const ProductCard = ({ data, handleClick }) => {
  return (
    <div className="w-[150px] border-2 border-gray-400 mt-2 p-2 rounded-lg shadow-md">
      <img src={data.thumbnail} alt="product" />
      <h1 className="text-sm mb-2">{data.title}</h1>
      <div className="flex justify-between items-center">
        <h1>Rs {data.price}</h1>
        <button
          className="border-2 border-black rounded-md p-0.5"
          onClick={handleClick}
        >
          Add +{" "}
        </button>
      </div>
    </div>
  );
};
