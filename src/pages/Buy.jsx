import React from 'react';
import './Buy.css';

const properties = [
  { id: 1, image: './assets/images/bg.jpg', location: 'Koteshwor, Kathmandu', rooms: 4, sqft: 3500, price: 2500000 },
  { id: 2, image: 'https://via.placeholder.com/300x200?text=House+2', location: 'Koteshwor, Kathmandu', rooms: 4, sqft: 3500, price: 2500000 },
  { id: 3, image: 'https://via.placeholder.com/300x200?text=House+3', location: 'Koteshwor, Kathmandu', rooms: 4, sqft: 3500, price: 2500000 },
  { id: 4, image: 'https://via.placeholder.com/300x200?text=House+4', location: 'Koteshwor, Kathmandu', rooms: 4, sqft: 3500, price: 2500000 },
  { id: 5, image: 'https://via.placeholder.com/300x200?text=House+5', location: 'Koteshwor, Kathmandu', rooms: 4, sqft: 3500, price: 2500000 },
  { id: 6, image: 'https://via.placeholder.com/300x200?text=House+6', location: 'Koteshwor, Kathmandu', rooms: 4, sqft: 3500, price: 2500000 },
  { id: 7, image: 'https://via.placeholder.com/300x200?text=House+7', location: 'Koteshwor, Kathmandu', rooms: 4, sqft: 3500, price: 2500000 },
  { id: 8, image: 'https://via.placeholder.com/300x200?text=House+8', location: 'Koteshwor, Kathmandu', rooms: 4, sqft: 3500, price: 2500000 },
  { id: 9, image: 'https://via.placeholder.com/300x200?text=House+9', location: 'Koteshwor, Kathmandu', rooms: 4, sqft: 3500, price: 2500000 },
];

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
              <button>View</button>
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
