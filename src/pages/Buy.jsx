import React from 'react';
import './Buy.css';
import { Link } from 'react-router-dom';
import  properties from '../Essentials/PropertiesData';

function Buy() {
  return (
    <div className="container">
      {/* Header */}
      <div className="header">
        <button className="filter-btn">Filter</button>
        <select className="sort-select">
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
        </select>
      </div>

      {/* Grid */}
      <div className="grid">
        {properties.map((prop) => (
          <div key={prop.id} className="card">
            <img src={prop.image} alt="House" />
            <div className="details">
              <p>📍 {prop.location}</p>
              <p>🛏 {prop.rooms} Rooms &nbsp;&nbsp; 📏 {prop.sqft} sq ft</p>
              <Link to={`/property/${prop.id}`} className="view-btn">View</Link>
            </div>
            <p className="price">${prop.price.toLocaleString()}</p>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="pagination">
        <button className="active">1</button>
        <button>2</button>
        <button>3</button>
        <button>➡️</button>
      </div>
    </div>
  );
}

export default Buy;
