import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaBook,
  FaUsers,
  FaBars,
  FaTimes,
  FaSignOutAlt,
} from "react-icons/fa";
import "../../styles/UserTopNavbar.css";

const UserTopNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="top-navbar">
      <div className="nav-container">
        {/* LOGO */}
        <h2 className="logo">পাল শক্তি সমবায়</h2>

        {/* HAMBURGER */}
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* NAV LINKS */}
        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
          <NavLink to="/dashboard" end>
            <FaHome /> Dashboard
          </NavLink>

          <NavLink to="/dashboard/book">
            <FaBook /> Book
          </NavLink>

          <NavLink to="/members">
            <FaUsers /> Members
          </NavLink>

          <button className="logout-btn">
            <FaSignOutAlt /> Logout
          </button>
        </nav>
      </div>
    </header>
  );
};

export default UserTopNavbar;
