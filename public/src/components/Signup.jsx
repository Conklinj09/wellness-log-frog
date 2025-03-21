// src/components/Signup.jsx
import React, { useState } from "react";
import "../styles/signup.css";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    alert(`Welcome to the lily pad, ${email}!`);
  };

  return (
    <div className="signup-container">
      <h2>Sign Up 🐣</h2>
      <form onSubmit={handleSignup}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Create a password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Join</button>
      </form>
    </div>
  );
}

export default Signup;
