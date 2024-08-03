import React from "react";

export const CarouselContent = ({ data }) => {
  return (
    <div className="w-[350px] h-[200px]">
      <img className="w-[350px] h-[200px]" src={data} alt="img" />
    </div>
  );
};
