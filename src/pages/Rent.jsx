import React, { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Rent.css";

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

// sample properties array
const properties = [
  { id: 1, title: "Modern Apartment in Kathmandu", service: "Apartment", price: 150000, beds: 2, added: "2 days ago", features: ["Balcony", "Parking", "24/7 Security"], image: img1 },
  { id: 2, title: "Cozy Studio in Lalitpur", service: "Studio", price: 100000, beds: 1, added: "5 days ago", features: ["Furnished", "WiFi", "Water Supply"], image: img2 },
  { id: 3, title: "Luxury Villa in Pokhara", service: "Villa", price: 450000, beds: 4, added: "1 week ago", features: ["Garden", "Garage", "Lake View"], image: img3 },
  { id: 4, title: "Family House in Bhaktapur", service: "House", price: 220000, beds: 3, added: "3 days ago", features: ["Spacious Rooms", "Parking", "Terrace"], image: img4 },
  { id: 5, title: "Affordable Flat in Baneshwor", service: "Flat", price: 120000, beds: 2, added: "6 days ago", features: ["Near Market", "Public Transport"], image: img5 },
  { id: 6, title: "1BHK - Pokhara", price: 8000, image: img6, service: "Apartment", added: "2 weeks ago", beds: 1, features: ["Parking"] },
  { id: 7, title: "Riverside Villa (short-term) - Dharan", price: 45000, image: img7, service: "Villa", added: "1 week ago", beds: 5, features: ["Swimming Pool","Terrace"] },
  { id: 8, title: "Modern Condo - Butwal", price: 18000, image: img8, service: "Condo", added: "4 days ago", beds: 2, features: ["Elevator","Parking"] },
  { id: 9, title: "Apartment - Hetauda", price: 13000, image: img9, service: "Apartment", added: "3 weeks ago", beds: 2, features: ["Balcony"] },
  { id: 10, title: "2BHK Villa - Biratnagar", price: 22000, image: img10, service: "Villa", added: "6 days ago", beds: 2, features: ["Parking","Garden"] },
  { id: 11, title: "House - Janakpur", price: 14000, image: img11, service: "House", added: "1 week ago", beds: 3, features: ["Parking"] },
  { id: 12, title: "Flat - Bharatpur", price: 20000, image: img12, service: "Flat", added: "2 weeks ago", beds: 3, features: ["Terrace"] },
  { id: 13, title: "Cozy Home - Nepalgunj", price: 11000, image: img13, service: "House", added: "5 days ago", beds: 2, features: ["Parking"] }
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

  // convert Rs to Lakhs for display
  const formatPrice = (price) => {
    if (price >= 100000) return `Rs. ${(price / 100000).toFixed(1)} Lakh`;
    return `Rs. ${price.toLocaleString()}`;
  };

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
        setMinPrice("30001"); setMaxPrice("10000000");
      }
    }
  }, [locationHook.search]);

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
          p.service.toLowerCase().includes(q)
      );
    }

    if (serviceFilter !== "all" && serviceFilter !== "") {
      list = list.filter(
        (p) => p.service.toLowerCase() === serviceFilter.toLowerCase()
      );
    }

    const min = Number(minPrice) || 0;
    const max = Number(maxPrice) || Number.POSITIVE_INFINITY;
    list = list.filter((p) => p.price >= min && p.price <= max);

    if (sort === "price-asc") {
      list.sort((a, b) => a.price - b.price);
    } else if (sort === "price-desc") {
      list.sort((a, b) => b.price - a.price);
    }

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
      if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
        pages.push(i);
      } else if (i === currentPage - 2 || i === currentPage + 2) {
        pages.push("...");
      }
    }
    return pages.filter((p, idx, arr) => !(p === "..." && arr[idx - 1] === "..."));
  };

  return (
    <div className="rent-page">
      {/* hero */}
      <div className="rent-hero" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="rent-hero-overlay">
          <div className="rent-hero-inner">
            <h1>Find a Property for Rent</h1>
            <p>Search comfortable rentals across Nepal — monthly prices, short & long term.</p>
          </div>
        </div>
      </div>

      {/* filters bar */}
      <div className="filter-bar container">
        <div className="filter-left">
          <input
            type="text"
            placeholder="Search (title, type, city...)"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-input"
          />
          <select
            value={serviceFilter}
            onChange={(e) => setServiceFilter(e.target.value)}
            className="select"
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
          {/* Price dropdown filter */}
          <select
            onChange={(e) => {
              const val = e.target.value;
              if (val === "all") { setMinPrice(""); setMaxPrice(""); }
              else if (val === "low") { setMinPrice(""); setMaxPrice("12000"); }
              else if (val === "mid") { setMinPrice("12001"); setMaxPrice("30000"); }
              else if (val === "high") { setMinPrice("30001"); setMaxPrice(""); }
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
          >
            <option value="featured">Featured</option>
            <option value="price-asc">Price: Low → High</option>
            <option value="price-desc">Price: High → Low</option>
          </select>
        </div>
      </div>

      {/* property grid */}
      <div className="container">
        <div className="property-grid">
          {currentProperties.length === 0 ? (
            <div className="no-results">No rentals found — try adjusting filters.</div>
          ) : (
            currentProperties.map((p) => (
              <article key={p.id} className="property-card">
                <div className="image-wrap">
                  <img src={p.image} alt={p.title} />
                  <span className="tag rent">For Rent</span>
                  <button
                    className={`fav-btn ${favourites.includes(p.id) ? "active" : ""}`}
                    onClick={() => toggleFavourite(p.id)}
                    title={favourites.includes(p.id) ? "Remove favourite" : "Add to favourites"}
                  >
                    {favourites.includes(p.id) ? "❤️" : "🤍"}
                  </button>
                </div>

                <div className="property-info">
                  <h3 className="title">
                    <Link to={`/property/${p.id}`}>{p.title}</Link>
                  </h3>

                  <div className="price-meta">
                    <div className="price">{formatPrice(p.price)} <span className="per">/ month</span></div>
                    <div className="added">{p.added}</div>
                  </div>

                  <div className="meta-row">
                    <div className="service">{p.service}</div>
                    <div className="beds">{p.beds} bd</div>
                  </div>

                  <ul className="features">
                    {p.features.map((f, i) => (<li key={i}>{f}</li>))}
                  </ul>

                  <div className="card-actions">
                    <Link to={`/property/${p.id}`} className="btn view">View Details</Link>
                    <button className="btn contact">Contact</button>
                  </div>
                </div>
              </article>
            ))
          )}
        </div>

        {/* pagination */}
        {totalPages > 1 && (
          <div className="pagination">
            <button onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))} disabled={currentPage === 1}>
              &lt;&lt; Prev
            </button>
            {renderPagination().map((num, idx) =>
              num === "..." ? (
                <span key={idx} className="dots">...</span>
              ) : (
                <button key={num} className={currentPage === num ? "active" : ""} onClick={() => setCurrentPage(num)}>
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
