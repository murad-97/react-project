import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Master from "./components/layouts/master"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Master />} >
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;