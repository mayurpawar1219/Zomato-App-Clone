import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/zomato-logo.webp'; // Import the new logo

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <div className="navbar">
       <img src={logo} alt="Zomato Logo" className="logo" style={{ width: "120px", height: "auto" }} />

      <ul className="navbar-menu">
        <li className={menu === "home" ? "active" : ""} onClick={() => setMenu("home")}>Home</li>
        <li className={menu === "menu" ? "active" : ""} onClick={() => setMenu("menu")}>Menu</li>
        <li className={menu === "mobile-app" ? "active" : ""} onClick={() => setMenu("mobile-app")}>Mobile-App</li>
        <li className={menu === "contact-us" ? "active" : ""} onClick={() => setMenu("contact-us")}>Contact Us</li>
      </ul>
      <button className="button">Sign In</button>
    </div>
  );
};

export default Navbar;

