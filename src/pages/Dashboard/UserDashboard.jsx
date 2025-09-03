import React, { useState } from "react";
import "./dashboard.css";

function UserDashboard() {
  // Removed setSavedProperties since we are not updating
  const [savedProperties] = useState([
    {
      id: 1,
      title: "Modern Apartment in Kathmandu",
      location: "Kalanki, Kathmandu",
      price: "Rs. 45,00,000",
      image: "apartment.jpg",
    },
    {
      id: 2,
      title: "Duplex House with Garden",
      location: "Imadol, Lalitpur",
      price: "Rs. 1,85,00,000",
      image: "duplex.jpg",
    },
  ]);

  return (
    <div className="dashboard-container">
      <h2>Welcome back, Ramesh</h2>
      <p>Manage your real estate interests and activities</p>

      <h3>Your Saved Properties</h3>
      <div className="saved-properties">
        {savedProperties.map((property) => (
          <div key={property.id} className="property-card">
            <img src={property.image} alt={property.title} />
            <h4>{property.title}</h4>
            <p>{property.location}</p>
            <p>{property.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserDashboard;