import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="w-full bg-black text-white flex row gap-4 p-6">
      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
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
    </nav>
  );
};

export default Header;
