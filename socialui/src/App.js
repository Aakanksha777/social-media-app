import Login from "./components/login/Login";
import Register from "./components/register/Register";

import {  BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <BrowserRouter>
    <Routes>

    <Route path="/" element={<Login />}></Route>
    <Route exact path="/home" element={<HomePage />}> </Route>
    <Route exact path="/register" element={<Register />}> </Route>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
