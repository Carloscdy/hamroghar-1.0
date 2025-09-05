import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './ContactAgent.css';
import properties from '../Essentials/PropertiesData';

function ContactAgent() {
  const { id } = useParams();
  const property = properties.find(p => p.id === parseInt(id)) || properties[0]; 
  const navigate = useNavigate();
   const inquiry =() =>{
    navigate('/')
   }

  return (
    <div className="contact-agent-container">
      <div className="form-section">
        <h2>Contact Agent</h2>
        <label>Name:</label>
        <input type="text" placeholder="Enter your Full Details" />
        <label>Email:</label>
        <input type="email" placeholder="Enter your Email" />
        <label>Message:</label>
        <textarea placeholder="Enter your message"></textarea>
        <button className="send-inquiry-btn" onClick={inquiry}>Send Inquiry</button>
      </div>
      <div className="agent-details">
        <h2>Agent Details</h2>
        <img src="/assets/images/agent-photo.jpg" alt="Agent" className="agent-photo" /> {/* Placeholder */}
        <p>Name: Tony Starks</p>
        <p>Agent Id: #00010</p>
        <p>Email: example@hamroghar.com</p>
        <p>Phone: 9845000001</p>
        <p>Property Id: #{property.id}j</p> {/* Dynamic property ID */}
      </div>
    </div>
  );
}

export default ContactAgent;