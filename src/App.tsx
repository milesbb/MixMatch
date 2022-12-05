import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import NavbarComponent from "./components/Navbar/NavbarComponent";
import Login from "./components/pages/LoginSignUp/Login";
import SignUp from "./components/pages/LoginSignUp/SignUp";
import Dashboard from "./components/pages/Dashboard/Dashboard";
import Profile from "./components/pages/Profile/Profile";
import ImportPlaylist from "./components/pages/Import/ImportPlaylist";
import ExportPlaylist from "./components/pages/Export/ExportPlaylist";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/import" element={<ImportPlaylist />} />
          <Route path="/export" element={<ExportPlaylist />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
