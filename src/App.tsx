import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import NavbarComponent from "./components/Navbar/NavbarComponent";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
