import React, { useState } from "react";
import "./App.css";

const LoginForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div className="container">
      <div className="form-container">
        <div className="form-toggle ">
          <button
            className={isLogin ? "active" : ""}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={!isLogin ? "active" : ""}
            onClick={() => setIsLogin(false)}
          >
            SignUp
          </button>
        </div>
        {isLogin ? (
          <>
            <div className="form">
              <h2>Login Form</h2>
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <button type="button" className="link-btn" onClick={() => {}}>Forgot Password</button>
              <button>Login</button>
              <p> Not a Member?{" "}
                <button type="button" className="link-btn" onClick={() => setIsLogin(false)}>
                  Signup Now
                </button>
              </p>
            </div>
          </>
        ) : (
          <>
            <div className="form">
              <h2>SignUp Form</h2>
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <input type="password" placeholder="Confirm Password" />
              <button>Signup</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginForm;