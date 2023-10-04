import React from 'react';

// import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/index-3"
import Login from "./pages/login/login"
import Master from "./layouts/master"
import Profile from "./pages/profile/mainprofile"
import Booking from "./pages/profile/tour-booking"
import ProfileInfo from "./pages/profile/profile"

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Master />}>
      <Route path="/myprofile" element={<Profile />}>
  <Route index element={<ProfileInfo />} /> {/* Use "index" to match the default sub-route */}
  <Route path="booking" element={<Booking />} />
</Route>
      <Route index element={<Home />} />
    </Route>
      <Route path="login" element={<Login />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;