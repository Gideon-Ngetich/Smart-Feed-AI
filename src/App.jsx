import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Analytics from "./components/Analytics";
import Cattle from "./components/cattle";
import Reports from "./components/Reports";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} /> 
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/cattle" element={<Cattle />} />
      <Route path="/reports" element={<Reports />} />
     <Route path="/navbar" element={<Navbar />} />
    </Routes>
  );
 }

export default App;
