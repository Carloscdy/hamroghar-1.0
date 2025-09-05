import React, { useState, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import "./PropertyDetail.css";

// import images (adjust paths if needed)
import bg1 from "../assets/images/bg1.jpg";
import bg2 from "../assets/images/bg2.jpg";
import bg3 from "../assets/images/bg3.png";
import bg4 from "../assets/images/bg4.png";
import bg5 from "../assets/images/bg5.png";
import bg6 from "../assets/images/bg6.png";
import bg7 from "../assets/images/bg7.png";
import bg8 from "../assets/images/bg8.png";

const sampleProperties = [
  {
    id: 1,
    title: "Luxury Villa in Kathmandu",
    price: "Rs. 2.50 Crore",
    images: [bg4, bg1, bg6, bg7],
    location: "Kathmandu, Near Pashupatinath",
    description:
      "Hamro-Ghar presents this luxury villa with modern amenities, spacious interiors and premium finishes. Built with attention to detail and located in a quiet, accessible neighborhood.",
    details: {
      Bedrooms: 5,
      Bathrooms: 4,
      Kitchen: 2,
      "Living Rooms": 2,
      Parking: 2,
      "Total Floors": 2,
    },
    overview: {
      "Property Type": "Villa",
      Purpose: "Sale",
      "Property Face": "East",
      "Property Area": "8 Aana",
      "Year Built": "2079",
      "Built Up Area": "4200 sq ft",
      "Road Access": "20 Feet",
      Negotiable: "Yes",
      "Date Posted": "2025-09-04",
      Furnishing: "Fully Furnished",
      "City & Area": "Kathmandu",
    },
    amenities: [
      "Swimming Pool",
      "CCTV",
      "Solar Water",
      "Modular Kitchen",
      "Parking",
      "Balcony",
      "WiFi",
    ],
  },
  {
    id: 2,
    title: "Modern Apartment in Pokhara",
    price: "Rs. 1.50 Crore",
    images: [bg2, bg3, bg5],
    location: "Pokhara, Lakeside",
    description:
      "Comfortable modern apartments close to the lake and central amenities. Great for families and professionals.",
    details: {
      Bedrooms: 3,
      Bathrooms: 2,
      Kitchen: 1,
      Parking: 1,
      "Total Floors": 1,
    },
    overview: {
      "Property Type": "Apartment",
      Purpose: "Sale",
      "Property Area": "2 Aana",
      "Year Built": "2080",
      "Built Up Area": "1400 sq ft",
      "Road Access": "12 Feet",
      Negotiable: "No",
      "Date Posted": "2025-08-20",
      Furnishing: "Semi Furnished",
      "City & Area": "Pokhara, Lakeside",
    },
    amenities: ["Parking", "Balcony", "Elevator", "Water Tank"],
  },
  {
    id: 3,
    title: "Cozy House in Bhaktapur",
    price: "Rs. 1.20 Crore",
    images: [bg3, bg6, bg8],
    location: "Bhaktapur, Gatthaghar",
    description:
      "A cozy family house in a peaceful location with modern utilities and easy transport access. Suitable for immediate move-in.",
    details: {
      Bedrooms: 4,
      Bathrooms: 3,
      Kitchen: 1,
      Parking: 1,
    },
    overview: {
      "Property Type": "House",
      Purpose: "Sale",
      "Property Area": "3 Aana",
      "Year Built": "2078",
      "Built Up Area": "2400 sq ft",
      "Road Access": "16 Feet",
      Negotiable: "Yes",
      "Date Posted": "2025-09-01",
      Furnishing: "Fully Furnished",
      "City & Area": "Bhaktapur",
    },
    amenities: ["Parking", "Balcony", "CCTV", "WiFi"],
  },
];

const reviews = [
  { name: "Jyotsna Yogi", stars: 5, text: "From the beginning until the end, every process felt easy because Hamro-Ghar was with me every step of the way. Very professional and understanding." },
  { name: "Kunjan Shrestha", stars: 5, text: "Thanks to the Hamro-Ghar team for a wonderful deal. Expert and professional in banking/loan procedures." },
  { name: "Sifa Shekh", stars: 4, text: "Hamro-Ghar really helped us throughout the property buying process. They handled negotiations and property visits professionally." },
  { name: "Anil Koirala", stars: 5, text: "Great experience buying my first home. The team guided me on loans and transfers." },
  { name: "Pragya Shah", stars: 4, text: "Very helpful team. Found me a perfect house in Pokhara. Highly recommended." },
  { name: "Roshan Basnet", stars: 5, text: "Professional service and genuine properties. Loved the transparency." },
  { name: "Manisha Rai", stars: 5, text: "Smooth process, great communication from Hamro-Ghar." },
  { name: "Sanjay Thapa", stars: 5, text: "They really take care of clients like family. Honest and supportive team." },
];

function PropertyDetail() {
  const { id } = useParams();
  const propertyId = parseInt(id || "1", 10);
  const property = useMemo(() => sampleProperties.find((p) => p.id === propertyId) || sampleProperties[0], [propertyId]);

  // Gallery controlled index
  const [currentImage, setCurrentImage] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setCurrentImage((s) => (s + 1) % property.images.length), 3500);
    return () => clearInterval(t);
  }, [property.images.length]);

  // Reviews slider controls (3 at a time)
  const [reviewStart, setReviewStart] = useState(0);
  useEffect(() => {
    const r = setInterval(() => setReviewStart((s) => (s + 3) % reviews.length), 5000);
    return () => clearInterval(r);
  }, []);

  const nextReviews = () => setReviewStart((s) => (s + 3) % reviews.length);
  const prevReviews = () => setReviewStart((s) => (s - 3 + reviews.length) % reviews.length);

  const visibleReviews = [
    reviews[reviewStart % reviews.length],
    reviews[(reviewStart + 1) % reviews.length],
    reviews[(reviewStart + 2) % reviews.length],
  ];

  // manual gallery nav
  const prevImage = () => setCurrentImage((s) => (s - 1 + property.images.length) % property.images.length);
  const nextImage = () => setCurrentImage((s) => (s + 1) % property.images.length);

  // contact form local state
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: `Hi, I am interested in ${property.title}. Please share more details.`,
    firstTimeBuyer: false,
  });
  useEffect(() => {
    // when property changes, update default message
    setForm((f) => ({ ...f, message: `Hi, I am interested in ${property.title}. Please share more details.` }));
  }, [property.title]);

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === "checkbox" ? checked : value }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    alert(`Message sent!\n\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nMessage: ${form.message}`);
    setForm({
      name: "",
      email: "",
      phone: "",
      message: `Hi, I am interested in ${property.title}. Please share more details.`,
      firstTimeBuyer: false,
    });
  };

  return (
    <div className="property-detail-page">
      {/* HERO */}
      <header className="pd-hero" style={{ backgroundImage: `url(${property.images[0]})` }}>
        <div className="pd-hero-overlay">
          <div className="pd-hero-content">
            <h1>{property.title}</h1>
            <p className="pd-location">{property.location}</p>
            <div className="pd-hero-bottom">
              <span className="pd-price">{property.price}</span>
              <span className="pd-contact-cta">Contact: +977 9851-342035</span>
            </div>
          </div>
        </div>
      </header>

      {/* Description */}
      <section className="pd-description">
        <div className="container">
          <p>{property.description}</p>
        </div>
      </section>

      {/* Main split layout */}
      <main className="pd-main container">
        {/* LEFT: Overview + Video + Reviews */}
        <aside className="pd-left">
          <div className="card overview-card">
            <h3>Overview</h3>
            <table className="pd-table">
              <tbody>
                {Object.entries(property.overview).map(([k, v]) => (
                  <tr key={k}>
                    <td className="label">{k}</td>
                    <td className="value">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* VIDEO - Below Overview and above Reviews */}
          <div className="card video-card">
            <h3>Property Video Tour</h3>
            <div className="video-wrapper">
              {/* Responsive iframe - adjust width/height with CSS */}
              <iframe
                src="https://www.youtube.com/embed/T3Oo7VaeW-E"
                title="Property Video Tour"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>

          <div className="card reviews-card">
            <h3>Google Reviews</h3>
            <div className="reviews-controls">
              <button className="review-arrow" onClick={prevReviews} aria-label="Previous reviews">‹</button>
              <div className="reviews-window">
                {visibleReviews.map((r, i) => (
                  <div className="review" key={i}>
                    <div className="stars">{Array.from({ length: r.stars }).map((_, idx) => (<span key={idx}>★</span>))}</div>
                    <p className="review-text">{r.text}</p>
                    <p className="review-author">— {r.name}</p>
                  </div>
                ))}
              </div>
              <button className="review-arrow" onClick={nextReviews} aria-label="Next reviews">›</button>
            </div>
          </div>
        </aside>

        {/* RIGHT: Gallery, details, amenities, contact */}
        <section className="pd-right">
          <div className="card gallery-card">
            <div className="gallery-top">
              <button className="gallery-arrow" onClick={prevImage} aria-label="Prev image">‹</button>
              {/* fixed-size main image: same size no matter image ratio */}
              <img src={property.images[currentImage]} alt={`slide-${currentImage}`} className="gallery-main" />
              <button className="gallery-arrow" onClick={nextImage} aria-label="Next image">›</button>
            </div>

            <div className="gallery-thumbs">
              {property.images.map((img, i) => (
                <button key={i} className={`thumb ${i === currentImage ? "active" : ""}`} onClick={() => setCurrentImage(i)} aria-label={`Show image ${i + 1}`}>
                  <img src={img} alt={`thumb-${i}`} />
                </button>
              ))}
            </div>
          </div>

          <div className="two-column">
            <div className="card details-card">
              <h3>Property Details</h3>
              <table className="pd-table">
                <tbody>
                  {Object.entries(property.details).map(([k, v]) => (
                    <tr key={k}>
                      <td className="label">{k}</td>
                      <td className="value">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="card amenities-card">
              <h3>Amenities</h3>
              <ul className="amenities-grid">
                {property.amenities.map((a, i) => (
                  <li key={i} className="amenity">{a}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="card contact-card">
            <h3>Contact For Enquiry</h3>
            <form onSubmit={onSubmit} className="contact-form">
              <label>Full Name</label>
              <input name="name" value={form.name} onChange={onChange} type="text" placeholder="Your full name" required />
              <label>Email</label>
              <input name="email" value={form.email} onChange={onChange} type="email" placeholder="name@example.com" required />
              <label>Phone</label>
              <input name="phone" value={form.phone} onChange={onChange} type="tel" placeholder="+977 98XXXXXXXX" required />
              <label>Message</label>
              <textarea name="message" value={form.message} onChange={onChange} rows="5" placeholder="Write your message..."></textarea>

              <label className="checkbox">
                <input name="firstTimeBuyer" checked={form.firstTimeBuyer} onChange={onChange} type="checkbox" />
                I am a first time buyer
              </label>

              <div className="contact-actions">
                <button type="submit" className="btn primary">Send Message</button>
                <button type="button" className="btn outline" onClick={() => {
                  setForm((f) => ({ ...f, name: "", email: "", phone: "", message: `Hi, I am interested in ${property.title}. Please share more details.`, firstTimeBuyer: false }));
                }}>Reset</button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}

export default PropertyDetail;