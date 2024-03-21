import React from "react";

import "./Navbar.css";
function Navbar() {
  return (
    <div id="navbar">
      <div className="panel">
        <h1>ClientPanel</h1>
        <h3>Dashboard</h3>
      </div>
      <ul>
      <li>
        <a href="/">Register</a>
      </li>
      <li>
        <a href="/">Login</a>
      </li></ul>
    </div>
  );
}

export default Navbar;
