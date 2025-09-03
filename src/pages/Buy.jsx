// src/pages/BuyPage.js
import React from 'react';
import PropertyDetails from '../Essentials/Propertydetails';
import BookingForm from '../Essentials/Bookingform';

const BuyPage = () => {
  // Mock property data (in a real app, this could come from props or API fetch)
  const property = {
    title: 'Cozy Beachfront Cottage',
    description: 'A beautiful 2-bedroom cottage right on the beach. Perfect for a relaxing getaway.',
    pricePerNight: 150,
    imageUrl: 'https://via.placeholder.com/600x400?text=Beach+Cottage', // Placeholder image
  };

  // Callback function for when the form is submitted
  const handleBookingSubmit = (formData) => {
    console.log('Booking submitted:', formData);
    alert('Booking request sent! (This is a simulation)');
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1>Book Your Stay</h1>
      <PropertyDetails property={property} />
      <BookingForm onSubmit={handleBookingSubmit} pricePerNight={property.pricePerNight} />
    </div>
  );
};

export default BuyPage;
