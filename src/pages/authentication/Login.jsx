import React from "react";
import "./Login.css";
import { FaLock } from "react-icons/fa";
import MainLayout from "../../layout/MainLayout";

function Login() {
  return (
    <div id="login">
      <div className="login">
        <div className="icon">
          <FaLock />
        </div>
        <h1>Client Panel</h1>
        <h3>Login</h3>
      </div>
      <div className="label">
        <label htmlFor="email">Email</label>
        <input type="text" />
        <label htmlFor="password">Password</label>
        <input type="password" />
        <button>Login</button>
      </div>
    </div>
  );
}
export default  MainLayout(Login);
