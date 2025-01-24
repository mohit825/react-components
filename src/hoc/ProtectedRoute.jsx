import React from "react";
import { Navigate, Outlet, Routes } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = false;
  return isAuthenticated ? (
    <Outlet>{children}</Outlet>
  ) : (
    <Navigate to="/login" />
  );
};

export default ProtectedRoute;
