import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/auth/login";
import Main from "./pages/main";
import CarModels from './pages/carModels/index';
import Admin from './pages/adminPanel/index';
import CarDetail from "./pages/carDetails";


function App() {
  let token = localStorage.getItem("token");
  const [data,setData] = useState('')
  if (token) {
    return (
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/models" element={<CarModels />} />
        <Route path="/models/:id" element={<CarDetail />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    );
  } else {
    return (
        <Routes>
          <Route path="/" element={<Login setData={setData} />} />
        </Routes>
    );
  }
}

export default App;
