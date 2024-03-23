import React from "react";
import "./Register.css";
function Register() {
  return (
    <div id="register">
      <div className="register">
        <h1>Client Panel</h1>
        <h3>Register</h3>
      </div>
      <div className="label">
        <input type="text" />
        <label>Email</label>
        <input type="password" />
        <label>Password</label>
        <button>Register</button>
      </div>
    </div>
  );
}

export default Register;
