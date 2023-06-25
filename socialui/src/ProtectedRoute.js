import React, { useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

const ProtectedRoute = ({ handleLogin, isLoggedIn }) => {
  const navigate = useNavigate();
  const checkUserToken = () => {
    const userToken = localStorage.getItem("user-token");
    if (!userToken || userToken === "undefined") {
      handleLogin(false);
      return navigate("/login");
    }
    handleLogin(true);
  };

  useEffect(() => {
    checkUserToken();
  }, [isLoggedIn]);

  return <>{isLoggedIn ? <Outlet /> : <Navigate to="login" />}</>;
};

export default ProtectedRoute;
