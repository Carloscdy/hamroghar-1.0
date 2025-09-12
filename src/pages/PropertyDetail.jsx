// src/pages/PropertyDetail.jsx
import React, { useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./PropertyDetail.css";

/* Direct image imports (adjust paths if needed) */
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
import img13 from "../assets/images/bg13.jpg";

/*
  Single `properties` array containing:
   - example detailed items (1..6)
   - buy listings (7..19)
   - rent listings (20..32)
  Each object uses `images: [...]`.
*/
const properties = [
  // detailed examples
  {
    id: 1,
    title: "2BHK Apartment",
    location: "Bhaktapur",
    type: "Apartment",
    for: "sale",
    price: "15 Lakh",
    images: [img1, img2, img3],
    bedrooms: 2,
    area: "1100 sqft",
    kitchen: 1,
    bathroom: 1,
    parking: "Available",
    features: ["Balcony", "Parking", "Lift"],
    description: "Modern 2BHK apartment in a peaceful neighbourhood.",
    youtube: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 2,
    title: "3BHK Apartment",
    location: "Bhaktapur",
    type: "Apartment",
    for: "sale",
    price: "25 Lakh",
    images: [img4, img5, img6],
    bedrooms: 3,
    area: "1500 sqft",
    kitchen: 1,
    bathroom: 2,
    parking: "Available",
    features: ["Gym", "Garden", "Terrace"],
    description: "Spacious 3BHK with great lighting and finishes.",
  },
  {
    id: 3,
    title: "Studio Apartment",
    location: "Lalitpur",
    type: "Studio",
    for: "sale",
    price: "12 Lakh",
    images: [img7, img8, img9],
    bedrooms: 1,
    area: "600 sqft",
    kitchen: 1,
    bathroom: 1,
    parking: "Street",
    features: ["Furnished", "WiFi"],
    description: "Compact studio ideal for singles or students.",
  },
  {
    id: 4,
    title: "Luxury Villa",
    location: "Kathmandu",
    type: "Villa",
    for: "sale",
    price: "80 Lakh",
    images: [img10, img11, img12],
    bedrooms: 5,
    area: "5000 sqft",
    kitchen: 2,
    bathroom: 4,
    parking: "Available",
    features: ["Pool", "Garden", "Garage"],
    description: "Large luxury villa with private pool and garden.",
    youtube: "https://www.youtube.com/embed/9bZkp7q19f0",
  },
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
    description: "Beautiful family house.",
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
    description: "Modern villa with garden.",
  },

  // Buy list (IDs 7..19)
  { id: 7, title: "Luxury Villa in Kathmandu", price: "Rs. 2,50,000", priceValue: 250000, images: [img1, img2, img3], service: "Villa", added: "2 weeks ago", location: "Kathmandu", features: ["Swimming Pool", "Parking", "Balcony", "Terrace"], description: "Luxury villa in Kathmandu." },
  { id: 8, title: "Modern Apartment in Pokhara", price: "Rs. 1,50,000", priceValue: 150000, images: [img2, img3, img4], service: "Apartment", added: "1 week ago", location: "Pokhara", features: ["Parking", "Balcony"], description: "Modern apartment in Pokhara." },
  { id: 9, title: "Cozy House in Bhaktapur", price: "Rs. 1,20,000", priceValue: 120000, images: [img3, img4, img5], service: "House", added: "3 days ago", location: "Bhaktapur", features: ["Terrace", "Balcony"], description: "Cozy house in Bhaktapur." },
  { id: 10, title: "Duplex in Lalitpur", price: "Rs. 2,20,000", priceValue: 220000, images: [img4, img5, img6], service: "Duplex", added: "5 days ago", location: "Lalitpur", features: ["Swimming Pool", "Parking", "Terrace"], description: "Spacious duplex." },
  { id: 11, title: "Cottage in Nagarkot", price: "Rs. 90,000", priceValue: 90000, images: [img5, img6, img7], service: "Cottage", added: "1 month ago", location: "Nagarkot", features: ["Parking", "Balcony"], description: "Quiet cottage near hills." },
  { id: 12, title: "Family Home in Chitwan", price: "Rs. 1,30,000", priceValue: 130000, images: [img6, img7, img8], service: "House", added: "2 weeks ago", location: "Chitwan", features: ["Terrace", "Parking"], description: "Family-friendly home." },
  { id: 13, title: "Riverside Villa in Dharan", price: "Rs. 2,00,000", priceValue: 200000, images: [img7, img8, img9], service: "Villa", added: "1 week ago", location: "Dharan", features: ["Swimming Pool", "Terrace", "Balcony"], description: "Riverside villa." },
  { id: 14, title: "Modern Condo in Butwal", price: "Rs. 1,40,000", priceValue: 140000, images: [img8, img9, img10], service: "Condo", added: "4 days ago", location: "Butwal", features: ["Parking", "Balcony"], description: "Comfortable condo." },
  { id: 15, title: "Apartment in Hetauda", price: "Rs. 1,10,000", priceValue: 110000, images: [img9, img10, img11], service: "Apartment", added: "3 weeks ago", location: "Hetauda", features: ["Balcony", "Terrace"], description: "Convenient apartment." },
  { id: 16, title: "Villa in Biratnagar", price: "Rs. 1,80,000", priceValue: 180000, images: [img10, img11, img12], service: "Villa", added: "6 days ago", location: "Biratnagar", features: ["Swimming Pool", "Parking"], description: "Spacious villa." },
  { id: 17, title: "House in Janakpur", price: "Rs. 1,00,000", priceValue: 100000, images: [img11, img12, img13], service: "House", added: "1 week ago", location: "Janakpur", features: ["Balcony", "Parking"], description: "Cozy house." },
  { id: 18, title: "Luxury Flat in Bharatpur", price: "Rs. 1,60,000", priceValue: 160000, images: [img1, img2, img4], service: "Flat", added: "2 weeks ago", location: "Bharatpur", features: ["Terrace", "Balcony"], description: "Modern flat." },
  { id: 19, title: "Cozy Home in Nepalgunj", price: "Rs. 95,000", priceValue: 95000, images: [img13, img5, img8], service: "House", added: "5 days ago", location: "Nepalgunj", features: ["Parking", "Balcony"], description: "Cozy home in town." },

  // Rent list (IDs 20..32)
  { id: 20, title: "Modern Apartment in Kathmandu", for: "rent", price: "Rs. 15,000 / month", priceValue: 15000, images: [img1, img2, img3], location: "Kathmandu", type: "Apartment", bedrooms: 2, area: "850 sqft", features: ["Balcony", "Parking", "24/7 Security"], description: "Comfortable modern apartment in Kathmandu." },
  { id: 21, title: "Cozy Studio in Lalitpur", for: "rent", price: "Rs. 10,000 / month", priceValue: 10000, images: [img2, img3, img4], location: "Lalitpur", type: "Studio", bedrooms: 1, area: "420 sqft", features: ["Furnished", "WiFi", "Water Supply"], description: "Compact studio close to amenities." },
  { id: 22, title: "Luxury Villa in Pokhara", for: "rent", price: "Rs. 45,000 / month", priceValue: 45000, images: [img3, img4, img5], location: "Pokhara", type: "Villa", bedrooms: 4, area: "2700 sqft", features: ["Garden", "Garage", "Lake View"], description: "Luxury villa with scenic lake views." },
  { id: 23, title: "Family House in Bhaktapur", for: "rent", price: "Rs. 22,000 / month", priceValue: 22000, images: [img4, img5, img6], location: "Bhaktapur", type: "House", bedrooms: 3, area: "1400 sqft", features: ["Spacious Rooms", "Parking", "Terrace"], description: "Family-friendly house in quiet neighborhood." },
  { id: 24, title: "Affordable Flat in Baneshwor", for: "rent", price: "Rs. 12,000 / month", priceValue: 12000, images: [img5, img6, img7], location: "Baneshwor", type: "Flat", bedrooms: 2, area: "720 sqft", features: ["Near Market", "Public Transport"], description: "Budget-friendly flat close to shops." },
  { id: 25, title: "1BHK - Pokhara", for: "rent", price: "Rs. 8,000 / month", priceValue: 8000, images: [img6, img7, img8], location: "Pokhara", type: "Apartment", bedrooms: 1, area: "520 sqft", features: ["Parking"], description: "Cozy 1BHK in a convenient area." },
  { id: 26, title: "Riverside Villa - Dharan", for: "rent", price: "Rs. 45,000 / month", priceValue: 45000, images: [img7, img8, img9], location: "Dharan", type: "Villa", bedrooms: 5, area: "3400 sqft", features: ["Swimming Pool", "Terrace"], description: "Riverside villa ideal for groups/short stays." },
  { id: 27, title: "Modern Condo - Butwal", for: "rent", price: "Rs. 18,000 / month", priceValue: 18000, images: [img8, img9, img10], location: "Butwal", type: "Condo", bedrooms: 2, area: "900 sqft", features: ["Elevator", "Parking"], description: "Modern condo with elevator access." },
  { id: 28, title: "Apartment - Hetauda", for: "rent", price: "Rs. 13,000 / month", priceValue: 13000, images: [img9, img10, img11], location: "Hetauda", type: "Apartment", bedrooms: 2, area: "780 sqft", features: ["Balcony", "Terrace"], description: "Comfortable apartment near transport links." },
  { id: 29, title: "2BHK Villa - Biratnagar", for: "rent", price: "Rs. 22,000 / month", priceValue: 22000, images: [img10, img11, img12], location: "Biratnagar", type: "Villa", bedrooms: 2, area: "1300 sqft", features: ["Parking", "Garden"], description: "2BHK villa with garden space." },
  { id: 30, title: "House - Janakpur", for: "rent", price: "Rs. 14,000 / month", priceValue: 14000, images: [img11, img12, img13], location: "Janakpur", type: "House", bedrooms: 3, area: "1000 sqft", features: ["Parking"], description: "Spacious house in a residential area." },
  { id: 31, title: "Flat - Bharatpur", for: "rent", price: "Rs. 20,000 / month", priceValue: 20000, images: [img12, img13, img1], location: "Bharatpur", type: "Flat", bedrooms: 3, area: "1100 sqft", features: ["Terrace"], description: "Large flat with terrace and nice views." },
  { id: 32, title: "Cozy Home - Nepalgunj", for: "rent", price: "Rs. 11,000 / month", priceValue: 11000, images: [img13, img1, img2], location: "Nepalgunj", type: "House", bedrooms: 2, area: "760 sqft", features: ["Parking", "Balcony"], description: "Cozy and affordable home." }
];

