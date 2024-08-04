import React, { useEffect, useState } from "react";
import { PaginationCard } from "./PaginationCard";

export const Pagination = () => {
  const [totalPage, setTotalPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [data, setData] = useState([]);
  const page = Array(totalPage).fill(0);

  useEffect(() => {
    getData();
  }, [currentPage]);

  const getData = async () => {
    const data = await fetch(
      `https://dummyjson.com/products/?limit=10&skip=${10 * currentPage}`
    );
    const json = await data.json();
    setData(json.products);
    setTotalPage(Math.floor(json.total / 10));
  };

  return (
    <div className="flex flex-col w-screen  h-[100px] ">
      <div className="flex flex-col gap-8 mb-6">
        {data.map((data, index) => (
          <PaginationCard data={data} />
        ))}
      </div>
      <div className="flex flex-wrap gap-8">
        {page.map((_, index) => (
          <div className="border-2 p-1 mb-2">
            <button onClick={() => setCurrentPage(index)}>{index + 1}</button>
          </div>
        ))}
      </div>
    </div>
  );
};
