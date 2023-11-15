import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div id="navbar">
      <div id="nav-left">
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Gallery</a>
        <a href="">Book Table</a>
      </div>
      <div id="logo">
        <h1>Messthali</h1>
      </div>
      <div id="nav-right">
        <a href="">Blog</a>
        <a href="">Review</a>
        <a href="">Contact Us</a>
        <button>Login</button>
        <button>Sign Up</button>
      </div>
    </div>
  );
};
export default Navbar;
