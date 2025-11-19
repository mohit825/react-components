import { useState } from "react";
import Tabs from "./Tabs/TabContainer";
import { Link, Outlet } from "react-router-dom";

const CompoundPattern = () => {
 
  return (
    <>
      <nav className="p-2 underline flex gap-2">
        <Link to="tab">Tab</Link>
        <Link to="select">Select </Link>
      </nav>
      <Outlet />
    </>
  );
};

export default CompoundPattern;
