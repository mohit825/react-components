import React from "react";
import Comment from "./Comment";

const Comments = ({ data }) => {
  return (
    <div className="flex flex-col items-center ">
      {data?.map((comment, i) => {
        return <Comment commentInfo={comment} key={i} />;
      })}
    </div>
  );
};

export default Comments;
