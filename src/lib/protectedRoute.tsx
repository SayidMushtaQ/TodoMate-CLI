import React from "react";

import { Navigate } from "react-router-dom";
export default function ProtectedRoute({children}: {children: React.ReactNode;}) {
  // const { user } = UseAuth();
  // console.log(user);
  const userEmail = localStorage.getItem('useEmail')
  if (!userEmail) {
    return <Navigate to={"/login"} />;
  }
  return children;
}
