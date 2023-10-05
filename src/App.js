import React from 'react';

// import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/index-3"
import About from "./pages/about/about"
import Single from "./pages/single/tour-details"
import Login from "./pages/login/login"
import Master from "./layouts/master"

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Master />}>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/single" element={<Single />} />
      </Route>
      <Route path="login" element={<Login />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;