import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './PropertyDetails.css';
import properties from '../Essentials/PropertiesData'; 

function PropertyDetails() {
  const { id } = useParams();
  const property = properties.find(p => p.id === parseInt(id)) || properties[0]; 

  return (
    <div className="property-details-container">
      <h1>{property.name}</h1>
      <img src={property.image} alt={property.name} className="main-image" />
      <p className="location">📍 {property.location}</p>
      <p className="price">Price: Rs {property.price.toLocaleString()}</p>
      <p className="type">Type: {property.type}</p>
      <p className="specs">🛏 {property.beds} Beds 🛁 {property.baths} Bath 📏 {property.sqft} sqft</p>
      <h2>Property Description</h2>
      <p>{property.description}</p>
      <div className="thumbnails">
        {property.thumbnails.map((thumb, index) => (
          <img key={index} src={thumb} alt={`Thumbnail ${index + 1}`} />
        ))}
      </div>
      <h2>Features & Amenities</h2>
      <ul className="features">
        {property.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <h2>Location:</h2>
      <img src={property.map} alt="Location Map" className="map" />
      <div className="buttons">
        <Link to={`/buy-property/${id}`} className="buy-now-btn">Buy Now</Link>
        <Link to={`/contact-agent/${id}`} className="contact-agent-btn">Contact Agent</Link>
      </div>
    </div>
  );
}

export default PropertyDetails;