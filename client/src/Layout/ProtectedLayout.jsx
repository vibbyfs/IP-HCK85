import { Navigate, Outlet } from "react-router";
import { useEffect, useState } from "react";
import http from "../lib/http";

export default function ProtectedLayout() {
  const isAuthenticated = localStorage.getItem("access_token");
  const [citizenData, setCitizenData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isAuthenticated) {
      checkCitizenData();
    }
  }, [isAuthenticated]);

  const checkCitizenData = async () => {
    try {
      const response = await http.get("/citizens/me", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      setCitizenData(response.data);
    } catch (error) {
      setCitizenData(null);
    } finally {
      setLoading(false);
    }
  };

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  const currentPath = window.location.pathname;

  if (
    citizenData &&
    (currentPath === "/addresses/form" || currentPath === "/citizens/form")
  ) {
    return <Navigate to="/dashboard" />;
  }

  if (
    !citizenData &&
    currentPath !== "/addresses/form" &&
    currentPath !== "/citizens/form"
  ) {
    return <Navigate to="/addresses/form" />;
  }

  return <Outlet />;
}
