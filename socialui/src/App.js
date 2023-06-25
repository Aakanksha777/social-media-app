import Login from "./components/login/Login";
import Register from "./components/register/Register";

import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ProtectedRoute from "./ProtectedRoute";
import { useEffect, useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (boolean) => {
    setIsLoggedIn(boolean);
  };

  useEffect(() => {
    console.log(isLoggedIn);
  }, [isLoggedIn]);

  return (
    <Routes>
      {/* Anyone can access these routes */}
      <Route path="login" element={<Login isLoggedIn={isLoggedIn} />} />
      <Route path="register" element={<Register isLoggedIn={isLoggedIn} />} />

      {/* Only Loggedin user can access these routes */}
      <Route
        path="/"
        element={
          <ProtectedRoute handleLogin={handleLogin} isLoggedIn={isLoggedIn} />
        }
      >
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default App;
