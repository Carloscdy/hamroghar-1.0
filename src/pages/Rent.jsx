// src/pages/Rent.jsx
import React, { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Buy.css"; // reuse Buy.css styles (or create Rent.css)

import backgroundImage from "../assets/images/bg1.jpg";
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

const properties = [
  { id: 20, title: "Modern Apartment in Kathmandu", price: "Rs. 15,000 / month", priceValue: 15000, images: [img1, img2, img3], service: "Apartment", added: "2 days ago", location: "Kathmandu", features: ["Balcony", "Parking", "24/7 Security"] },
  { id: 21, title: "Cozy Studio in Lalitpur", price: "Rs. 10,000 / month", priceValue: 10000, images: [img2, img3, img4], service: "Studio", added: "5 days ago", location: "Lalitpur", features: ["Furnished", "WiFi", "Water Supply"] },
  { id: 22, title: "Luxury Villa in Pokhara", price: "Rs. 45,000 / month", priceValue: 45000, images: [img3, img4, img5], service: "Villa", added: "1 week ago", location: "Pokhara", features: ["Garden", "Garage", "Lake View"] },
  { id: 23, title: "Family House in Bhaktapur", price: "Rs. 22,000 / month", priceValue: 22000, images: [img4, img5, img6], service: "House", added: "3 days ago", location: "Bhaktapur", features: ["Spacious Rooms", "Parking", "Terrace"] },
  { id: 24, title: "Affordable Flat in Baneshwor", price: "Rs. 12,000 / month", priceValue: 12000, images: [img5, img6, img7], service: "Flat", added: "6 days ago", location: "Baneshwor", features: ["Near Market", "Public Transport"] },
  { id: 25, title: "1BHK - Pokhara", price: "Rs. 8,000 / month", priceValue: 8000, images: [img6, img7, img8], service: "Apartment", added: "2 weeks ago", location: "Pokhara", features: ["Parking"] },
  { id: 26, title: "Riverside Villa - Dharan", price: "Rs. 45,000 / month", priceValue: 45000, images: [img7, img8, img9], service: "Villa", added: "1 week ago", location: "Dharan", features: ["Swimming Pool", "Terrace"] },
  { id: 27, title: "Modern Condo - Butwal", price: "Rs. 18,000 / month", priceValue: 18000, images: [img8, img9, img10], service: "Condo", added: "4 days ago", location: "Butwal", features: ["Elevator", "Parking"] },
  { id: 28, title: "Apartment - Hetauda", price: "Rs. 13,000 / month", priceValue: 13000, images: [img9, img10, img11], service: "Apartment", added: "3 weeks ago", location: "Hetauda", features: ["Balcony", "Terrace"] },
  { id: 29, title: "2BHK Villa - Biratnagar", price: "Rs. 22,000 / month", priceValue: 22000, images: [img10, img11, img12], service: "Villa", added: "6 days ago", location: "Biratnagar", features: ["Parking","Garden"] },
  { id: 30, title: "House - Janakpur", price: "Rs. 14,000 / month", priceValue: 14000, images: [img11, img12, img13], service: "House", added: "1 week ago", location: "Janakpur", features: ["Parking"] },
  { id: 31, title: "Flat - Bharatpur", price: "Rs. 20,000 / month", priceValue: 20000, images: [img12, img13, img1], service: "Flat", added: "2 weeks ago", location: "Bharatpur", features: ["Terrace"] },
  { id: 32, title: "Cozy Home - Nepalgunj", price: "Rs. 11,000 / month", priceValue: 11000, images: [img13, img1, img2], service: "House", added: "5 days ago", location: "Nepalgunj", features: ["Parking", "Balcony"] }
];

function Rent() {
  const locationHook = useLocation();

  const [search, setSearch] = useState("");
  const [serviceFilter, setServiceFilter] = useState("all");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sort, setSort] = useState("featured");
  const [favourites, setFavourites] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const propertiesPerPage = 8;

  useEffect(() => {
    const params = new URLSearchParams(locationHook.search);
    const qLocation = params.get("location") || "";
    const qType = params.get("type") || "";
    const qPrice = params.get("price") || "";

    if (qLocation) setSearch(qLocation);
    if (qType) setServiceFilter(qType);

    if (qPrice) {
      if (qPrice === "low") {
        setMinPrice("0"); setMaxPrice("12000");
      } else if (qPrice === "mid") {
        setMinPrice("12001"); setMaxPrice("30000");
      } else if (qPrice === "high") {
        setMinPrice("30001"); setMaxPrice("");
      }
    }
  }, [locationHook.search]);

  // favourites persistence (rent)
  useEffect(() => {
    try {
      const raw = localStorage.getItem("rent_favourites");
      if (raw) setFavourites(JSON.parse(raw));
    } catch (e) {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("rent_favourites", JSON.stringify(favourites));
    } catch (e) {}
  }, [favourites]);

  const toggleFavourite = (id) => {
    setFavourites((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const filtered = useMemo(() => {
    let list = properties.slice();

    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.service.toLowerCase().includes(q) ||
          p.location.toLowerCase().includes(q)
      );
    }

    if (serviceFilter !== "all") {
      list = list.filter((p) => p.service.toLowerCase() === serviceFilter.toLowerCase());
    }

    const min = Number(minPrice) || 0;
    const max = Number(maxPrice) || Number.POSITIVE_INFINITY;
    list = list.filter((p) => (p.priceValue || 0) >= min && (p.priceValue || 0) <= max);

    if (sort === "price-asc") list.sort((a, b) => (a.priceValue || 0) - (b.priceValue || 0));
    else if (sort === "price-desc") list.sort((a, b) => (b.priceValue || 0) - (a.priceValue || 0));

    return list;
  }, [search, serviceFilter, minPrice, maxPrice, sort]);

  const totalPages = Math.ceil(filtered.length / propertiesPerPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [search, serviceFilter, minPrice, maxPrice, sort]);

  const indexOfLast = currentPage * propertiesPerPage;
  const indexOfFirst = indexOfLast - propertiesPerPage;
  const currentProperties = filtered.slice(indexOfFirst, indexOfLast);

  const renderPagination = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - 1 && i <= currentPage + 1)
      )
        pages.push(i);
      else if (i === currentPage - 2 || i === currentPage + 2) pages.push("...");
    }
    return pages.filter((p, idx, arr) => !(p === "..." && arr[idx - 1] === "..."));
  };

  return (
    <div className="buy-page">
      {/* hero */}
      <div
        className="rent-hero"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="rent-hero-overlay">
          <div className="rent-hero-inner">
            <h1>Find Properties for Rent</h1>
            <p>Search comfortable rentals across Nepal — monthly prices, short & long term.</p>
          </div>
        </div>
      </div>

      {/* filters */}
      <div className="filter-bar container" aria-label="Search and filters">
        <div className="filter-left">
          <input
            type="text"
            placeholder="Search (title, type, city...)"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-input"
            aria-label="Search properties"
          />
          <select
            value={serviceFilter}
            onChange={(e) => setServiceFilter(e.target.value)}
            className="select"
            aria-label="Property type"
          >
            <option value="all">All Types</option>
            <option value="Apartment">Apartment</option>
            <option value="Studio">Studio</option>
            <option value="House">House</option>
            <option value="Villa">Villa</option>
            <option value="Condo">Condo</option>
            <option value="Duplex">Duplex</option>
            <option value="Cottage">Cottage</option>
            <option value="Flat">Flat</option>
          </select>
        </div>

        <div className="filter-right">
          <select
            onChange={(e) => {
              const val = e.target.value;
              if (val === "all") {
                setMinPrice(""); setMaxPrice("");
              } else if (val === "low") {
                setMinPrice(""); setMaxPrice("12000");
              } else if (val === "mid") {
                setMinPrice("12001"); setMaxPrice("30000");
              } else if (val === "high") {
                setMinPrice("30001"); setMaxPrice("");
              }
            }}
            className="select small"
            aria-label="Price filter"
          >
            <option value="all">All Prices</option>
            <option value="low">Below Rs. 12,000</option>
            <option value="mid">Rs. 12,001 – 30,000</option>
            <option value="high">Above Rs. 30,000</option>
          </select>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="select small"
            aria-label="Sort properties"
          >
            <option value="featured">Featured</option>
            <option value="price-asc">Price: Low → High</option>
            <option value="price-desc">Price: High → Low</option>
          </select>
        </div>
      </div>

      {/* grid */}
      <div className="container">
        <div className="property-grid">
          {currentProperties.length === 0 ? (
            <div className="no-results">No rentals found — try adjusting filters.</div>
          ) : (
            currentProperties.map((p) => {
              const thumb = Array.isArray(p.images) ? p.images[0] : (Array.isArray(p.image) ? p.image[0] : p.image || img1);
              return (
                <article key={p.id} className="property-card">
                  <div className="image-wrap">
                    <img src={thumb} alt={p.title} />
                    <span className="tag rent">For Rent</span>

                    <button
                      className={`fav-btn ${favourites.includes(p.id) ? "active" : ""}`}
                      onClick={() => toggleFavourite(p.id)}
                      title={favourites.includes(p.id) ? "Remove favourite" : "Add to favourites"}
                      aria-label={favourites.includes(p.id) ? "Remove favourite" : "Add to favourites"}
                    >
                      {favourites.includes(p.id) ? "❤️" : "🤍"}
                    </button>
                  </div>

                  <div className="property-info">
                    <h3 className="title">
                      <Link to={`/property/${p.id}`}>{p.title}</Link>
                    </h3>

                    <div className="price-meta">
                      <div className="price">{p.price}</div>
                      <div className="added small-muted">{p.added}</div>
                    </div>

                    <div className="meta-row">
                      <div className="service">{p.service}</div>
                      <div className="location small-muted">📍 {p.location}</div>
                    </div>

                    <ul className="features">
                      {p.features.map((f, i) => (<li key={i}>{f}</li>))}
                    </ul>

                    <div className="card-actions">
                      <Link to={`/property/${p.id}`} className="btn view">View Details</Link>
                    </div>
                  </div>
                </article>
              );
            })
          )}
        </div>

        {/* pagination */}
        {totalPages > 1 && (
          <div className="pagination" role="navigation" aria-label="Pagination">
            <button onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))} disabled={currentPage === 1}>
              &lt;&lt; Prev
            </button>
            {renderPagination().map((num, idx) =>
              num === "..." ? (
                <span key={idx} className="dots">...</span>
              ) : (
                <button
                  key={num}
                  className={currentPage === num ? "active" : ""}
                  onClick={() => setCurrentPage(num)}
                >
                  {num}
                </button>
              )
            )}
            <button onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))} disabled={currentPage === totalPages}>
              Next &gt;&gt;
            </button>
          </div>
        )}
      </div>

      {/* footer same as Buy.jsx */}
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

export default Rent;
