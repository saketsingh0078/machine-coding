import React from "react";

export const TodoCart = ({ data, onDelete }) => {
  return (
    <div className="border-2 p-2 border-black m-2 rounded-lg">
      <h1>{data.title}</h1>
      <h1>{data.desc}</h1>
      <button
        className="border-2 border-black m-1 rounded-lg p-1"
        onClick={onDelete}
      >
        Delete
      </button>
    </div>
  );
};
