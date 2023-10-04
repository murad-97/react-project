import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/index-3"
import Login from "./pages/login/login"
import Register from "./pages/register/register"
import Master from "./layouts/master"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home route with Master layout */}
        <Route path="/" element={<Master />}>
          <Route index element={<Home />} />
        </Route>
        
        {/* Login route with Master layout */}
        <Route path="login" element={<Master />}>
          <Route index element={<Login />} />
        </Route>
        
        {/* Register route with Master layout */}
        <Route path="register" element={<Master />}>
          <Route index element={<Register />} />
        </Route> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
