import React, { useState } from "react";
import "./dashboard.css";

function AgentDashboard() {
  const [properties, setProperties] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    price: "",
    description: "",
  });

  // Handle form change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Add new property
  const handleSubmit = (e) => {
    e.preventDefault();
    const newProperty = { ...formData, id: Date.now() };
    setProperties([...properties, newProperty]);
    setFormData({ title: "", location: "", price: "", description: "" });
  };

  return (
    <div className="agent-dashboard">
      <h2>Agent Dashboard</h2>

      {/* Add Property */}
      <div className="form-section">
        <h3>Add New Property</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Property Title"
            value={formData.title}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
            required
          />
          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            required
          />
          <button type="submit">Add Property</button>
        </form>
      </div>

      {/* Property Listings */}
      <div className="property-listings">
        <h3>Your Listings</h3>
        {properties.length === 0 ? (
          <p>No properties listed yet.</p>
        ) : (
          <div className="property-grid">
            {properties.map((p) => (
              <div key={p.id} className="property-card">
                <h4>{p.title}</h4>
                <p>📍 {p.location}</p>
                <p>💰 {p.price}</p>
                <p>{p.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default AgentDashboard;