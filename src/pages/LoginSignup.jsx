import React, { useContext, useState } from "react";
import { AuthContext } from "../context/authContext";
import "./LoginSignup.css";

function LoginSignup() {
  const { login } = useContext(AuthContext);
  const [form, setForm] = useState({ email: "", password: "", role: "user" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(form.email, form.role); // fake login
  };

  return (
    <div className="login-page">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login / Signup</h2>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />

        <select name="role" value={form.role} onChange={handleChange}>
          <option value="user">User</option>
          <option value="agent">Agent</option>
          <option value="admin">Admin</option>
        </select>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default LoginSignup;