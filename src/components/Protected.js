import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const Protected = () => {
  const isAuthenticated = false;

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default Protected;
