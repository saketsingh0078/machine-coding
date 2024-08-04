import React, { useEffect, useState } from "react";
import { ProductCard } from "./ProductCard";

export const ProductPage = ({ setCardData, cardData }) => {
  const URL = "https://dummyjson.com/products";
  const [data, setData] = useState([]);
  const [sort, setSort] = useState("recommand");

  useEffect(() => {
    getData();
  }, [sort]);

  const getData = async () => {
    const data = await fetch(URL);
    const json = await data.json();
    if (sort === "lowtohigh") {
      setData(json.products.sort((a, b) => a.price - b.price));
    } else if (sort === "hightolow") {
      setData(json.products.sort((a, b) => b.price - a.price));
    } else setData(json.products);
  };

  const handleClick = (index) => {
    setCardData((prev) => [...prev, data[index]]);
  };

  let totalPrice = 0;
  for (let i = 0; i < cardData.length; i++) {
    totalPrice = totalPrice + cardData[i].price;
  }

  return (
    <div className="flex flex-col gap-8 mt-4">
      <button className="border-2 border-black w-[80px] rounded-lg">
        Card - {cardData.length}
      </button>

      <div className="bg-slate-400 flex flex-wrap w-screen ">
        {cardData.map((data) => (
          <ProductCard data={data} />
        ))}
      </div>

      <h1 className="mt-2">Total Price - {Math.floor(totalPrice)}</h1>

      <select
        className="w-[200px] border-2 border-black rounded-md"
        value={sort}
        onChange={(e) => {
          setSort(e.target.value);
        }}
      >
        <option value="lowtohigh">Low to High</option>
        <option value="hightolow">High to Low</option>
        <option value="recommand">Recommanded</option>
      </select>

      <div className="flex flex-wrap gap-4">
        {data.map((data, index) => (
          <ProductCard
            data={data}
            setCardData={setCardData}
            handleClick={() => handleClick(index)}
          />
        ))}
      </div>
    </div>
  );
};
