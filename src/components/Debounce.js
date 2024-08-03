import React, { useEffect, useState } from "react";

const Debounce = () => {
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const timerId = setTimeout(() => {
      console.log(searchQuery);
    }, 200);

    return () => clearTimeout(timerId);
  }, [searchQuery]);

  return (
    <div>
      <input
        className="p-2 text-lg mt-5"
        type="text"
        placeholder="search"
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
      />
    </div>
  );
};

export default Debounce;
