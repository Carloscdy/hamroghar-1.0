import React  from 'react';
import { useState } from 'react';

function PostProperty() {
const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    propertyName: '',
    location: '',
    description: '',
    propertyType: '',
    listFor: '',
    price: '',
    agentName: '',
    agentId: '',
    agentEmail: '',
    agentPhone: '',
    area: '',
    garden: '',
    garage: '',
    bedrooms: '',
    bathrooms: '',
    gym: '',
    otherFacilities: '',
    // For files, we'll just log them; in a real app, use a library like FormData for uploads
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    console.log('Selected files:', e.target.files);
  };

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const confirm = () => {
    console.log('Form submitted:', formData);
    alert('Form confirmed! Check console for data.');
  };

  return (
    <div style={{ maxWidth: '600px', margin: 'auto', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', background: '#fff' }}>
      <h2 style={{ textAlign: 'center' }}>Rent/Sale Property</h2>
      <p style={{ textAlign: 'center', color: '#666' }}>Fill the details to sale property</p>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <span style={{ background: step === 1 ? '#a29df7' : '#ccc', color: '#fff', padding: '5px 10px', borderRadius: '50%' }}>1</span>
        <span>General</span>
        <span style={{ flex: 1, borderBottom: '1px solid #ccc', margin: '0 10px' }}></span>
        <span style={{ background: step === 2 ? '#a29df7' : '#ccc', color: '#fff', padding: '5px 10px', borderRadius: '50%' }}>2</span>
        <span>Agent</span>
        <span style={{ flex: 1, borderBottom: '1px solid #ccc', margin: '0 10px' }}></span>
        <span style={{ background: step === 3 ? '#a29df7' : '#ccc', color: '#fff', padding: '5px 10px', borderRadius: '50%' }}>3</span>
        <span>Others</span>
      </div>

      {step === 1 && (
        <div>
          <label>Name</label>
          <input type="text" name="propertyName" value={formData.propertyName} onChange={handleChange} placeholder="Provide Property Name" style={inputStyle} />

          <label>Location</label>
          <input type="text" name="location" value={formData.location} onChange={handleChange} placeholder="Provide Property Location" style={inputStyle} />

          <label>Description</label>
          <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Provide Description for the property" style={{ ...inputStyle, height: '80px' }} />

          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ width: '48%' }}>
              <label>Property Type</label>
              <select name="propertyType" value={formData.propertyType} onChange={handleChange} style={inputStyle}>
                <option value="">Select</option>
                <option value="House">House</option>
                <option value="Apartment">Apartment</option>
                <option value="Villa">Villa</option>
              </select>
            </div>
            <div style={{ width: '48%' }}>
              <label>List for</label>
              <select name="listFor" value={formData.listFor} onChange={handleChange} style={inputStyle}>
                <option value="">Select</option>
                <option value="Rent">Rent</option>
                <option value="Sale">Sale</option>
              </select>
            </div>
          </div>

          <label>Price</label>
          <input type="number" name="price" value={formData.price} onChange={handleChange} placeholder="Set Price for the Property" style={inputStyle} />

          <label>Images for the property</label>
          <div style={uploadStyle}>
            <input type="file" multiple onChange={handleFileChange} />
            <button>Click to browse</button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div>
          <label>Name</label>
          <input type="text" name="agentName" value={formData.agentName} onChange={handleChange} placeholder="Provide Agent Name" style={inputStyle} />

          <label>ID</label>
          <input type="text" name="agentId" value={formData.agentId} onChange={handleChange} placeholder="Provide Agent Id" style={inputStyle} />

          <label>Email</label>
          <input type="email" name="agentEmail" value={formData.agentEmail} onChange={handleChange} placeholder="Provide Agent Email" style={inputStyle} />

          <label>Phone</label>
          <input type="tel" name="agentPhone" value={formData.agentPhone} onChange={handleChange} placeholder="Provide Agent Phone Number" style={inputStyle} />

          <div style={{ height: '80px' }}></div> {/* Padding to match General section height */}
        </div>
      )}

      {step === 3 && (
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ width: '30%' }}>
              <label>Area</label>
              <input type="text" name="area" value={formData.area} onChange={handleChange} placeholder="Specify Property Area" style={inputStyle} />
            </div>
            <div style={{ width: '30%' }}>
              <label>Garden</label>
              <input type="text" name="garden" value={formData.garden} onChange={handleChange} placeholder="Garden" style={inputStyle} />
            </div>
            <div style={{ width: '30%' }}>
              <label>Garage</label>
              <input type="number" name="garage" value={formData.garage} onChange={handleChange} placeholder="No of Car it can fit" style={inputStyle} />
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ width: '30%' }}>
              <label>Bedrooms</label>
              <input type="number" name="bedrooms" value={formData.bedrooms} onChange={handleChange} placeholder="No of Bedrooms" style={inputStyle} />
            </div>
            <div style={{ width: '30%' }}>
              <label>Bathroom</label>
              <input type="number" name="bathrooms" value={formData.bathrooms} onChange={handleChange} placeholder="No of Bathroom" style={inputStyle} />
            </div>
            <div style={{ width: '30%' }}>
              <label>Gym</label>
              <input type="number" name="gym" value={formData.gym} onChange={handleChange} placeholder="No of Gym" style={inputStyle} />
            </div>
          </div>

          <label>Other Facilities</label>
          <textarea name="otherFacilities" value={formData.otherFacilities} onChange={handleChange} placeholder="If any other amenities and facilities" style={{ ...inputStyle, height: '80px' }} />

          <label>Map of the property</label>
          <div style={uploadStyle}>
            <input type="file" onChange={handleFileChange} />
            <button>Click to browse</button>
          </div>
        </div>
      )}

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
        {step > 1 && (
          <button onClick={prevStep} style={buttonStyle}>Previous ←</button>
        )}
        {step < 3 ? (
          <button onClick={nextStep} style={{ ...buttonStyle, background: '#a29df7', color: '#fff' }}>Next →</button>
        ) : (
          <button onClick={confirm} style={{ ...buttonStyle, background: '#a29df7', color: '#fff' }}>Confirm</button>
        )}
      </div>
    </div>
  );
}

const inputStyle = {
  width: '100%',
  padding: '10px',
  margin: '5px 0 15px 0',
  border: '1px solid #ccc',
  borderRadius: '5px',
  boxSizing: 'border-box',
};

const uploadStyle = {
  border: '1px dashed #ccc',
  padding: '20px',
  textAlign: 'center',
  margin: '10px 0',
  borderRadius: '5px',
};

const buttonStyle = {
  padding: '10px 20px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  background: '#ddd',

}

export default PostProperty;
