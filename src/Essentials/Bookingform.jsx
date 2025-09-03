// src/components/BookingForm.js
import React, { useState } from 'react';

const BookingForm = ({ onSubmit, pricePerNight }) => {
  // State management for form inputs
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [guests, setGuests] = useState(1);
  const [email, setEmail] = useState('');

  // Calculate total price (simple example)
  const calculateTotal = () => {
    if (checkInDate && checkOutDate) {
      const days = Math.ceil((new Date(checkOutDate) - new Date(checkInDate)) / (1000 * 60 * 60 * 24));
      return days > 0 ? days * pricePerNight : 0;
    }
    return 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    const formData = { checkInDate, checkOutDate, guests, email, total: calculateTotal() };
    onSubmit(formData); // Call parent's submit handler
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <label>
        Check-in Date:
        <input 
          type="date" 
          value={checkInDate} 
          onChange={(e) => setCheckInDate(e.target.value)} 
          required 
        />
      </label>
      <label>
        Check-out Date:
        <input 
          type="date" 
          value={checkOutDate} 
          onChange={(e) => setCheckOutDate(e.target.value)} 
          required 
        />
      </label>
      <label>
        Number of Guests:
        <input 
          type="number" 
          value={guests} 
          onChange={(e) => setGuests(Number(e.target.value))} 
          min="1" 
          required 
        />
      </label>
      <label>
        Email:
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
      </label>
      <p><strong>Estimated Total:</strong> ${calculateTotal()}</p>
      <button type="submit">Book Now</button>
    </form>
  );
};

export default BookingForm;