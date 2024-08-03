import React, { useState } from "react";
import { CiStar } from "react-icons/ci";

export const StarRating = () => {
  const [selectedStar, setselectedStar] = useState(0);

  const star = Array(5).fill(0);

  return (
    <div className="flex gap-5">
      {star.map((_, index) => (
        <CiStar
          className={`w-[24px] h-[24px] ${
            selectedStar >= index ? " bg-yellow-900" : ""
          }`}
          key={index}
          onClick={() => setselectedStar(index)}
        />
      ))}
    </div>
  );
};
