// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Browse from "./pages/Browse";
import Requests from "./pages/Requests";
import "./index.css";

const App = () => {
  return (
    <Router>
      <div className="main-wrapper">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/browse" element={<Browse />} />
            <Route path="/requests" element={<Requests />} />
          </Routes>
        </main>
        <footer className="simple-footer">
          <p>&copy; 2025 SkillSwap. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
