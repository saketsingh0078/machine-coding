import React from "react";
import { Tab } from "./components/Tab";
import { MenuButton } from "./components/MenuButton";
import { StarRating } from "./components/StarRating";
import Debounce from "./components/Debounce";
import { AutoSearch } from "./components/AutoSearch";
import { Carousel } from "./components/Carousel";
import { Accordian } from "./components/Accordian";
import { Progress } from "./components/Progress";
import { InfiniteScroll } from "./components/InfiniteScroll";
import { Pagination } from "./components/Pagination";

function App() {
  return (
    <div className="h-screen w-screen flex justify-between ">
      <Pagination />
    </div>
  );
}

export default App;
