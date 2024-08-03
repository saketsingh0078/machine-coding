import React, { useState } from "react";
import { AccordianContent } from "./AccordianContent";

export const Accordian = () => {
  const [visible, setVisible] = useState(null);
  const data = [
    {
      title: "Recommend Food",
      desc: "I love the spicy food and fried chicken.",
    },
    {
      title: "Children",
      desc: "I love chicken curry, chicken fry.",
    },
    {
      title: "Veg",
      desc: "Rice dal and potato fry.",
    },
  ];

  return (
    <div className="w-screen flex flex-col items-center mt-20">
      {data.map((item, index) => (
        <AccordianContent
          key={index}
          data={item}
          isActive={visible === index}
          onClick={() => setVisible(visible === index ? null : index)}
        />
      ))}
    </div>
  );
};
