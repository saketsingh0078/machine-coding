import React, { useEffect, useState } from "react";
import { InfiniteScrollCard } from "./InfiniteScrollCard";

export const InfiniteScroll = () => {
  const [memeData, setMemeData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    if (scrollTop + windowHeight >= documentHeight - 1 && !isLoading) {
      getData();
    }
  };

  useEffect(() => {
    getData();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getData = async () => {
    setIsLoading(true);
    const data = await fetch("https://api.imgflip.com/get_memes");
    const json = await data.json();
    setMemeData((prev) => [...prev, ...json.data.memes]);
    setIsLoading(false);
  };

  return (
    <>
      {memeData ? (
        <div className="flex flex-wrap gap-10">
          {memeData.map((data, index) => (
            <InfiniteScrollCard data={data.url} />
          ))}
        </div>
      ) : (
        <div>Loading ...</div>
      )}
      {isLoading && <div>Loading more memes...</div>}
    </>
  );
};
