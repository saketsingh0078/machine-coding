import React from "react";
import CommentBox from "./CommentBox";

const data = [
  {
    name: "saket",
    msg: " hi all",
    reply: [
      {
        name: "rohit",
        msg: " you are the best",
        reply: [
          {
            name: "ruchi",
            reply: [],
          },
        ],
      },
    ],
  },

  {
    name: "saket",
    msg: " hi all",
    reply: [
      {
        name: "rohit",
        msg: " you are the best",
        reply: [
          {
            name: "ruchi",
            reply: [],
          },
        ],
      },
    ],
  },

  {
    name: "saket",
    msg: " hi all",
    reply: [
      {
        name: "rohit",
        msg: " you are the best",
        reply: [
          {
            name: "ruchi",
            reply: [],
          },
        ],
      },
    ],
  },
];

const Comment = () => {
  return (
    <div>
      <CommentBox data={data} />
    </div>
  );
};

export default Comment;
