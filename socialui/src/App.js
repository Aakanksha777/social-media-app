import Login from "./components/login/Login";
import Register from "./components/register/Register";

import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <Routes>
      {/* Anyone can access these routes */}
      <Route path="login" element={<Login />} />
      <Route path="/register" element={<Register />}></Route>
      
      {/* Only Loggedin user can access these routes */}
      <Route path="/" element={<ProtectedRoute />}>
        <Route path="home" element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default App;
