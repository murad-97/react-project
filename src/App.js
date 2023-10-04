import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/index-3"
import Login from "./pages/login/login"
import Register from "./pages/register/register"
import Master from "./layouts/master"
import Honeymoon from "./pages/products/honeymoon"
import Grouptour from "./pages/products/grouptour"
import Indivisualtour from "./pages/products/indivisualtour"
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
      <Route path="/product/honeymoon/" element={<Honeymoon />} />
      <Route path="/product/grouptour/" element={<Grouptour />} />
      <Route path="/product/indivisualtour/" element={<Indivisualtour />} />
    </Route>
      <Route path="login" element={<Login />} />

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
