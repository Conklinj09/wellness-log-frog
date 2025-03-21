// src/components/Dashboard.jsx
import React from "react";
import "../styles/dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-container">
      <h2>Wellness Dashboard 🧘‍♀️🍵</h2>
      <p>This is where you’ll track your:</p>
      <ul>
        <li>💧 Water</li>
        <li>🧃 Juice</li>
        <li>🥤 Smoothies</li>
        <li>☕ Coffee</li>
        <li>🥗 Whole Foods</li>
        <li>🏃‍♀️ Exercise</li>
      </ul>
      <p>Tracking widgets coming soon!</p>
    </div>
  );
}

export default Dashboard;
