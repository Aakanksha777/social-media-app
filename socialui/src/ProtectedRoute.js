import React, { useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { SideNav } from "./components/SideNav/SideNav";
import Navbar from "./components/navbar/Navbar";

const ProtectedRoute = ({ handleLogin, isLoggedIn }) => {
  const navigate = useNavigate();

  const checkUserToken = () => {
    const userToken = localStorage.getItem("user-token");
    if (!userToken || userToken === "undefined") {
      handleLogin(false);
      return navigate("/login");
    }
    handleLogin(true, JSON.parse(userToken));
  };

  useEffect(() => {
    checkUserToken();
  }, [isLoggedIn]);

  return (
    <>
      {isLoggedIn ? (
        <div className="main">
          <Navbar />
          <SideNav />
          <Outlet />
        </div>
      ) : (
        <Navigate to="login" />
      )}
    </>
  );
};

export default ProtectedRoute;
