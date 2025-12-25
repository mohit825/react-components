import { useState } from "react";
import { Grid } from "./Grid";

export const DynamicGridContainer = () => {
  const [num, setNum] = useState(null);
  const [showGrid, setShowGrid] = useState(false);

  return (
    <>
      <div className="flex gap-4">
        <p>Grid (n x n)</p>
        <input
          type="number"
          value={num}
          onChange={(e) => setNum(e.target.value)}
          className="bg-slate-300 px-4 "
        />
        <button className="bg-cyan-400 px-4 " onClick={() => setShowGrid(true)}>
          Generate
        </button>
        <button className="bg-red-400 px-4 ">Reset</button>
      </div>
      {showGrid && <Grid gridSize={num} />}
    </>
  );
};
