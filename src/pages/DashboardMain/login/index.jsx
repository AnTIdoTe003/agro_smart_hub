import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import { ImCross } from "react-icons/im";

function Login() {
  return (
    <div className="login-page">
      <div className="login-inner">
        <p className="login-title">Login</p>
        <Link to={"/"}><ImCross className="close-icon"/></Link>
        <form action="#">
          <input
            type="text"
            name="Email"
            id="Email"
            placeholder="email223@gmail.com"
            className="login-input input-margin1"
          ></input>
          <input
            type="password"
            name="Password"
            id="Password"
            placeholder="Password"
            className="login-input input-margin2"
          ></input>
        </form>
        <a href="#" className="forgot-password">
          <p>Forgot password?</p>
        </a>
        <button className="login-button">Login</button>
        <p className="signUp-link">
          Don't have an account? <Link to="/signup">Signup</Link>
        </p>
        <div className="or-section">
          <div className="section1"></div>
          <p>Or</p>
          <div className="section2"></div>
        </div>
        <div className="orSection-buttons">
          <button className="facebook-button login-others">
            <div className="facebook-logo"></div>
            <p>Login with Facebook</p>
          </button>
          <button className="facebook-button login-others">
            <div className="google-logo"></div>
            <p>Login with Google</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
