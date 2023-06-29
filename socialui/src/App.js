import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ProtectedRoute from "./ProtectedRoute";
import { useEffect, useState } from "react";
import Register from "./components/register/index";
import Login from "./components/login/index";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  const handleLogin = (boolean, user = {}) => {
    setIsLoggedIn(boolean);
    setUser(user);
  };

  useEffect(() => {
    console.log(isLoggedIn, user);
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
        <Route index element={<HomePage user={user} />} />
      </Route>
    </Routes>
  );
}

export default App;
