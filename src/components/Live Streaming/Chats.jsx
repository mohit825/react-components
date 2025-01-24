import React from "react";

const Chats = ({ name, msg, imgUrl }) => {
  return (
    <div className="flex row p-2 gap-3 items-center">
      <img src={imgUrl} className="rounded-full w-8" />
      <span className="text-sm">{name}</span>
      <span>{msg}</span>
    </div>
  );
};

export default Chats;
