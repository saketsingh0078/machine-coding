import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className=" flex flex-col items-center gap-2  w-screen pt-3">
      <Link className="border-2 border-solid rounded-md p-2" to="/accordian">
        Accordian
      </Link>
      <Link className="border-2 border-solid rounded-md p-2" to="/autosearch">
        AutoSearch
      </Link>
      <Link
        className="border-2 border-solid rounded-md p-2"
        to="/infinitescroll"
      >
        InfiniteScroll
      </Link>
      <Link className="border-2 border-solid rounded-md p-2" to="/menubutton">
        MenuButton
      </Link>
      <Link className="border-2 border-solid rounded-md p-2" to="/pagination">
        Pagination
      </Link>
      <Link className="border-2 border-solid rounded-md p-2" to="/productpage">
        ProductPage
      </Link>
      <Link className="border-2 border-solid rounded-md p-2" to="/progress">
        Progress
      </Link>
      <Link className="border-2 border-solid rounded-md p-2" to="/starrating">
        StarRating
      </Link>
      <Link className="border-2 border-solid rounded-md p-2" to="/tab">
        Tab
      </Link>
      <Link className="border-2 border-solid rounded-md p-2" to="/todolist">
        TodoList
      </Link>
      <Link className="border-2 border-solid rounded-md p-2" to="/carousel">
        Carousel
      </Link>
      <Link className="border-2 border-solid rounded-md p-2" to="/debounce">
        Debounce
      </Link>
      <Link className="border-2 border-solid rounded-md p-2" to="/comment">
        Comment
      </Link>
    </div>
  );
};

export default Home;
