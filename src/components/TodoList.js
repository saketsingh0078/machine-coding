import React, { useState } from "react";
import { TodoCart } from "./TodoCart";

export const TodoList = () => {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleDelete = (indexToDelete) => {
    setData((prevData) =>
      prevData.filter((_, index) => index !== indexToDelete)
    );
  };

  return (
    <div>
      <div className="mt-1 ml-2 mb-4">
        <input
          className="p-1 border-2 border-black mr-2"
          type="text"
          placeholder="title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="p-1 border-2 border-black mr-2"
          type="text"
          placeholder="Description"
          onChange={(e) => setDesc(e.target.value)}
        />
        <button
          className="p-1 border-2 border-black mr-2"
          onClick={() => {
            if (title && desc)
              setData((prev) => [
                ...prev,
                {
                  title,
                  desc,
                },
              ]);
          }}
        >
          ADD
        </button>
      </div>
      {data.map((item, index) => (
        <TodoCart
          key={index}
          data={item}
          onDelete={() => handleDelete(index)}
        />
      ))}
    </div>
  );
};
