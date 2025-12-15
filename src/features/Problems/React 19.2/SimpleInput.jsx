import { useState } from "react";

export const SimpleInput = ({ isLight }) => {
  const [val, setInputVal] = useState("");

  return (
    <input
      type="text"
      placeholder="Type something..."
      className={`border ${
        isLight ? "border-black" : "border-red-700"
      } p-2 m-2`}
      onChange={(e) => setInputVal(e.target.value)}
      value={val}
    />
  );
};
