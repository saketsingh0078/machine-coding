import React from "react";

export const TabButton = ({ data, setActiveTab }) => {
  return (
    <div className="flex gap-4">
      {data.map((tab, index) => (
        <button
          className="flex px-2 py-1 bg-slate-600  mt-4 rounded-lg"
          key={index}
          onClick={() => setActiveTab(index)}
        >
          {tab.title}
        </button>
      ))}
    </div>
  );
};
