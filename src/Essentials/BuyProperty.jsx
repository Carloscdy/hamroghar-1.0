import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './BuyProperty.css';
import properties from '../Essentials/PropertiesData'; // Adjust path if needed

function BuyProperty() {
  const { id } = useParams();
  const property = properties.find(p => p.id === parseInt(id)) || properties[0]; // Find by ID, fallback to first
  const navigate = useNavigate();
  const handleconfirmpurchase =() =>{
    navigate('/')
  }

  return (
    <div className="buy-property-container">
      <h1>Buy Property</h1>
      <div className="content">
        <div className="left-section">
          <img src={property.image} alt={property.name} className="property-image" />
          <h3>Buyer Information:</h3>
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email" />
          <input type="tel" placeholder="Phone no" />
          <input type="text" placeholder="Citizenship or NIN" />
          <input type="text" placeholder="Address" />
        </div>
        <div className="right-section">
          <h3>Property Details</h3>
          <p>{property.name}</p>
          <p>Price: Rs {property.price.toLocaleString()}</p>
          <p>🛏 {property.beds} bed 🛁 {property.baths} bathroom</p>
          <p>{property.sqft} SqFt Type: {property.type}</p>
          <h3>Payment Details:</h3>
          <p>Total Property Price: Rs {property.price.toLocaleString()}</p>
          <label>Upload Documents</label>
          <input type="file" />
          <p>NO file chosen</p>
          <select>
            <option>Cash</option>
          </select>
          <div className="terms">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">I agree all the terms and conditions</label>
          </div>
          <button className="confirm-purchase-btn" onClick={handleconfirmpurchase}>Confirm Purchase</button>
        </div>
      </div>
    </div>
  );
}

export default BuyProperty;