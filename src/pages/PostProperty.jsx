import React, { useState } from "react";
import "./PostProperty.css";

function PostProperty() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    propertyName: "",
    location: "",
    description: "",
    propertyType: "",
    listFor: "",
    price: "",
    agentName: "",
    agentId: "",
    agentEmail: "",
    agentPhone: "",
    area: "",
    garden: "",
    garage: "",
    bedrooms: "",
    bathrooms: "",
    gym: "",
    otherFacilities: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    console.log("Selected files:", e.target.files);
  };

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const confirm = () => {
    console.log("Form submitted:", formData);
    alert("Form confirmed! Check console for data.");
  };

  return (
    <>
      {/* === Form Section === */}
      <div className="post-properties">
        <div className="form-container">
          <h2 className="form-title">🏠 Rent / Sale Property</h2>
          <p className="form-subtitle">
            Fill in the details to list your property
          </p>

          {/* Progress Steps */}
          <div className="stepper">
            <div className={`step ${step === 1 ? "active" : ""}`}>1</div>
            <span>General</span>
            <div className="line"></div>
            <div className={`step ${step === 2 ? "active" : ""}`}>2</div>
            <span>Agent</span>
            <div className="line"></div>
            <div className={`step ${step === 3 ? "active" : ""}`}>3</div>
            <span>Others</span>
          </div>

          {/* Steps */}
          {step === 1 && (
            <div className="form-step">
              <label>Name</label>
              <input
                type="text"
                name="propertyName"
                value={formData.propertyName}
                onChange={handleChange}
                placeholder="Provide Property Name"
              />

              <label>Location</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Provide Property Location"
              />

              <label>Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Provide Description"
              />

              <div className="form-row">
                <div className="form-col">
                  <label>Property Type</label>
                  <select
                    name="propertyType"
                    value={formData.propertyType}
                    onChange={handleChange}
                  >
                    <option value="">Select</option>
                    <option value="House">House</option>
                    <option value="Apartment">Apartment</option>
                    <option value="Villa">Villa</option>
                  </select>
                </div>
                <div className="form-col">
                  <label>List For</label>
                  <select
                    name="listFor"
                    value={formData.listFor}
                    onChange={handleChange}
                  >
                    <option value="">Select</option>
                    <option value="Rent">Rent</option>
                    <option value="Sale">Sale</option>
                  </select>
                </div>
              </div>

              <label>Price</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="Set Price for the Property"
              />

              <label>Upload Property Images</label>
              <div className="upload-box">
                <input type="file" multiple onChange={handleFileChange} />
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="form-step">
              <label>Agent Name</label>
              <input
                type="text"
                name="agentName"
                value={formData.agentName}
                onChange={handleChange}
                placeholder="Enter Agent Name"
              />

              <label>Agent ID</label>
              <input
                type="text"
                name="agentId"
                value={formData.agentId}
                onChange={handleChange}
                placeholder="Provide Agent ID"
              />

              <label>Email</label>
              <input
                type="email"
                name="agentEmail"
                value={formData.agentEmail}
                onChange={handleChange}
                placeholder="Provide Agent Email"
              />

              <label>Phone</label>
              <input
                type="tel"
                name="agentPhone"
                value={formData.agentPhone}
                onChange={handleChange}
                placeholder="Provide Agent Phone Number"
              />
            </div>
          )}

          {step === 3 && (
            <div className="form-step">
              <div className="form-row">
                <div className="form-col">
                  <label>Area</label>
                  <input
                    type="text"
                    name="area"
                    value={formData.area}
                    onChange={handleChange}
                    placeholder="Property Area"
                  />
                </div>
                <div className="form-col">
                  <label>Garden</label>
                  <input
                    type="text"
                    name="garden"
                    value={formData.garden}
                    onChange={handleChange}
                    placeholder="Garden"
                  />
                </div>
                <div className="form-col">
                  <label>Garage</label>
                  <input
                    type="number"
                    name="garage"
                    value={formData.garage}
                    onChange={handleChange}
                    placeholder="Garage Capacity"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-col">
                  <label>Bedrooms</label>
                  <input
                    type="number"
                    name="bedrooms"
                    value={formData.bedrooms}
                    onChange={handleChange}
                    placeholder="No of Bedrooms"
                  />
                </div>
                <div className="form-col">
                  <label>Bathrooms</label>
                  <input
                    type="number"
                    name="bathrooms"
                    value={formData.bathrooms}
                    onChange={handleChange}
                    placeholder="No of Bathrooms"
                  />
                </div>
                <div className="form-col">
                  <label>Gym</label>
                  <input
                    type="number"
                    name="gym"
                    value={formData.gym}
                    onChange={handleChange}
                    placeholder="Gym Count"
                  />
                </div>
              </div>

              <label>Other Facilities</label>
              <textarea
                name="otherFacilities"
                value={formData.otherFacilities}
                onChange={handleChange}
                placeholder="Other Amenities"
              />

              <label>Upload Map</label>
              <div className="upload-box">
                <input type="file" onChange={handleFileChange} />
              </div>
            </div>
          )}

          {/* Buttons */}
          <div className="form-actions">
            {step > 1 && (
              <button onClick={prevStep} className="btn secondary">
                ← Previous
              </button>
            )}
            {step < 3 ? (
              <button onClick={nextStep} className="btn primary">
                Next →
              </button>
            ) : (
              <button onClick={confirm} className="btn primary">
                Confirm
              </button>
            )}
          </div>
        </div>
      </div>

      {/* === Footer Section === */}
      <footer className="site-footer">
        <div className="footer-container">
          <div className="footer-left">
            <h2 className="footer-logo">🏠 Hamro-Ghar</h2>
            <h3>Do You Need Help With Anything?</h3>
            <p>
              Receive updates, hot deals, tutorials, discounts sent straight in
              your inbox every month
            </p>
            <div className="subscribe-box">
              <input type="email" placeholder="Email Address" />
              <button>Subscribe</button>
            </div>
          </div>

          <div className="footer-links">
            <div>
              <h4>LAYOUTS</h4>
              <ul>
                <li><a href="/">Home Page</a></li>
                <li><a href="/about">About Page</a></li>
                <li><a href="/Rent">Service Page</a></li>
                <li><a href="/Buy">Property Page</a></li>
                <li><a href="/Contact">Contact Page</a></li>
                <li><a href="/Blog">Blog Page</a></li>
              </ul>
            </div>

            <div>
              <h4>ALL SECTIONS</h4>
              <ul>
                <li>Headers</li>
                <li>Features</li>
                <li>Attractive</li>
                <li>Videos</li>
              </ul>
            </div>

            <div>
              <h4>COMPANY</h4>
              <ul>
                <li><a href="/about">About Page</a></li>
                <li><a href="/Blog">Blog Page</a></li>
                <li>Pricing</li>
                <li><a href="/Login">Login</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default PostProperty;