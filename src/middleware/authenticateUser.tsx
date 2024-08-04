import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import Loading from '@/components/sppiner'
const EXCLUDE_PATHS = ["/login", "/register"];

export default function ProtectedRoute({children}: {children: React.ReactNode;}) {
  const { loading, user } = useAuth();
  const location = useLocation();
  if (loading) {
    return <Loading/>
  }
  const isExcludePath = EXCLUDE_PATHS.includes(location.pathname);
  if (user && isExcludePath) {
    return <Navigate to={"/"} />;
  }
  if (!user) {
    return <Navigate to={"/login"} />;
  }
  return children;
}
