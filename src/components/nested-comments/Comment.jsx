import React from "react";

const Comment = ({ commentInfo }) => {
  const { userName, comment, replies } = commentInfo;
  console.log(userName, comment, replies, "single comment");
  return (
    <main className="p-5 w-[300px]">
      <p className="font-bold">{userName}</p>
      <p className="italic">{comment}</p>
      {replies?.map((reply, i) => {
        return (
          <p className="ml-6" key={i}>
            <Comment commentInfo={reply} />
          </p>
        );
      })}
    </main>
  );
};

export default Comment;
