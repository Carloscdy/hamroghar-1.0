import React, { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode"; // ✅ correct import
import "./Auth.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setMessage("⚠️ Please fill all fields");
    } else {
      setMessage("✅ Logged in with email/password");
    }
  };

  return (
    <div className="login-page">
      <div className="auth-container">
        <div className="auth-box">
          <h2>Login</h2>

          {/* Email/Password Login */}
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="auth-btn">
              Continue with Email
            </button>
          </form>

          {message && <p style={{ marginTop: "10px", color: "red" }}>{message}</p>}

          <div className="divider" style={{ margin: "20px 0", textAlign: "center" }}>
            <span>OR</span>
          </div>

          {/* ✅ Google Login Button */}
          <GoogleLogin
            locale="en"   // force button text to English
            onSuccess={(credentialResponse) => {
              try {
                const decoded = jwtDecode(credentialResponse.credential);
                console.log("Google user:", decoded);
                alert(`Signed in as: ${decoded.name || decoded.email}`);
              } catch (error) {
                console.error("JWT Decode Error:", error);
              }
            }}
            onError={() => {
              console.log("Login Failed");
              alert("Google Login Failed");
            }}
          />

          <p style={{ marginTop: "20px" }}>
            Don’t have an account?{" "}
            <a href="/signup" className="auth-link">
              Sign up
            </a>
          </p>
          <p>
            <a href="/forgot-password" className="auth-link">
              Forgot Password?
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
