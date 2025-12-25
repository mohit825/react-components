import { useState } from "react";

export const Grid = ({ gridSize }) => {
  const arr = new Array(Number(gridSize)).fill(1);
  const [number, setNumber] = useState(1);

  return (
    <div className="flex gap-4">
      {arr.map((_, rowIndex) => (
        // Each row needs a container to keep cells horizontal
        <div key={rowIndex} className="my-3">
          {arr.map((_, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className="border border-black w-40 h-40 m-3"
              onClick={() => setNumber((prev) => prev + 1)}
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
};
