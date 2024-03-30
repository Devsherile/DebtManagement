import React from "react";
import "./Register.css";
import { FaLock } from "react-icons/fa";
import MainLayout from "../../layout/MainLayout";
function Register() {
  return (
    <div id="register">
      <div className="register">
        <div className="icon">
          <FaLock />
        </div>
        <h1>Client Panel</h1>
        <h3>Register</h3>
      </div>
      <div className="label">
        <label htmlFor="email">Email</label>
        <input type="text" />
        <label htmlFor="password">Password</label>
        <input type="password" />
        <button>Register</button>
      </div>
    </div>
  );
}

export default MainLayout(Register);
