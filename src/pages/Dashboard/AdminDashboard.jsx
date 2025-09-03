import React, { useState } from "react";
import "./dashboard.css";

function AdminDashboard() {
  const [verifications, setVerifications] = useState([
    { id: 1, property: "Modern House", owner: "Nixon Mahato", status: "Pending" },
    { id: 2, property: "Lakeside House", owner: "Krish Mahato", status: "Pending" },
    { id: 3, property: "Villa", owner: "Mote Simkhada", status: "Verified" },
  ]);

  // Verify property
  const handleVerify = (id) => {
    setVerifications(
      verifications.map((v) =>
        v.id === id ? { ...v, status: "Verified" } : v
      )
    );
  };

  return (
    <div className="admin-dashboard">
      <aside className="sidebar">
        <h3>Admin Panel</h3>
        <ul>
          <li className="active">Dashboard</li>
          <li>Users</li>
          <li>Listings</li>
          <li>Verification</li>
          <li>Analytics</li>
        </ul>
      </aside>

      <main className="dashboard-content">
        <h2>Property Verifications</h2>
        <table>
          <thead>
            <tr>
              <th>Property</th>
              <th>Owner</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {verifications.map((v) => (
              <tr key={v.id}>
                <td>{v.property}</td>
                <td>{v.owner}</td>
                <td>
                  <span
                    className={v.status === "Pending" ? "pending" : "verified"}
                  >
                    {v.status}
                  </span>
                </td>
                <td>
                  {v.status === "Pending" && (
                    <button onClick={() => handleVerify(v.id)}>Verify</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}

export default AdminDashboard;