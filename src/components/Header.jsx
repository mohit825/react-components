import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import ToggleThemeContainer from "./ToggleTheme/ToggleThemeContainer";
import ThemeContext from "../store/ThemeContext";

const Header = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`flex w-full justify-between items-center ${
        theme === "dark" ? "bg-black" : "bg-slate-200"
      } `}
    >
      <nav
        className={`${
          theme === "light" ? "text-black" : "text-white"
        } flex row gap-4 p-6`}
      >
        <NavLink
          to="/react-components"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>
        <Link to="/booking">Booking</Link>
        <Link to="/admin">Admin </Link>
        <Link to="/login">Login </Link>
        <Link to="/accordion">Accordion </Link>
        <Link to="/comments">Nested Comments </Link>
        <Link to="/image-slider">Image Carousel </Link>
        <Link to="/stream">Live Streaming</Link>
        <Link to="/search">Search Bar</Link>
        <Link to="/pagination">Pagination</Link>
        <Link to="/react-patterns">Patterns</Link>
      </nav>
      <ToggleThemeContainer />
    </div>
  );
};

export default Header;
