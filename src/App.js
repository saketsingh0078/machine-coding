import React, { useState } from "react";
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
import { TodoList } from "./components/TodoList";
import { ProductPage } from "./components/ProductPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Protected from "./components/Protected";
import { Login } from "@mui/icons-material";
import Comment from "./components/Comment";

function App() {
  const [cardData, setCardData] = useState([]);

  return (
    <div className="h-screen w-screen flex justify-between ">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<Protected />} />
          <Route path="/accordian" element={<Accordian />} />
          <Route path="/login" element={<Login />} />
          <Route path="/accordian" element={<Accordian />} />
          <Route path="/autosearch" element={<AutoSearch />} />
          <Route path="/infinitescroll" element={<InfiniteScroll />} />
          <Route path="/menubutton" element={<MenuButton />} />
          <Route path="/pagination" element={<Pagination />} />
          <Route path="/productpage" element={<ProductPage />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="/starrating" element={<StarRating />} />
          <Route path="/tab" element={<Tab />} />
          <Route path="/todolist" element={<TodoList />} />
          <Route path="/carousel" element={<Carousel />} />
          <Route path="/debounce" element={<Debounce />} />
          <Route path="/comment" element={<Comment />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
