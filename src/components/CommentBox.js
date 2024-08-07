import React from "react";

const CommentBox = ({ data }) => {
  console.log(data);
  return data.map((comment, index) => (
    <div className="pl-10 border-l-2 pb-2 border-black">
      <div className="flex mt-2">
        <h1 className="w-[28px] h-[28px] border-2  rounded-full text-center">
          S
        </h1>
        <div>
          <h1>{comment.name}</h1>
          <p>{comment.msg}</p>
        </div>
      </div>
      <div> {comment?.reply && <CommentBox data={comment.reply} />}</div>
    </div>
  ));
};

export default CommentBox;
