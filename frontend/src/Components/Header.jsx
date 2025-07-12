import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <nav>
        <h1>SkillSwap</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/browse">Browse</Link></li>
          <li><Link to="/requests">Requests</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
