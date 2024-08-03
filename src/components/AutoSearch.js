import React, { useEffect, useState } from "react";
import { SearchResult } from "./SearchResult";

export const AutoSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState();

  const autosearch = {
    s: ["search", "sea ", " story", " sky"],
    se: ["search", " sea"],
    sea: ["sea", " search"],
    sear: ["search"],
    searc: ["search"],
    search: ["search"],
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    const timerId = setTimeout(() => {
      setData(autosearch[searchQuery]);
    }, 200);
  }, [searchQuery]);

  return (
    <div className="mt-5">
      <input
        className="p-3 text-lg border-2  border-black rounded-md "
        type="text"
        placeholder="Search"
        onChange={handleSearch}
      />
      {data && <SearchResult data={data} />}
    </div>
  );
};
