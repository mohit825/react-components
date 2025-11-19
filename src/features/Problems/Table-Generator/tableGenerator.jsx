import React, { useState } from "react";
import { InputGroup } from "../../../atoms/inputGroup";
import { Grid } from "./Grid";

function TableGenerator() {
  const [row, setRow] = useState("");
  const [col, setCol] = useState("");
  const [showGrid, setShowGrid] = useState(false);

  const onFormSubmit = (e) =>{
    e.preventDefault();
    setShowGrid(true)
  };

  return (
    <>
      <form onSubmit={onFormSubmit} >
        <InputGroup
          type={"number"}
          value={row}
          ariaLabel={"row input"}
          onChangeHandler={(e) => setRow(e.target.value)}
          placeholder={"Enter rows"}
        />

        <InputGroup
          type={"number"}
          value={col}
          ariaLabel={"row input"}
          onChangeHandler={(e) => setCol(e.target.value)}
          placeholder={"Enter rows"}
        />
        <button type="submit">Submit</button>
      </form>
      {showGrid ? <div><Grid row={row} col={col} /></div> : null}
    </>
  );
}

export default TableGenerator;
