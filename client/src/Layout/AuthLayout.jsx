import { Navigate, Outlet } from "react-router";

export default function AuthLayout() {
  const isAuthenticated = localStorage.getItem("access_token");

  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return <Outlet />;
}

