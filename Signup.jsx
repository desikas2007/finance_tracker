import React from "react";
import { Link } from "react-router-dom";
import "../styles/AuthStyles.css";

export default function Login() {
  return (
    <div className="auth-container">
      <div className="auth-card">

        <h2 className="title">Welcome Back</h2>
        <p className="subtitle">Login to continue</p>

        <input type="email" placeholder="Email" className="input" />
        <input type="password" placeholder="Password" className="input" />

        <button className="btn-primary">Login</button>

        <p className="switch-text">
          New here? <Link to="/signup">Create Account</Link>
        </p>

      </div>
    </div>
  );
}
