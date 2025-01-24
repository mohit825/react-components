import React, { useState } from "react";

const UserChat = ({ onEnterKeyPress }) => {
  const [input, setInput] = useState("");

  const OnKeyPressHandler = (event) => {
    if (event.key === "Enter" && input.trim() !== "") {
      onEnterKeyPress(input);
      setInput("");
    }
  };
  return (
    <div className="w-[200px] mt-2">
      <input
        type="text"
        placeholder="Enter message "
        className="p-2 bg-slate-200 rounded-lg w-full"
        onKeyUp={(e) => OnKeyPressHandler(e)}
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
    </div>
  );
};

export default UserChat;
