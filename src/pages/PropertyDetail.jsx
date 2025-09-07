// src/pages/PropertyDetail.jsx
import React, { useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./PropertyDetail.css";

/* Direct image imports — adjust paths if your images are in different folder */
import img1 from "../assets/images/bg1.jpg";
import img2 from "../assets/images/bg2.jpg";
import img3 from "../assets/images/bg3.png";
import img4 from "../assets/images/bg4.png";
import img5 from "../assets/images/bg5.png";
import img6 from "../assets/images/bg6.png";
import img7 from "../assets/images/bg7.png";
import img8 from "../assets/images/bg8.png";
import img9 from "../assets/images/bg9.jpg";
import img10 from "../assets/images/bg10.jpg";
import img11 from "../assets/images/bg11.jpg";
import img12 from "../assets/images/bg15.jpg";

/*
  Local properties array — keep in this file as you requested.
  Make sure ids are unique and match the links you create in Home/Buy.
*/
const properties = [
  { id: 1, title: "2BHK Apartment", location: "Bhaktapur", type: "Apartment", for: "sale", price: "15 Lakh", images: [img1, img2, img3], bedrooms: 2, area: "1100 sqft", kitchen: 1, bathroom: 1, parking: "Available", features: ["Balcony", "Parking", "Lift"], description: "Modern 2BHK apartment in a peaceful neighbourhood." },
  { id: 2, title: "3BHK Apartment", location: "Bhaktapur", type: "Apartment", for: "sale", price: "25 Lakh", images: [img4, img5, img6], bedrooms: 3, area: "1500 sqft", kitchen: 1, bathroom: 2, parking: "Available", features: ["Gym", "Garden", "Terrace"], description: "Spacious 3BHK with great lighting and finishes." },
  { id: 3, title: "Studio Apartment", location: "Lalitpur", type: "Studio", for: "sale", price: "12 Lakh", images: [img7, img8, img9], bedrooms: 1, area: "600 sqft", kitchen: 1, bathroom: 1, parking: "Street", features: ["Furnished", "WiFi"], description: "Compact studio ideal for singles or students." },
  { id: 4, title: "Luxury Villa", location: "Kathmandu", type: "Villa", for: "sale", price: "80 Lakh", images: [img10, img11, img12], bedrooms: 5, area: "5000 sqft", kitchen: 2, bathroom: 4, parking: "Available", features: ["Pool", "Garden", "Garage"], description: "Large luxury villa with private pool and garden." },
  {
    id: 5,
    title: "2BHK House",
    location: "Pokhara",
    type: "House",
    for: "sale",
    price: "35 Lakh",
    priceValue: 350000,
    images: [img9, img1, img5],
    bedrooms: 2,
    area: "1200 sqft",
    features: ["Terrace", "Balcony"],
  },
  {
    id: 6,
    title: "3BHK Villa",
    location: "Lalitpur",
    type: "Villa",
    for: "sale",
    price: "60 Lakh",
    priceValue: 600000,
    images: [img2, img3, img4],
    bedrooms: 3,
    area: "2200 sqft",
    features: ["Garden", "Parking"],
  }
];

export default function PropertyDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const pid = Number(id);

  // Defensive: find property safely
  const property = properties.find((p) => Number(p.id) === pid);

  // Local gallery state
  const [index, setIndex] = useState(0);
  const [zoomed, setZoomed] = useState(false);

  // Lightbox
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Thumbnail refs (for scrollIntoView)
  const thumbRefs = useRef([]);
  thumbRefs.current = [];
  const addThumbRef = (el) => { if (el && !thumbRefs.current.includes(el)) thumbRefs.current.push(el); };

  // Touch for swipe
  const touchRef = useRef({ startX: null, endX: null });

  // Reset when id changes
  useEffect(() => {
    setIndex(0);
    setZoomed(false);
    setLightboxOpen(false);
  }, [pid]);

  // scroll active thumbnail into view (guarded)
  useEffect(() => {
    try {
      const el = thumbRefs.current[index];
      if (el && typeof el.scrollIntoView === "function") {
        el.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      }
    } catch (err) {
      console.warn("Thumbnail scrollIntoView failed:", err);
    }
  }, [index]);

  // keyboard nav (guarded)
  useEffect(() => {
    const handler = (e) => {
      if (!property) return;
      const images = Array.isArray(property.images) ? property.images : [];
      if (lightboxOpen) {
        if (e.key === "Escape") closeLightbox();
        if (e.key === "ArrowLeft") setLightboxIndex((i) => (i - 1 + images.length) % images.length);
        if (e.key === "ArrowRight") setLightboxIndex((i) => (i + 1) % images.length);
      } else {
        if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + images.length) % images.length);
        if (e.key === "ArrowRight") setIndex((i) => (i + 1) % images.length);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxOpen, property]);

  if (!property) {
    // Show friendly fallback instead of crash
    return (
      <div className="property-detail not-found container">
        <h2>Property not found</h2>
        <p>No property matches the requested ID ({id}). Make sure the route is /property/:id and the id exists.</p>
        <button className="btn-back" onClick={() => navigate(-1)}>Go back</button>
      </div>
    );
  }

  // Safe image array
  const images = Array.isArray(property.images) ? property.images : [];

  const prevImage = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const nextImage = () => setIndex((i) => (i + 1) % images.length);

  // lightbox with safe window checks
  const openLightbox = (i = 0) => {
    setLightboxIndex(i);
    setLightboxOpen(true);
    if (typeof window !== "undefined" && document?.body) document.body.style.overflow = "hidden";
  };
  const closeLightbox = () => {
    setLightboxOpen(false);
    if (typeof window !== "undefined" && document?.body) document.body.style.overflow = "";
  };
  const lbPrev = () => setLightboxIndex((i) => (i - 1 + images.length) % images.length);
  const lbNext = () => setLightboxIndex((i) => (i + 1) % images.length);

  // touch/swipe handlers
  const onTouchStart = (e) => { touchRef.current.startX = e.touches?.[0]?.clientX ?? null; };
  const onTouchMove = (e) => { touchRef.current.endX = e.touches?.[0]?.clientX ?? null; };
  const onTouchEnd = (context = "gallery") => {
    const { startX, endX } = touchRef.current;
    touchRef.current = { startX: null, endX: null };
    if (startX == null || endX == null) return;
    const dx = startX - endX;
    if (Math.abs(dx) < 40) return;
    if (dx > 0) { if (context === "gallery") nextImage(); else lbNext(); }
    else { if (context === "gallery") prevImage(); else lbPrev(); }
  };

  const priceLabel = property.price ?? (property.priceValue ? `Rs. ${property.priceValue}` : "Price on request");

  return (
    <div className="prop-deta">
    <div className="property-detail container">
      <div className="detail-grid">
        <div className="detail-left">
          <div className="gallery"
               onTouchStart={onTouchStart}
               onTouchMove={onTouchMove}
               onTouchEnd={() => onTouchEnd("gallery")}>
            <button className="gallery-arrow left" onClick={prevImage} aria-label="Previous">❮</button>

            <div className={`main-image ${zoomed ? "zoomed" : ""}`}
                 onClick={() => setZoomed((z) => !z)}
                 onDoubleClick={() => openLightbox(index)}
                 role="button"
                 tabIndex={0}
                 onKeyDown={(e) => { if (e.key === "Enter") setZoomed((z) => !z); }}>
              {images.length > 0 ? <img src={images[index]} alt={`${property.title} ${index + 1}`} /> : <div className="no-image">No images</div>}
            </div>

            <button className="gallery-arrow right" onClick={nextImage} aria-label="Next">❯</button>
          </div>

          <div className="thumbnails">
            {images.map((src, i) => (
              <button key={i}
                      ref={addThumbRef}
                      className={`thumb ${i === index ? "active" : ""}`}
                      onClick={() => { setIndex(i); setZoomed(false); }}
                      onDoubleClick={() => openLightbox(i)}
                      title="Click to select — double-click to open fullscreen">
                <img src={src} alt={`${property.title} thumb ${i + 1}`} />
              </button>
            ))}
          </div>

          <div className="summary">
            <div className="summary-left">
              <h1>{property.title}</h1>
              <p className="muted">📍 {property.location}</p>
              <div className="tag-row">
                <span className="tag for-sale">{property.for === "sale" ? "For Sale" : "For Rent"}</span>
                <span className="tag type">{property.type}</span>
                <span className="tag bed">{property.bedrooms} Bedrooms</span>
              </div>
            </div>

            <div className="summary-right">
              <div className="big-price">{priceLabel}</div>
              <div className="small-muted">Total Price</div>
            </div>
          </div>

          <div className="meta-icons">
            <div className="meta-item">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M3 7h18v7H3z" stroke="#374151" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7 14v4" stroke="#374151" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17 14v4" stroke="#374151" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div>
                <div className="meta-label">{property.bedrooms} Beds</div>
                <div className="meta-sub">{property.area}</div>
              </div>
            </div>

            <div className="meta-item">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
                <rect x="3" y="7" width="18" height="10" stroke="#374151" strokeWidth="1.2" rx="1"/>
                <path d="M7 12h10" stroke="#374151" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
              <div>
                <div className="meta-label">{property.kitchen} Kitchen</div>
                <div className="meta-sub">Modern fittings</div>
              </div>
            </div>

            <div className="meta-item">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M7 21v-8a4 4 0 018 0v8" stroke="#374151" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7 7h10" stroke="#374151" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
              <div>
                <div className="meta-label">{property.bathroom} Bathroom</div>
                <div className="meta-sub">Well ventilated</div>
              </div>
            </div>

            <div className="meta-item">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
                <rect x="2" y="6" width="20" height="11" rx="2" stroke="#374151" strokeWidth="1.2"/>
                <path d="M8 17v-6" stroke="#374151" strokeWidth="1.2" strokeLinecap="round"/>
                <path d="M15 17v-6" stroke="#374151" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
              <div>
                <div className="meta-label">{property.parking}</div>
                <div className="meta-sub">Parking</div>
              </div>
            </div>
          </div>

          <div className="property-details">
            <h3>Property Details</h3>
            <p>{property.description}</p>

            <h4>Features</h4>
            <ul className="features-list">
              {Array.isArray(property.features) ? property.features.map((f, i) => <li key={i}>{f}</li>) : null}
            </ul>
          </div>
        </div>

        <aside className="detail-right">
          <div className="contact-card">
            <div className="agent-head">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Agent avatar" />
              <div>
                <div className="agent-name">Sujan Shrestha <span className="muted">(Agent)</span></div>
                <div className="muted">📞 +977 9712345678</div>
                <div className="muted">✉️ sujan@hamroghar.com</div>
              </div>
            </div>

            <h4>Contact For Enquiry</h4>
            <form className="contact-form" onSubmit={(e) => { e.preventDefault(); alert("Request sent — demo"); }}>
              <label>Full Name</label>
              <input type="text" placeholder="Enter your full name" required />
              <label>Email</label>
              <input type="email" placeholder="Enter your email address" required />
              <label>Phone Number</label>
              <input type="tel" placeholder="Enter your phone number" />
              <label>Visit Date</label>
              <input type="date" />
              <label>Message</label>
              <textarea placeholder="Write a message..." rows="4" />
              <button type="submit" className="book-btn">Book Visit</button>
            </form>
          </div>

          <div className="map-card">
            <h4>Property Location on Map</h4>
            <iframe title="property-map" src={`https://www.google.com/maps?q=${encodeURIComponent(property.location)}&output=embed`} loading="lazy" />
            <button className="view-map" onClick={() => window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(property.location)}`, "_blank")}>View on Map</button>
          </div>
        </aside>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={closeLightbox} onTouchStart={(e) => { touchRef.current.startX = e.touches?.[0]?.clientX ?? null; }} onTouchMove={(e) => { touchRef.current.endX = e.touches?.[0]?.clientX ?? null; }} onTouchEnd={() => onTouchEnd("lightbox")}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lb-close" onClick={closeLightbox}>✕</button>
            <button className="lb-prev" onClick={lbPrev}>❮</button>
            <div className="lb-image-wrap"><img src={images[lightboxIndex]} alt={`${property.title} fullscreen ${lightboxIndex + 1}`} /></div>
            <button className="lb-next" onClick={lbNext}>❯</button>
          </div>
        </div>
      )}
    </div>

     {/* ================= Footer ================= */}
     <footer className="site-footer">
          <div className="footer-container">
            <div className="footer-left">
              <h2 className="footer-logo">🏠 Hamro-Ghar</h2>
              <h3>Do You Need Help With Anything?</h3>
              <p>
                Receive updates, hot deals, tutorials, discounts sent straight
                in your inbox every month
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

</div>
  );
}
