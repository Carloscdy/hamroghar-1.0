// propertiesData.js
import backgroundImage from "../assets/images/bg1.jpg";
const properties = [
  {
    id: 1,
    image: backgroundImage ,
    location: 'Kalanki, Kathmandu',
    rooms: 4,
    sqft: 1800,
    price: 2900000,
    name: 'Sale Villa in Kathmandu',
    type: 'Villa',
    beds: 3,
    baths: 2,
    description: 'A beautifully designed luxury Villa in the heart of Kathmandu with modern fittings, spacious living area, modular kitchen and mountain views.',
    thumbnails: [
      'https://via.placeholder.com/150?text=Image1',
      'https://via.placeholder.com/150?text=Image2',
      'https://via.placeholder.com/150?text=Image3',
      'https://via.placeholder.com/150?text=Image4'
    ],
    features: ['24/7 Security', 'Elevator Access', 'Parking Space', 'Swimming Pool', 'Gym Facility'],
    map: 'https://via.placeholder.com/300x200?text=Map'
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/300x200?text=House+2',
    location: 'Kathmandu',
    rooms: 4,
    sqft: 1400,
    price: 24300000,
    name: '3 BHK Apartment in Kathmandu',
    type: 'Apartment',
    beds: 3,
    baths: 2,
    description: 'A spacious 3 BHK apartment with modern amenities.',
    thumbnails: [], // Add if needed
    features: [], // Add if needed
    map: 'https://via.placeholder.com/300x200?text=Map'
  },
  // Add the rest of your properties here, with full details
  { id: 3, image: 'https://via.placeholder.com/300x200?text=House+3', location: 'Koteshwor, Kathmandu', rooms: 4, sqft: 3500, price: 2500000, name: 'House 3', type: 'House', beds: 4, baths: 3, description: '', thumbnails: [], features: [], map: '' },
  { id: 4, image: 'https://via.placeholder.com/300x200?text=House+4', location: 'Koteshwor, Kathmandu', rooms: 4, sqft: 3500, price: 2500000, name: 'House 4', type: 'House', beds: 4, baths: 3, description: '', thumbnails: [], features: [], map: '' },
  { id: 5, image: 'https://via.placeholder.com/300x200?text=House+5', location: 'Koteshwor, Kathmandu', rooms: 4, sqft: 3500, price: 2500000, name: 'House 5', type: 'House', beds: 4, baths: 3, description: '', thumbnails: [], features: [], map: '' },
  { id: 6, image: 'https://via.placeholder.com/300x200?text=House+6', location: 'Koteshwor, Kathmandu', rooms: 4, sqft: 3500, price: 2500000, name: 'House 6', type: 'House', beds: 4, baths: 3, description: '', thumbnails: [], features: [], map: '' },
  { id: 7, image: 'https://via.placeholder.com/300x200?text=House+7', location: 'Koteshwor, Kathmandu', rooms: 4, sqft: 3500, price: 2500000, name: 'House 7', type: 'House', beds: 4, baths: 3, description: '', thumbnails: [], features: [], map: '' },
  { id: 8, image: 'https://via.placeholder.com/300x200?text=House+8', location: 'Koteshwor, Kathmandu', rooms: 4, sqft: 3500, price: 2500000, name: 'House 8', type: 'House', beds: 4, baths: 3, description: '', thumbnails: [], features: [], map: '' },
  { id: 9, image: 'https://via.placeholder.com/300x200?text=House+9', location: 'Koteshwor, Kathmandu', rooms: 4, sqft: 3500, price: 2500000, name: 'House 9', type: 'House', beds: 4, baths: 3, description: '', thumbnails: [], features: [], map: '' },
];

export default properties;