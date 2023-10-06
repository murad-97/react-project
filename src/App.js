import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/index-3"
import About from "./pages/about/about"
import Single from "./pages/single/tour-details"
import Login from "./pages/login/login"
import Register from "./pages/register/register"
import Master from "./layouts/master"
import Honeymoon from "./pages/products/honeymoon"
import Grouptour from "./pages/products/grouptour"
import Indivisualtour from "./pages/products/indivisualtour"
import Profile from "./pages/profile/mainprofile"
import Product from "./pages/products/allproduct"


import Booking from "./pages/booking/booking"
import ProfileInfo from "./pages/profile/profile"
import Contact from './pages/contact/contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Master />}>
          <Route index path="/" element={<Home />} />
          {/* <Route path="/product/1" element={<Honeymoon />} /> */}
          <Route path="/booking/:id" element={<Booking />} />
          <Route path="/product/:id" element={<Product />} />
          {/* <Route path="/product/2" element={<Grouptour />} /> */}
          {/* <Route path="/product/3" element={<Indivisualtour />} /> */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/single/:id" element={<Single />} />
        <Route path="/myprofile" element={<Profile />}>
          <Route index element={<ProfileInfo />} /> {/* Use "index" to match the default sub-route */}
          {/* <Route path="booking" element={<Booking />} /> */}
        </Route>
        </Route>


        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
