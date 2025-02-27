import React from "react";
import { Link, Outlet } from "react-router-dom";

const ReactPatterns = () => {
  return (
    <>
      <nav className="p-2 underline flex gap-2">
        <Link to="hoc-example">HOC</Link>
        <Link to="compound">Compound </Link>
      </nav>
      <Outlet />
    </>
  );
};

export default ReactPatterns;
