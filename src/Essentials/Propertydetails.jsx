// src/components/PropertyDetails.js
import React from 'react';

const PropertyDetails = ({ property }) => {
  return (
    <div style={{ marginBottom: '30px' }}>
      <img 
        src={property.imageUrl} 
        alt={property.title} 
        style={{ width: '100%', height: 'auto', borderRadius: '8px' }} 
      />
      <h2>{property.title}</h2>
      <p>{property.description}</p>
      <p><strong>Price per night:</strong> ${property.pricePerNight}</p>
    </div>
  );
};

export default PropertyDetails;