export default function PropertyDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const pid = Number(id);

  // -------------------------
  // Hooks (must be top-level)
  // -------------------------
  const [index, setIndex] = useState(0);
  const [zoomed, setZoomed] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const thumbRefs = useRef([]);
  thumbRefs.current = [];
  const addThumbRef = (el) => {
    if (el && !thumbRefs.current.includes(el)) thumbRefs.current.push(el);
  };

  const touchRef = useRef({ startX: null, endX: null });

  // -------------------------
  // Find property (safe)
  // -------------------------
  const property = properties.find((p) => Number(p.id) === pid);

const images = Array.isArray(property?.images)
  ? property.images
  : property?.image
    ? (Array.isArray(property.image) ? property.image : [property.image])
    : [];


  // Reset gallery when id changes
  useEffect(() => {
    setIndex(0);
    setZoomed(false);
    setLightboxOpen(false);
    setLightboxIndex(0);
  }, [pid]);

  // scroll active thumbnail into view
  useEffect(() => {
    try {
      const el = thumbRefs.current[index];
      if (el && typeof el.scrollIntoView === "function") {
        el.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      }
    } catch {}
  }, [index]);

  // keyboard nav for gallery and lightbox
  useEffect(() => {
    const handler = (e) => {
      if (lightboxOpen) {
        if (e.key === "Escape") setLightboxOpen(false);
        if (e.key === "ArrowLeft") setLightboxIndex((i) => (i - 1 + images.length) % images.length);
        if (e.key === "ArrowRight") setLightboxIndex((i) => (i + 1) % images.length);
      } else {
        if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + images.length) % images.length);
        if (e.key === "ArrowRight") setIndex((i) => (i + 1) % images.length);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxOpen, images.length]);

  // -------------------------
  // Now handle not-found
  // -------------------------
  if (!property) {
    return (
      <div className="property-detail not-found container">
        <h2>Property not found</h2>
        <p>No property matches the requested ID ({id}).</p>
        <button className="btn-back" onClick={() => navigate(-1)}>Go back</button>
      </div>
    );
  }

  // -------------------------
  // Safe derived values
  // -------------------------
 

  const prevImage = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const nextImage = () => setIndex((i) => (i + 1) % images.length);

  const openLightbox = (i = 0) => {
    setLightboxIndex(i);
    setLightboxOpen(true);
    if (typeof window !== "undefined") document.body.style.overflow = "hidden";
  };
  const closeLightbox = () => {
    setLightboxOpen(false);
    if (typeof window !== "undefined") document.body.style.overflow = "";
  };

  const onTouchStart = (e) => { touchRef.current.startX = e.touches?.[0]?.clientX ?? null; };
  const onTouchMove = (e) => { touchRef.current.endX = e.touches?.[0]?.clientX ?? null; };
  const onTouchEnd = (context = "gallery") => {
    const { startX, endX } = touchRef.current;
    touchRef.current = { startX: null, endX: null };
    if (startX == null || endX == null) return;
    const dx = startX - endX;
    if (Math.abs(dx) < 40) return;
    if (dx > 0) { if (context === "gallery") nextImage(); else setLightboxIndex((i) => (i + 1) % images.length); }
    else { if (context === "gallery") prevImage(); else setLightboxIndex((i) => (i - 1 + images.length) % images.length); }
  };

  const priceLabel = property.price ?? (property.priceValue ? `Rs. ${property.priceValue}` : "Price on request");
  const bedrooms = property?.bedrooms ?? 0;
  const area = property?.area ?? "—";
  const kitchen = property?.kitchen ?? 1;
  const bathroom = property?.bathroom ?? 1;
  const parking = property?.parking ?? (Array.isArray(property.features) && property.features.includes("Parking") ? "Available" : "Not specified");
  const description = property?.description ?? "";

  // -------------------------
  // return your JSX here (UI unchanged)
  // -------------------------



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
                  <span className="tag for-sale">{property.for === "sale" ? "For Sale" : (property.for === "rent" ? "For Rent" : (property.service ? "For Sale" : ""))}</span>
                  <span className="tag type">{property.type ?? property.service ?? ""}</span>
                </div>
              </div>

              <div className="summary-right">
                <div className="big-price">{priceLabel}</div>
                <div className="small-muted">Total Price</div>
              </div>
            </div>

            <div className="meta-icons">
              <div className="meta-item">
                <div>
                  <div className="meta-label">{bedrooms} Beds</div>
                  <div className="meta-sub">{area}</div>
                </div>
              </div>

              <div className="meta-item">
                <div>
                  <div className="meta-label">{kitchen} Kitchen</div>
                  <div className="meta-sub">Modern fittings</div>
                </div>
              </div>

              <div className="meta-item">
                <div>
                  <div className="meta-label">{bathroom} Bathroom</div>
                  <div className="meta-sub">Well ventilated</div>
                </div>
              </div>

              <div className="meta-item">
                <div>
                  <div className="meta-label">{parking}</div>
                  <div className="meta-sub">Parking</div>
                </div>
              </div>
            </div>

            <div className="property-details">
              <h3>Property Details</h3>
              <p>{description}</p>

              <h4>Features</h4>
              <ul className="features-list">
                {Array.isArray(property.features) ? property.features.map((f, i) => <li key={i}>{f}</li>) : null}
              </ul>

              {property.youtube && (
                <div className="youtube-embed" aria-label="Property video">
                  <iframe
                    title="property-video"
                    src={property.youtube}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              )}
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
                <input 
                type="date" 
                min={new Date().toISOString().split("T")[0]}  // ✅ prevents past dates
                />
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

        {lightboxOpen && (
          <div className="lightbox" role="dialog" aria-modal="true" onClick={closeLightbox} onTouchStart={(e) => { touchRef.current.startX = e.touches?.[0]?.clientX ?? null; }} onTouchMove={(e) => { touchRef.current.endX = e.touches?.[0]?.clientX ?? null; }} onTouchEnd={() => onTouchEnd("lightbox")}>
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
              <button className="lb-close" onClick={closeLightbox}>✕</button>
              <button className="lb-prev" onClick={() => setLightboxIndex((i) => (i - 1 + images.length) % images.length)}>❮</button>
              <div className="lb-image-wrap"><img src={images[lightboxIndex]} alt={`${property.title} fullscreen ${lightboxIndex + 1}`} /></div>
              <button className="lb-next" onClick={() => setLightboxIndex((i) => (i + 1) % images.length)}>❯</button>
            </div>
          </div>
        )}
      </div>

      {/* Footer kept consistent; you can remove if your site already includes a footer */}
      <footer className="site-footer">
        <div className="footer-container">
          <div className="footer-left">
            <h2 className="footer-logo">🏠 Hamro-Ghar</h2>
            <h3>Do You Need Help With Anything?</h3>
            <p>Receive updates, hot deals, tutorials, discounts sent straight in your inbox every month</p>
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
